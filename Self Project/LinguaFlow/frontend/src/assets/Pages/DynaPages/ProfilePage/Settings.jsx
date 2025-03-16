import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for the settings page
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const SettingGroup = styled.div`
  margin: 10px 0;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Select = styled.select`
  padding: 8px;
  margin-top: 5px;
  width: 200px;
`;

const Input = styled.input`
  padding: 8px;
  margin-top: 5px;
  width: 200px;
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const ThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
`;

const SettingsPage = () => {
  // State to manage language and theme
  const [language, setLanguage] = useState('English');
  const [theme, setTheme] = useState('light');
  const [password, setPassword] = useState('');
  const [profileDescription, setProfileDescription] = useState('Your profile description here...');

  // Handling theme change
  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    document.body.className = e.target.value === 'light' ? '' : 'dark-mode';  // Toggle dark mode
  };

  // Handling language change
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // Add logic here to change language across the app
  };

  // Handle form submissions for password and profile description
  const handleSubmit = () => {
    // Logic to update password and profile description (e.g., API calls)
    alert('Settings updated!');
  };

  return (
    <DashboardContainer>
      <Section>
        <SectionTitle>Account Settings</SectionTitle>
        <SettingGroup>
          <Label>Change Password:</Label>
          <Input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </SettingGroup>
        <SettingGroup>
          <Label>Update Profile Description:</Label>
          <Input
            type="text"
            placeholder="Enter a short description"
            value={profileDescription}
            onChange={(e) => setProfileDescription(e.target.value)}
          />
        </SettingGroup>
      </Section>

      <Section>
        <SectionTitle>Display Settings</SectionTitle>
        <SettingGroup>
          <Label>Theme:</Label>
          <Select value={theme} onChange={handleThemeChange}>
            <option value="light">Light Mode</option>
            <option value="dark">Dark Mode</option>
          </Select>
        </SettingGroup>
      </Section>

      <Section>
        <SectionTitle>Language Settings</SectionTitle>
        <SettingGroup>
          <Label>Language:</Label>
          <Select value={language} onChange={handleLanguageChange}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Chinese">Chinese</option>
            {/* Add more languages as needed */}
          </Select>
        </SettingGroup>
      </Section>

      <Button onClick={handleSubmit}>Save Changes</Button>
    </DashboardContainer>
  );
};

export default SettingsPage;
