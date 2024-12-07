import React, { useState } from "react";
import PropTypes from "prop-types";
import "./css/Profile.css"; 


import reactIcon from "./img/react.png";
import javaIcon from "./img/java.png";
import pythonIcon from "./img/python.png";

const skillIcons = {
  React: reactIcon,
  Python: pythonIcon,
  Java: javaIcon,

}

const Profile = ({imageUrl, name, email, bio, skills, isPremium}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const defaultImage = `https://api.dicebear.com/6.x/initials/svg?seed=${(name)}`;  

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite); 
  };
  
  return (
     <div className={`profile-card ${isPremium ? "profile-premium" : ""}`}>
      <div>
        <button
          className={`favorite-button ${isFavorite ? "favorite-active" : ""}`}
          onClick={handleFavoriteClick}
          title={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
        >
        
          <span className="material-symbols-outlined">favorite</span>
        
        </button>
      </div>

   <div className="profile-header">
        <img 
          src={imageUrl || defaultImage} 
          alt={`${name}'s profile`} 
          className="profile-img" 
        />
      </div>
       <h2 className="profile-name">
        {name}{" "}
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
              {skillIcons[skill] ? (
                <img
                  src={skillIcons[skill]}
                  alt={skill}
                  className="skill-icon"
                />
              ) : (
                skill // Si no hay icono, se muestra el texto de la habilidad
              )}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

Profile.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  bio: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
  isPremium: PropTypes.bool,
};

Profile.defaultProps = {
  imageUrl: "",
  bio: "",
  skills: [],
  isPremium: false,
};

export default Profile;
