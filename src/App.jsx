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
      isPremium: true,
    },
    {
      url: "https://i.pinimg.com/564x/50/f7/18/50f718efd0743658c3386850d568a60f.jpg",
      name: "Gru",
      email: "Gru@gmail.com",
      bio: "Full stack developer, ready to learn new skills",
      skills: ["React", "CSS", "JavaScript"],
      isPremium: false,
    },
    {
      url: "https://i.pinimg.com/564x/50/f7/18/50f718efd0743658c3386850d568a60f.jpg",
      name: "Gru",
      email: "Gru@gmail.com",
      bio: "Full stack developer, ready to learn new skills",
      skills: ["React", "CSS", "JavaScript"],
      isPremium: false,
    },
    {
      url: "https://i.pinimg.com/564x/50/f7/18/50f718efd0743658c3386850d568a60f.jpg",
      name: "Gru",
      email: "Gru@gmail.com",
      bio: "Full stack developer, ready to learn new skills",
      skills: ["React", "CSS", "JavaScript"],
      isPremium: false,
    },
    {
      url: "https://i.pinimg.com/564x/50/f7/18/50f718efd0743658c3386850d568a60f.jpg",
      name: "Gru",
      email: "Gru@gmail.com",
      bio: "Full stack developer, ready to learn new skills",
      skills: ["React", "CSS", "JavaScript"],
      isPremium: true,
    },
    {
      url: "https://i.pinimg.com/564x/50/f7/18/50f718efd0743658c3386850d568a60f.jpg",
      name: "Gru",
      email: "Gru@gmail.com",
      bio: "Full stack developer, ready to learn new skills",
      skills: ["React", "CSS", "JavaScript"],
      isPremium: false,
    },
    {
      url: "",
      name: "Gru",
      email: "Gru@gmail.com",
      bio: "Full stack developer, ready to learn new skills",
      skills: ["React", "CSS", "JavaScript"],
      isPremium: true,
    },
    
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
            isPremium={member.isPremium}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
