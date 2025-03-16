import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import LanguageData from "/src/assets/JS/Language/LanguageData.js";
import Levels from "/src/assets/JS/Language/Levels_Data.js";
import LearningMaterials from "/src/assets/JS/Courses/LMS.js";

const HomeNew = () => {
  const enrolledLanguage = LanguageData[0]; // Default language
  const enrolledLevel = Object.keys(Levels)[0]; // Default level

  return (
    <div className="page-container">
      <h1 className="title">Welcome to Your Language Learning Journey! 🚀</h1>
      <p className="subtitle">
        We're excited to have you on board. Start exploring your lessons now!
      </p>

      <h2 className="level-info">
        {enrolledLanguage?.name} - {enrolledLevel} Level
      </h2>

      <div className="materials-grid">
        {LearningMaterials.map((material) => (
          <Link key={material.id} to="/not-found" className="material-link">
            <div className="material-card">
              <div className="card-content">
                <h3 className="card-title">{material.title}</h3>
                <p className="card-description">{material.description}</p>
                <button  className="explore-btn">
                  Explore {material.title}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeNew;
