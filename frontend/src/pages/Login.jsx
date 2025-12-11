// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// IMPORTANT: This import connects the styling!
import '../App.css'; 

export default function Login() {
  const [isEmployee, setIsEmployee] = useState(false);
  const navigate = useNavigate();

  const handleEmployeeLogin = (e) => {
    e.preventDefault();
    navigate('/admin');
  };

  const handleStudentLogin = (e) => {
    e.preventDefault();
    window.location.href = "https://hackthon1-aee07kb13-siddu-kutchulas-projects.vercel.app/";
  };


  return (
    <div className="login-root">
      {/* Background Video */}
      <div className="video-wrapper">
        <video autoPlay loop muted playsInline className="bg-video">
          <source
            src="https://res.cloudinary.com/dfxec3czi/video/upload/v1757921880/Drone_shot_Aditya_ntq0k5.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Main Content */}
        <div className="login-content">
          {/* Logo Section */}
          <div className="logo-section centered-logo">
            <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJUpXOs0chE8i7X7bhjr3MnK8PWHV1DHQlg&s"
          alt="Aditya University Logo"
          className="logo-img"
            />
            <h1>Aditya University</h1>
            <p>Student & Employee Login Portal</p>
          </div>

          {/* Toggle Switch */}
        <div className="toggle-wrapper">
          <div className="toggle-box">
            <button
              onClick={() => setIsEmployee(false)}
              className={`toggle-btn ${!isEmployee ? "active" : ""}`}
            >
              Student
            </button>
            <button
              onClick={() => setIsEmployee(true)}
              className={`toggle-btn ${isEmployee ? "active" : ""}`}
            >
              Employee
            </button>
          </div>
        </div>

        {/* Flip Card Container */}
        <div className="flip-container">
          <div className={`flip-inner ${isEmployee ? "flipped" : ""}`}>
            
            {/* FRONT: Student Login */}
            <div className="flip-front card-face">
              <h2>Student Login</h2>
              <p className="subtext">Enter your Roll No. and password</p>
              
              <form onSubmit={handleStudentLogin}>
                <input 
                  type="text" 
                  placeholder="Roll No. (e.g. 23MH1A4215)" 
                  className="glass-input" 
                />
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="glass-input" 
                />
                {/* whenever click on login this url : https://hackthon1-aee07kb13-siddu-kutchulas-projects.vercel.app/ */}
                <button type="submit" className="login-btn">Login</button>
              </form>
            </div>

            {/* BACK: Employee Login */}
            <div className="flip-back card-face">
              <h2>Employee Login</h2>
              <p className="subtext">Enter your Employee ID and password</p>
              
              <form onSubmit={handleEmployeeLogin}>
                <input 
                  type="text" 
                  placeholder="Employee ID (e.g. EMP1243)" 
                  className="glass-input" 
                />
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="glass-input" 
                />
                <button type="submit" className="login-btn">Login</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}