import React from "react";
import PropTypes from "prop-types";
import "./Profile.css"; 

const Profile = ({ url, name, email, bio, skills }) => {
  return (
    <div className="profile-card">
      <img src={url} alt={`${name}'s profile`} className="profile-img" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-email">{email}</p>
      <p className="profile-bio">{bio}</p>
      <div className="profile-skills">
        {skills.map((skill, index) => (
          <span key={index} className="profile-skill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

Profile.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Profile;
