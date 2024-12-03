import React from "react";
import PropTypes from "prop-types";
import "./Profile.css"; 

const Profile = ({ url, name, email, bio, skills, isPremium}) => {
  const defaultImage = `https://api.dicebear.com/6.x/initials/svg?seed=${(name)}`;  
  
  return (
    <div className={`profile-card ${isPremium ? "profile-premium" : ""}`}>
      
   <div className="profile-header">
        <img 
          src={url || defaultImage} 
          alt={`${name}'s profile`} 
          className="profile-img" 
        />
      </div>
      <h2 className="profile-name">{name}  {name}{" "}
        {isPremium && (
          <span className="material-symbols-outlined verified-badge">
            verified
          </span>
        )}
        </h2>
      <p className="profile-email">{email}</p>
      <p className="profile-bio">
        {bio ? bio : "Este usuario no ha añadido una bio aún."}
      </p>      
      {skills && skills.length > 0 && (
      <ul className="profile-skills">        
          {skills.map((skill, index) => (
          <li key={index} className="profile-skill">
              {skill}
          </li>
        ))}
      </ul>
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
