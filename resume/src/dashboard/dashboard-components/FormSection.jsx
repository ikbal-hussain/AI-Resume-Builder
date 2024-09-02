import React, { useState } from "react";
import axios from "axios";
import "../dash-styles/CreateResume.css";

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

  const [aiProjects, setAiProjects] = useState(formData.projects || "");
  const [aiCertifications, setAiCertifications] = useState(formData.certifications || "");
  const [aiEducation, setAiEducation] = useState(formData.education || "");

  async function generateSummary() {
    try {
      console.log("Generating summary...");
      const prompt = `Write a plain-text resume summary for a ${userInputs.role} with ${userInputs.experience} of experience. Key skills include: ${userInputs.keySkills}. Please do not include any markdown or headings.`;

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

  async function modifyContent(sectionName) {
    try {
      const content = formData[sectionName];
      const prompt = `Correct and organize the following ${sectionName} content for a resume: ${content}. Modify if needed. Write in plain text. dont give markdown. Dont add special characters. Dont try to format text`;

      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyARWErCJLtu2XQpVCLTi6YV0EeYwSVTXWI",
        method: "post",
        data: { contents: [{ parts: [{ text: prompt }] }] },
      });

      const res = response['data']['candidates'][0]['content']['parts'][0]['text']

      if (sectionName === "projects") {
        setAiProjects(res);
        handleChange({ target: { name: "projects", value: res } });
      } else if (sectionName === "certifications") {
        setAiCertifications(res);
        handleChange({ target: { name: "certifications", value: res } });
      } else if (sectionName === "education") {
        setAiEducation(res);
        handleChange({ target: { name: "education", value: res } });
      }

      console.log(`${sectionName} modified:`, res);
    } catch (error) {
      console.error(`Error modifying ${sectionName}:`, error);
    }
  }

  const handlePopupChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
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
        <div className="form-group">
          <label>Projects:</label>
          <textarea
            name="projects"
            value={formData.projects}
            onChange={handleChange}
          />
          <button type="button" onClick={() => modifyContent('projects')}>Modify with AI</button>
        </div>
        <div className="form-group">
          <label>Education:</label>
          <textarea
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={() => modifyContent('education')}>Modify with AI</button>
        </div>
        <div className="form-group">
          <label>Experience:</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Skills:</label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
            placeholder="Comma Separated"
          />
        </div>
        <div className="form-group">
          <label>Certifications:</label>
          <textarea
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
          />
          <button type="button" onClick={() => modifyContent('certifications')}>Modify with AI</button>
        </div>
        <button type="submit">Create Resume</button>
      </form>

      {/* Preview Sections
      {aiSummary && (
        <div className="preview-section mt-6">
          <h4>Preview of Generated Summary:</h4>
          <p>{aiSummary}</p>
        </div>
      )}
      {aiProjects && (
        <div className="preview-section mt-6">
          <h4>Preview of Modified Projects:</h4>
          <p>{aiProjects}</p>
        </div>
      )}
      {aiCertifications && (
        <div className="preview-section mt-6">
          <h4>Preview of Modified Certifications:</h4>
          <p>{aiCertifications}</p>
        </div>
      )}
      {aiEducation && (
        <div className="preview-section mt-6">
          <h4>Preview of Modified Education:</h4>
          <p>{aiEducation}</p>
        </div>
      )} */}
    </div>
  );
}

export default FormSection;
