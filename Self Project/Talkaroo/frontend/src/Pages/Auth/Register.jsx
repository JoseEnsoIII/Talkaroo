// Frontend - RegistrationForm Component
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
`;

const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);
    try {
      await axios.post('http://localhost:5001/api/auth/register', formData);
      setMessage('Registration successful! Redirecting...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      setErrors({ api: error.response?.data?.error || 'An error occurred' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RegistrationContainer>
      <FormContainer>
        <h2>Start Your Language Journey</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
          {errors.username && <p>{errors.username}</p>}

          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          {errors.email && <p>{errors.email}</p>}

          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
          {errors.password && <p>{errors.password}</p>}

          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

          <button type="submit" disabled={isLoading}>{isLoading ? 'Registering...' : 'Start Learning Now'}</button>
        </form>
      </FormContainer>
      {message && <Modal>{message}</Modal>}
    </RegistrationContainer>
  );
};

export default RegistrationForm;


