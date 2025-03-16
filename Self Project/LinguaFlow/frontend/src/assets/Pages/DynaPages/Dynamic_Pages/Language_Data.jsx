import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import languages from "../../../JS/Language/LanguageData";

const LanguageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null); // Store selected level before login
  const [user, setUser] = useState({ email: "joseensothethird@gmail.com", password: "enso" });

  const language = languages.find((lang) => lang.id === id);

  if (!language) {
    return <h2 className="not-found">Language not found</h2>;
  }

  const levels = [
    {
      title: "Basic",
      description: "Build a strong foundation by learning fundamental words, phrases, and essential grammar structures.",
      features: [
        "Daily vocabulary lessons",
        "Introductory grammar and sentence construction",
        "Personalized progress tracking",
        "Weekly mock exams",
        "Certificate upon completion",
      ],
    },
    {
      title: "Intermediate",
      description: "Enhance fluency and comprehension with structured lessons covering everyday conversations and writing skills.",
      features: [
        "Expanded vocabulary",
        "Conversational practice",
        "Real-time progress tracking",
        "Weekly skill assessment",
        "Certificate upon completion",
        "🌐 Floating AI Language Translator",
        "🤖 AI Chat for real-world practice",
      ],
    },
    {
      title: "Expert",
      description: "Achieve professional-level proficiency with advanced grammar, writing, and real-world applications.",
      features: [
        "Advanced grammar",
        "In-depth writing",
        "Performance metrics",
        "Mock exams",
        "Industry-recognized certification",
        "🌐 Floating AI Language Translator",
        "🤖 AI Chat for real-world practice",
      ],
    },
  ];

  const handleEnroll = (level) => {
    if (!isAuthenticated) {
      setSelectedLevel(level); // Store level before login
      setShowAuthModal(true);
    } else {
      navigate(`/enroll/${language.id}/${level}`);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy authentication (replace with actual authentication logic)
    if (user.email && user.password) {
      setIsAuthenticated(true);
      setShowAuthModal(false);
      navigate(`/enroll/${language.id}/${selectedLevel}`); // Redirect to stored level after login
    }
  };

  return (
    <div className="detail-container">
      <h1 className="language-title">
        {language.name} ({language.native})
      </h1>
      <img src={language.flag} alt={language.name} className="flag-image" />
      <p className="language-description">{language.description}</p>

      <div className="subscription-cards">
        {levels.map((level, index) => (
          <div key={index} className="card">
            <h2 className="card-title">{level.title} Level</h2>
            <p className="card-description">{level.description}</p>
            <ul className="feature-list">
              {level.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="subscribe-btn" onClick={() => handleEnroll(level.title)}>
              Enroll in {level.title}
            </button>
          </div>
        ))}
      </div>

      {/* Authentication Modal */}
      {showAuthModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Login to Continue</h2>
            <form onSubmit={handleLogin}>
              <input type="email" placeholder="Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />
              <input type="password" placeholder="Password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} required />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}

      <a href="/" className="back-link">← Back to Home</a>
    </div>
  );
};

export default LanguageDetail;
