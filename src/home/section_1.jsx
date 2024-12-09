import React from 'react';
import { useUser } from '@clerk/clerk-react'; // Adjust the import based on your actual authentication provider
import { useNavigate } from 'react-router-dom';

export const Section_1 = () => {
  const { user, isSignedIn } = useUser(); // Get authentication status
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleButtonClick = () => {
    if (isSignedIn) {
      navigate('/dashboard'); // Redirect to dashboard if signed in
    } else {
      navigate('/auth/sign-in'); // Redirect to sign-in page if not signed in
    }
  };

  return (
    <section id='section_1'>
      <div id='inner_section_1'>
        <p>ONLINE RESUME BUILDER</p>
        <h1>Only 2% of resumes make it past the first round. Be in the top 2%</h1>
        <p>Use professional field-tested resume templates that follow the exact ‘resume rules’ employers look for. Easy to use and done within minutes - try now for free!</p>
        <button onClick={handleButtonClick}>Create My Resume</button>
        <img 
          src="https://s3.resume.io/cdn-cgi/image/width=770,height=350,dpr=1.5,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg" 
          alt="" 
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        />
      </div>
    </section>
  );
};
