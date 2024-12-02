import React from "react";
import Profile from "./profile.jsx";
import "./App.css";

const App = () => {
  const members = [
    {
      url: "https://i.pinimg.com/736x/83/7f/8f/837f8fdf2801ef1fc77f04b9c7357469.jpg",
      name: "Alfonso",
      email: "alfonDev@gmail.com",
      bio: "Full stack developer, ready to learn new skills",
      skills: ["React", "CSS", "JavaScript"],
    }
  ];

  return (
    <div className="app-container">
      <header className="app-header">
      <h1>About Us</h1>
      </header>
      <main className="profile-grid">
        {members.map((member, index) => (
          <Profile
            key={index}
            url={member.url}
            name={member.name}
            email={member.email}
            bio={member.bio}
            skills={member.skills}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
