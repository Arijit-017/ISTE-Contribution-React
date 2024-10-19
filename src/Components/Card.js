import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

function Card({ data }) {
  return (
    <motion.div
      className="card"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 15px rgba(255, 255, 255, 0.4)" // Soft glow on hover
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }} // Spring animation for card
    >
      <motion.img
        src={data.avatar}
        alt={`${data.name}'s avatar`}
        className="avatar"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.6)" // Soft glow on avatar hover
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }} // Spring animation for avatar
      />

      <div className="right">
        <div className="one">
          <h4 className="name">{data.name}</h4>
          <p className="location">{data.location}</p>
        </div>

        <div className="social-links">
          <motion.a
            href={data.social.GitHub}
            target="_blank"
            className="social-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }} // Spring animation for social icons
          >
            <Github size={20} color="white" />
          </motion.a>
          <motion.a
            href={data.social.LinkedIn}
            target="_blank"
            className="social-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }} // Spring animation for social icons
          >
            <Linkedin size={20} color="white" />
          </motion.a>
          <motion.a
            href={data.social.Twitter}
            target="_blank"
            className="social-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }} // Spring animation for social icons
          >
            <Twitter size={20} color="white" />
          </motion.a>
        </div>

        <p className="bio">{data.bio}</p>

        <div className="two">
          <ul className="skills">
            {data.skills.map((skill, index) => (
              <motion.li
                key={index}
                className="skill-item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }} // Spring animation for skills
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
