import facebooklogo from "./pic/facebooklogo.svg"
import instagram_icon from "./pic/instagram_icon.svg"
import twitter_icon from "./pic/twitter_icon.svg"
import youtube_icon from "./pic/youtube_icon.svg"


export const Footer=()=>{
    return(
        <footer>
        
        <div id="footer_socialmedia">
            <img src="/logo_white-removebg.png" alt="" id="footer_logo" className="h-16"/>
            <div id="socialmedia">
                <img src={facebooklogo} alt=""/>
                <img src={instagram_icon} alt=""/>
                <img src={twitter_icon} alt=""/>
                <img src={youtube_icon} alt=""/>
            </div>

        </div>
        <div id="footer">
            <div>
                <h3>Job Seekers</h3>
                <p>Resume Examples </p>
                <p>Resume Templates</p>
                <p>Cover Letter </p>
                <p>Create a Resume</p>
                <p>Job Search</p>
            </div>
            

    






            <div>
    
                <h3>Our company</h3>
                <p>About Us</p>
                <p>Pricing</p>
                <p>Sponsorship Program</p>
                <p>Media Kit</p>
                <p>Affiliates</p>
            </div>
            <div>
                <h3>Career Resources</h3>
                <p>Resume Help</p>
                <p>Job Interview</p>
                <p>Career</p>
                <p>Cover Letter</p>
                <p>Blog</p>
                
            </div>
            <div>
                <h3>Support And Other</h3>
                <p>Help Center</p>
                <p>Video Tutorials</p>
                <p>Download For Crome</p>
                <p>Download For Firefox</p>
                <p>Developer Tools</p>
            </div>
        </div>
        <div id="copywrite">
            <div>
                <p>Scheduler 2024</p>
                <p>All Rights Reserved</p>
             </div>

            <div>
                <p>Terms & Condition</p>
                <p>Privacy Policy</p>
                <p>Contact Us</p>
            </div>
        </div>
    
    
</footer>
    )
}