import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { FiCheckCircle, FiArrowLeft } from "react-icons/fi";
import LanguageData from "/src/assets/JS/Language/LanguageData.js";
import Levels from "/src/assets/JS/Language/Levels_Data.js";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f8fafc;
  padding: 2rem;
`;

const EnrollmentCard = styled.div`
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  position: relative;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    color: #6366f1;
    font-weight: 700;
  }
`;

const Description = styled.p`
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const BenefitsList = styled.ul`
  list-style: none;
  margin: 2rem 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #475569;
  font-size: 1rem;

  &:before {
    content: "✓";
    color: #22c55e;
    font-weight: bold;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  ${props => props.primary && css`
    background: #6366f1;
    color: white;

    &:hover {
      background: #4f46e5;
    }
  `}

  ${props => props.secondary && css`
    background: #f1f5f9;
    color: #475569;

    &:hover {
      background: #e2e8f0;
    }
  `}
`;

const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #64748b;
  text-decoration: none;
  margin-top: 2rem;
  transition: color 0.2s ease;

  &:hover {
    color: #6366f1;
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  max-width: 400px;
  width: 90%;
`;

const PopupTitle = styled.h2`
  color: #1e293b;
  margin-bottom: 1rem;
`;

const PopupButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
`;

const EnrollmentPage = () => {
  const { id, level } = useParams();
  const navigate = useNavigate();
  const language = LanguageData.find((lang) => lang.id === id);
  const [showPopup, setShowPopup] = useState(false);

  if (!language) return <h2 className="not-found">Language not found</h2>;

  const handleConfirmClick = () => setShowPopup(true);
  const handleCancel = () => setShowPopup(false);

  const handleProceed = () => {
    setShowPopup(false);
    if (Levels[level]?.price === 0) {
      alert(`Successfully enrolled in ${language.name} - ${level} Level!`);
      navigate("/");
    } else {
      navigate(`/payment/${id}/${level}`);
    }
  };

  return (
    <Container>
      <EnrollmentCard>
        <BackLink href="/">
          <FiArrowLeft /> Back to Home
        </BackLink>

        <Title>
          Enroll in <span>{language.name}</span>
         
        </Title>
        <Title> {level} Level</Title>

        <Description>{Levels[level]?.description}</Description>

        <BenefitsList>
          {Levels[level]?.benefits.map((benefit, index) => (
            <BenefitItem key={index}>
              <FiCheckCircle /> {benefit}
            </BenefitItem>
          ))}
        </BenefitsList>

        <Button  className="button"
          primary 
          onClick={handleConfirmClick}
        >
          Confirm Enrollment 
           {Levels[level]?.price === 0 ? 
            "(Free)" : `($${Levels[level]?.price})`
          }
        </Button>
      </EnrollmentCard>

      {showPopup && (
        <PopupOverlay>
          <PopupContent>
            <PopupTitle>Confirm Enrollment</PopupTitle>
            <p>
              Are you sure you want to enroll in the{" "}
              <strong>{language.name} - {level}</strong> level?
            </p>
            
            <PopupButtons>
              <Button  className="button" secondary onClick={handleCancel}>
                Cancel
              </Button>
              <Button primary onClick={handleProceed}>
                Confirm
              </Button>
            </PopupButtons>
          </PopupContent>
        </PopupOverlay>
      )}
    </Container>
  );
};

export default EnrollmentPage;