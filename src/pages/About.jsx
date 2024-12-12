import '../css/style.css';

import React, { useState, useEffect } from "react";
import { getProfiles, addProfile } from "../service/profileService.js";
import Profile from "../profile/profile.jsx";
import '../css/App.css';

const ProfileApp = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newProfile, setNewProfile] = useState({
    imageUrl: "",
    name: "",
    email: "",
    bio: "",
    skills: "",
  });

  // Cargar perfiles desde la API
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const data = await getProfiles();
        setProfiles(data);
      } catch (error) {
        console.error("Error al recoger los perfiles:", error);
      }
    };
    fetchProfiles();
  }, []);

  // Barra de busqueda
  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prev) => ({ ...prev, [name]: value }));
  };

  // Envio en le formulario
  const handleAddProfile = async (e) => {
    e.preventDefault();
    try {
      const profileToAdd = {
        ...newProfile,
        skills: newProfile.skills.split(",").map((skill) => skill.trim()),
      };
      const addedProfile = await addProfile(profileToAdd);
      setProfiles((prev) => [...prev, addedProfile]);
      setNewProfile({ imageUrl: "", name: "", email: "", bio: "", skills: "" });
    } catch (error) {
      console.error("Error al anadir el perfil:", error);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Perfiles</h1>
      </header>

      {/* Busqueda */}
      <div className="search-container">
        <div className="search-bar-wrapper">
          <input
            type="text"
            placeholder="Buscar por nombre o habilidad..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
          <span className="material-symbols-outlined search-icon">search</span>
        </div>
      </div>


      {/* Lista de perfiles */}
      <div className="profile-grid">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <Profile key={profile.id} {...profile} />
          ))
        ) : (
          <p className="no-results">No se encontraron perfiles.</p>
        )}
      </div>

      {/* Formulario para anadir perfiles */}
      <form onSubmit={handleAddProfile} className="profile-form">
        <h2>Agregar Nuevo Perfil</h2>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={newProfile.name}
          onChange={handleInputChange}
          required
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newProfile.email}
          onChange={handleInputChange}
          required
          className="form-input"
        />
        <textarea
          name="bio"
          placeholder="Biografía"
          value={newProfile.bio}
          onChange={handleInputChange}
          className="form-textarea"
        />
        <input
          type="text"
          name="skills"
          placeholder="Habilidades (separadas por comas)"
          value={newProfile.skills}
          onChange={handleInputChange}
          className="form-input"
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="URL de la imagen"
          value={newProfile.imageUrl}
          onChange={handleInputChange}
          className="form-input"
        />
         <input
          type="text"
          name="isPremium"
          placeholder="true/false"
          value={newProfile.isPremium}
          onChange={handleInputChange}
          className="form-input"
        />
        <button type="submit" className="form-button">Agregar Perfil</button>
      </form>
    </div>
  );
};

export default ProfileApp;
