import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";



function Card({ data }) {
  return (
    <div className="card">
      <img src={data.avatar} alt={`${data.name}'s avatar`} className="avatar" />

      <div className="right">
        <div className="one">
          <h4 className="name">{data.name}</h4>
          <p className="location">{data.location}</p>
        </div>

        <div className="social-links">
          <a href={data.social.GitHub} target="_blank" className="social-item">
            <Github size={20} color="white" />
          </a>
          <a href={data.social.LinkedIn} target="_blank" className="social-item">
            <Linkedin size={20} color="white" />
          </a>
          <a href={data.social.Twitter} target="_blank" className="social-item">
            <Twitter size={20} color="white" />
          </a>
        </div>

        <p className="bio">{data.bio}</p>

        <div className="two">
          <ul className="skills">
            {data.skills.map((skill, index) => (
              <li key={index} className="skill-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
