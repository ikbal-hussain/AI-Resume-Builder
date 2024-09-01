import React, { useState } from "react";
import "../dash-styles/CreateResume.css"; // Ensure the path is correct
import axios from "axios";



  async function generateSummary() {
    console.log("loading...")
   const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyARWErCJLtu2XQpVCLTi6YV0EeYwSVTXWI",
      method: "post",
      data: { contents: [{ parts: [{ text: "Write a generic resume summary for fresher react developer in 3-4 lines. dont ask further questions" }] }] },
    });

    
    const res = response['data']['candidates'][0]['content']['parts'][0]['text']
    
    console.log(res)
    setAiSummary(res)
    // formData.summary = "dfgzfvsdvzsvsd"
  }

function FormSection({
  formData,
  handleChange,
  handleFileChange,
  handleSubmit,
}) {

  const [aiSummary, setAiSummary] = useState()



  return (
    <div className="form-section">
      <h3>Create a New Resume</h3>
      {/* <button onClick={generateSummary}>Generate Summary with AI</button> */}
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
        {/* <div className="form-group">
          <label>GitHub:</label>
          <input
            type="text"
            name="github"
            value={formData.github}
            onChange={handleChange}
          />
        </div> */}
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
            value={formData.summary || aiSummary}
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
        </div>

        <div className="form-group">
          <label>Education:</label>
          <textarea
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          />
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
          />
        </div>
        <div className="form-group">
          <label>Certifications:</label>
          <textarea
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
          />
        </div>

        {/* <button type="submit">Create Resume</button> */}
      </form>
    </div>
  );
}

export default FormSection;
