import React, { useState } from "react";
import axios from "axios";
import "../dash-styles/CreateResume.css";
import "../dash-styles/formSection.css";

function FormSection({
  formData,
  handleChange,
  handleFileChange,
  handleSubmit,
}) {
  const [aiSummary, setAiSummary] = useState(formData.summary || "");
  const [showPopup, setShowPopup] = useState(false);
  const [userInputs, setUserInputs] = useState({
    role: '',
    experience: '',
    keySkills: ''
  });

  // Handling multiple entries as arrays
  const [aiProjects, setAiProjects] = useState(formData.projects || []);
  const [aiCertifications, setAiCertifications] = useState(formData.certifications || []);
  const [aiEducation, setAiEducation] = useState(formData.education || []);
  const [aiExperience, setAiExperience] = useState(formData.experience || []);

  async function generateSummary() {
    try {
      console.log("Generating summary...");
      const prompt = `Write a plain-text resume 4-5 line summary for a ${userInputs.role} with ${userInputs.experience} of experience. Key skills include: ${userInputs.keySkills}. Please do not include any markdown or headings.`;

      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyARWErCJLtu2XQpVCLTi6YV0EeYwSVTXWI",
        method: "post",
        data: 
          { contents: [{ parts: [{ text: prompt }] }] },
        
      });

      const res = response['data']['candidates'][0]['content']['parts'][0]['text']

      console.log("Summary generated:", res);
      setAiSummary(res);

      handleChange({ target: { name: "summary", value: res } });
      setShowPopup(false);
    } catch (error) {
      console.error("Error generating summary:", error);
    }
  }

  async function modifyContent(sectionName, index) {
    try {
      const content = formData[sectionName][index];
      const prompt = `Correct and organize the following ${sectionName} content for a resume: ${content}. Modify if needed. Write in plain text. dont give markdown. Dont add special characters. Dont try to format text`;

      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyARWErCJLtu2XQpVCLTi6YV0EeYwSVTXWI",
        method: "post",
        data: { contents: [{ parts: [{ text: prompt }] }] },
      });

      const res = response['data']['candidates'][0]['content']['parts'][0]['text']

      const updatedSection = [...formData[sectionName]];
      updatedSection[index] = res;
      
      handleChange({ target: { name: sectionName, value: updatedSection } });

      if (sectionName === "projects") {
        setAiProjects(updatedSection);
      } else if (sectionName === "certifications") {
        setAiCertifications(updatedSection);
      } else if (sectionName === "education") {
        setAiEducation(updatedSection);
      } else if (sectionName === "experience") {
        setAiExperience(updatedSection);
      }

      console.log(`${sectionName} modified:`, res);
    } catch (error) {
      console.error(`Error modifying ${sectionName}:`, error);
    }
  }

  const handlePopupChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (sectionName, index, value) => {
    const updatedSection = [...formData[sectionName]];
    updatedSection[index] = value;
    handleChange({ target: { name: sectionName, value: updatedSection } });
  };

  const addSectionEntry = (sectionName) => {
    handleChange({ target: { name: sectionName, value: [...formData[sectionName], ""] } });
  };

  const removeSectionEntry = (sectionName, index) => {
    const updatedSection = [...formData[sectionName]];
    updatedSection.splice(index, 1);
    handleChange({ target: { name: sectionName, value: updatedSection } });
  };

  return (
    <div className="form-section">
      {/* Trigger popup for summary generation */}
      <button className="mb-3" onClick={() => setShowPopup(true)}>
        <i className="fa-solid fa-wand-magic-sparkles"></i> Generate Summary with AI
      </button>

      {/* Popup Modal for User Inputs */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h4>Enter Details for Summary Generation</h4>
            <div className="form-group">
              <label>Role:</label>
              <input
                type="text"
                name="role"
                value={userInputs.role}
                onChange={handlePopupChange}
                placeholder="e.g., React Developer"
              />
            </div>
            <div className="form-group">
              <label>Years of Experience:</label>
              <input
                type="text"
                name="experience"
                value={userInputs.experience}
                onChange={handlePopupChange}
                placeholder="e.g., 2 years"
              />
            </div>
            <div className="form-group">
              <label>Key Skills:</label>
              <input
                type="text"
                name="keySkills"
                value={userInputs.keySkills}
                onChange={handlePopupChange}
                placeholder="e.g., React, JavaScript, CSS"
              />
            </div>
            <button onClick={generateSummary}>Generate Summary</button>
            <button onClick={() => setShowPopup(false)}>Cancel</button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Profile Image:</label>
          <input
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>LinkedIn:</label>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Professional Summary:</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          />
        </div>

        {/* Multiple Projects */}
        <div className="form-group">
          <label>Projects:</label>
          {formData.projects.map((project, index) => (
            <div key={index}>
              <textarea
                name={`projects-${index}`}
                value={project}
                onChange={(e) => handleArrayChange("projects", index, e.target.value)}
              />
              <button type="button" onClick={() => modifyContent('projects', index)}> <i className="fa-solid fa-wand-magic-sparkles"></i> Modify with AI</button>
              <button type="button" onClick={() => removeSectionEntry('projects', index)}><i class="fa-solid fa-xmark"></i> Remove Project</button>
            </div>
          ))}
          <button type="button" onClick={() => addSectionEntry('projects')}><i class="fa-solid fa-plus"></i> Add Project</button>
        </div>

        {/* Multiple Education Entries */}
        <div className="form-group">
          <label>Education:</label>
          {formData.education.map((edu, index) => (
            <div key={index}>
              <textarea
                name={`education-${index}`}
                value={edu}
                onChange={(e) => handleArrayChange("education", index, e.target.value)}
              />
              <button type="button" onClick={() => modifyContent('education', index)}> <i className="fa-solid fa-wand-magic-sparkles"></i> Modify with AI</button>
              <button type="button" onClick={() => removeSectionEntry('education', index)}><i class="fa-solid fa-xmark"></i> Remove Education</button>
            </div>
          ))}
          <button type="button" onClick={() => addSectionEntry('education')}><i class="fa-solid fa-plus"></i> Add Education</button>
        </div>

        {/* Multiple Experience Entries */}
        <div className="form-group">
          <label>Experience:</label>
          {formData.experience.map((exp, index) => (
            <div key={index}>
              <textarea
                name={`experience-${index}`}
                value={exp}
                onChange={(e) => handleArrayChange("experience", index, e.target.value)}
              />
              <button type="button" onClick={() => modifyContent('experience', index)}> <i className="fa-solid fa-wand-magic-sparkles"></i> Modify with AI</button>
              <button type="button" onClick={() => removeSectionEntry('experience', index)}><i class="fa-solid fa-xmark"></i> Remove Experience</button>
            </div>
          ))}
          <button type="button" onClick={() => addSectionEntry('experience')}><i class="fa-solid fa-plus"></i> Add Experience</button>
        </div>

        {/* Multiple Certification Entries */}
        <div className="form-group">
          <label>Certifications:</label>
          {formData.certifications.map((cert, index) => (
            <div key={index}>
              <textarea
                name={`certifications-${index}`}
                value={cert}
                onChange={(e) => handleArrayChange("certifications", index, e.target.value)}
              />
              <button type="button" onClick={() => modifyContent('certifications', index)}> <i className="fa-solid fa-wand-magic-sparkles"></i> Modify with AI</button>
              <button type="button" onClick={() => removeSectionEntry('certifications', index)}><i class="fa-solid fa-xmark"></i> Remove Certification</button>
            </div>
          ))}
          <button type="button" onClick={() => addSectionEntry('certifications')}><i class="fa-solid fa-plus"></i> Add Certification</button>
        </div>

        <div className="form-group">
          <label>Key Skills:</label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>
        <button type="submit"><i class="fa-solid fa-circle-plus"></i> Create Resume</button>
      </form>
    </div>
  );
}

export default FormSection;
