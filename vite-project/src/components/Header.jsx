import React from "react";

const Header = () => {
    return (
        <header className="header bg-bright" id="header">
            <div className="container">
                <div className="header-content text-center">
                    <h6 className="text-uppercase text-blue-dark fs-14 fw-6 ls-1">online resume builder</h6>
                    <h1 className="lg-title">Only 2% of resumes make it past the first round. Be in the top 2%</h1>
                    <p className="text-dark fs-18">
                        Use professional field-tested resume templates that follow the exact 'resume rules' employers look for. Easy to use and done within minutes - try now for free!
                    </p>
                    <a href="resume.html" className="btn btn-primary text-uppercase">create my resume</a>
                    <img src="./assets/dublin-resume-templates.avif" alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;