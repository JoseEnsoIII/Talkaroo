import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import languages from '../../JS/Language/LanguageData';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredLanguages = languages.filter(lang =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.native.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page-container">
      <h1>Enhance Your Career with Language Skills</h1>
      <div className="content-section">
        <p>Choose from these top languages to boost your professional prospects:</p>
        <input
          type="text"
          placeholder="Search for a language..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        <div className="language-grid">
          {filteredLanguages.length > 0 ? (
            filteredLanguages.map((lang, index) => (
              <div
                key={index}
                className="language-card"
                style={{
                  backgroundImage: `url(${lang.flag})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                role="button"
                tabIndex={0}
                onClick={() => navigate(`/language/${lang.id}`)} // Navigate to detail page
              >
                <div className="language-overlay"></div>
                <div className="language-info">
                  <h3 className="language-name">{lang.name}</h3>
                  <p className="language-native">{lang.native}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No languages found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
