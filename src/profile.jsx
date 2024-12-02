import React from "react";
import PropTypes from "prop-types";
import "./Profile.css"; 

const Profile = ({ url, name, email, bio, skills, isPremium}) => {
  const defaultImage = "https://via.placeholder.com/150";
  return (
    <div className="profile-card">
       {isPremium && (
          <span className="material-symbols-outlined verified-badge">
            verified
          </span>
        )}
      <img src={url || defaultImage} alt={`${name}'s profile`} className="profile-img" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-email">{email}</p>
      <p className="profile-bio">
        {bio ? bio : "Este usuario no ha añadido una bio aún."}
      </p>      
      {skills && skills.length > 0 && (
      <div className="profile-skills">
        {skills.map((skill, index) => (
          <span key={index} className="profile-skill">
            {skill}
          </span>
        ))}
      </div>
       )}
    </div>
  );
};

Profile.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  bio: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
  isPremium: PropTypes.bool,
};

Profile.defaultProps = {
  url: "",
  bio: "",
  skills: [],
  isPremium: false,
};

export default Profile;
