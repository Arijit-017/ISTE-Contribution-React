import React from "react";

function Card({ data }) {
  return (
    <div className="card">
      <img src={data.avatar} alt={`${data.name}'s avatar`} className="avatar" />

      <div className="right">
        <div className="one">
          <h4 className="name">{data.name}</h4>
          <p className="location">{data.location}</p>
        </div>

        <p className="bio">{data.bio}</p>

        <div className="two">
          <h4>Skills:</h4>
          <ul className="skills">
            {data.skills.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>

        <div className="three">
          <h4>Social Links:</h4>
          <ul className="social-links">
            {Object.entries(data.social).map(([platform, url]) => (
              <li key={platform} className="social-item">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
