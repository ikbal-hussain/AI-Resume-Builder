import React, { useState } from "react";
import FormSection from "./FormSection";
import PreviewSection from "./PreviewSection";
import "../dash-styles/CreateResume.css";
import { FingerprintIcon } from "lucide-react";

function CreateResume() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    github: "",
    linkedin: "",
    education: "",
    experience: "",
    skills: "",
    certifications: "",
    projects: "",
    summary: "",
    profileImage: null,
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Resume Data:", formData);
    alert("Resume Created Successfully!");
  
    // Retrieve existing resumes from localStorage
    const existingResumes = JSON.parse(localStorage.getItem("resumesData")) || [];
  
    // Add the new resume to the array
    existingResumes.push(formData);
  
    // Save the updated array back to localStorage
    localStorage.setItem("resumesData", JSON.stringify(existingResumes));
    
  };
  

  return (
    <div className="create-resume-container">
      <FormSection
        formData={formData}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
      />
      <PreviewSection formData={formData} />
    </div>
  );
}

export default CreateResume;
