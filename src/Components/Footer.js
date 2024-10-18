import React from "react";
import "./Footer.css";

function Footer() {

function join(){
  window.location.href="https://hitiste.vercel.app/join-membership";
}
function website(){
  window.location.href="https://hitiste.vercel.app/";
}
function contactus(){
  window.location.href="https://www.linkedin.com/company/iste-hit-sc/posts/?feedView=all";
}


  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>ISTE HIT SC</h4>
            <a onClick={website}>
              <p>The ISTE Student Chapter at Haldia Institute of Technology is your gateway to innovation in educational technology. Our platform encourages engagement in research, workshops, and collaborative projects that advance technology and education.</p>
            </a>
          </div>

          <div className="sb_footer-links_div">
            <h4>Useful Links</h4>
            <a onClick={join}>
              <p>Join</p>
            </a>
            <a >
              <p>About</p>
            </a>
            <a onClick={contactus}>
              <p>Contact Us</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Follow Us</h4>
            <div className="socialmedia">
              <p>
                <a href="https://www.instagram.com/iste.hit.sc/" target="_blank" rel="noopener noreferrer">
                  <img src="Instagram.png.webp" alt="Instagram" />
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/company/iste-hit-sc/mycompany/" target="_blank" rel="noopener noreferrer">
                  <img src="Linkedin.png" alt="LinkedIn" />
                </a>
              </p>
              <p>
                <a href="https://github.com/ISTE-HIT" target="_blank" rel="noopener noreferrer">
                  <img src="github.webp" alt="GitHub" />
                </a>
              </p>
            </div>
          </div>


          <hr></hr>
            <div className="sb_footer-copyright">
              <p>
                @2024 ISTE. All right reserved.
              </p>
            </div>

          
        </div>
      </div>
    </div>
  )
}

export default Footer;
