import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaGlobe, FaUtensils, FaComments, FaHotel, FaBus, FaShoppingBag, FaUserFriends, FaBook, FaHeartbeat, FaMoneyBillWave, FaCalendarAlt, FaPalette } from 'react-icons/fa';

const CoursePage = () => {
  const { courseId } = useParams();
  const [isEnrolled, setIsEnrolled] = useState(false);

  // Enhanced course data with more categories
  const course = {
    title: 'Spanish Language Mastery',
    description: 'Comprehensive Spanish course covering all essential vocabulary for real-world communication',
    vocabCategories: [
      { id: 1, name: 'Places & Directions', icon: <FaGlobe /> },
      { id: 2, name: 'Food & Dining', icon: <FaUtensils /> },
      { id: 3, name: 'Daily Conversations', icon: <FaComments /> },
      { id: 4, name: 'Accommodation', icon: <FaHotel /> },
      { id: 5, name: 'Transportation', icon: <FaBus /> },
      { id: 6, name: 'Shopping', icon: <FaShoppingBag /> },
      { id: 7, name: 'Family & Relationships', icon: <FaUserFriends /> },
      { id: 8, name: 'Education', icon: <FaBook /> },
      { id: 9, name: 'Health & Emergencies', icon: <FaHeartbeat /> },
      { id: 10, name: 'Money & Banking', icon: <FaMoneyBillWave /> },
      { id: 11, name: 'Time & Dates', icon: <FaCalendarAlt /> },
      { id: 12, name: 'Colors & Descriptions', icon: <FaPalette /> },
    ],
  };

  const handleEnroll = () => setIsEnrolled(true);

  const handleCategoryButtonClick = (categoryName) => {
    // In real app, this would navigate to category page
    alert(`Starting learning: ${categoryName}`);
  };

  return (
    <Container>
      {!isEnrolled ? (
        <EnrollSection>
          <HeroGradient>
            <h1>Start Your Language Journey</h1>
            <p>{course.description}</p>
            <CourseHighlights>
              <HighlightItem>
                <div>📚</div>
                <h3>{course.vocabCategories.length} Categories</h3>
                <p>Comprehensive vocabulary coverage</p>
              </HighlightItem>
              <HighlightItem>
                <div>🗣️</div>
                <h3>Speaking Exercises</h3>
                <p>Practice with voice recognition</p>
              </HighlightItem>
              <HighlightItem>
                <div>🎮</div>
                <h3>Interactive Learning</h3>
                <p>Games & quizzes included</p>
              </HighlightItem>
            </CourseHighlights>
            <EnrollButton onClick={handleEnroll}>
              Start Learning Free
              <span>No credit card needed</span>
            </EnrollButton>
          </HeroGradient>
        </EnrollSection>
      ) : (
        <CourseContent>
          <CourseHeader>
            <h1>{course.title}</h1>
            <ProgressBar>
              <ProgressFill width="25%" />
            </ProgressBar>
            <ProgressText>25% Completed</ProgressText>
          </CourseHeader>
          
          <VocabGrid>
            {course.vocabCategories.map((category) => (
              <VocabCategoryCard key={category.id}>
                <CategoryIcon>{category.icon}</CategoryIcon>
                <CategoryTitle>{category.name}</CategoryTitle>
                <CardButton onClick={() => handleCategoryButtonClick(category.name)}>
                  Start Learning →
                </CardButton>
              </VocabCategoryCard>
            ))}
          </VocabGrid>
        </CourseContent>
      )}
    </Container>
  );
};

// Modern styled components
const Container = styled.div`
  margin: 0 auto;
`;

const EnrollSection = styled.div`
  background: white;
`;

const HeroGradient = styled.div`
  color: white;
  padding: 4rem 2rem;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
    opacity: 0.95;
    max-width: 600px;
    margin: 0 auto 3rem;
    line-height: 1.6;
  }
`;

const CourseHighlights = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  
`;

const HighlightItem = styled.div`
  background: rgba(255,255,255,0.1);
  color: #6366f1;
  padding: 1.5rem;
  border: none;
  border-radius: 0.8rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);

  &:hover {
    transform: translateY(-5px);
  }

  div {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #6366f1;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.9;
    margin: 0;
    color: #6366f1;
  }
`;

const EnrollButton = styled.button`
  background: #ffffff;
  color: #6366f1;
  padding: 1.2rem 3rem;
  border: none;
  border-radius: 0.8rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  }

  span {
    font-size: 0.8rem;
    font-weight: 400;
    opacity: 0.8;
  }
`;

const CourseContent = styled.div`
  padding: 2rem 0;
`;

const CourseHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.2rem;
    color: #1f2937;
    margin-bottom: 1.5rem;
  }
`;

const ProgressBar = styled.div`
  width: 300px;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  margin: 0 auto;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  width: ${props => props.width};
  height: 100%;
  background: #6366f1;
  border-radius: 4px;
  transition: width 0.3s ease;
`;

const ProgressText = styled.div`
  color: #4b5563;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const VocabGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
`;

const VocabCategoryCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.1);
  }
`;

const CategoryIcon = styled.div`
  font-size: 2.5rem;
  color: #6366f1;
  margin-bottom: 1rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  color: #1f2937;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const CardButton = styled.button`
  background: #6366f1;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 0.6rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #4f46e5;
    transform: translateY(-1px);
  }
`;

export default CoursePage;