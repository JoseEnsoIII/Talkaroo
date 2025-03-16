import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import styled from 'styled-components';
import { FaGamepad } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';
import { MdChat } from 'react-icons/md';
import { RiTranslate, RiHeadphoneFill } from 'react-icons/ri';
import { FaRegClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PracticePageContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PracticeCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
   background: #ffffff;
  color: #3b82f6;
  padding: 1.3rem 3.5rem;
  border: none;
  border-radius: 0.8rem;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  flex-direction: column;
  gap: 0.3rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
  transition: transform 0.2s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    color: white;
    font-size: 1.5rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.primaryText};
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const StartButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.primaryHover};
  }
`;

// Sample data for practice cards
const practiceItems = [
  {
    icon: <HiAcademicCap />,
    title: 'Mock Exams',
    description: 'Simulate real language proficiency tests with timed practice exams',
    color: '#6366f1',
    link: '/practice/mock-exams'
  },
  {
    icon: <FaGamepad />,
    title: 'Vocabulary Games',
    description: 'Learn new words through interactive games and challenges',
    color: '#10b981',
    link: '/practice/games'
  },
  {
    icon: <MdChat />,
    title: 'Conversation Practice',
    description: 'Practice speaking with AI-powered conversation simulations',
    color: '#f59e0b',
    link: '/practice/conversation'
  },
  {
    icon: <RiTranslate />,
    title: 'Translation Drills',
    description: 'Improve your translation skills with real-world scenarios',
    color: '#3b82f6',
    link: '/practice/translation'
  },
  {
    icon: <RiHeadphoneFill />,
    title: 'Listening Exercises',
    description: 'Enhance your listening comprehension with audio challenges',
    color: '#8b5cf6',
    link: '/practice/listening'
  },
  {
    icon: <FaRegClock />,
    title: 'Quick Drills',
    description: '5-minute exercises for daily practice',
    color: '#ef4444',
    link: '/practice/quick-drills'
  }
];

const PracticePage = () => {
  return (
    <PracticePageContainer>
      <h1>Practice Tools</h1>
      <CardsGrid>
        {practiceItems.map((item, index) => (
          <PracticeCard key={index}>
            <IconWrapper color={item.color}>
              {item.icon}
            </IconWrapper>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <StartButton to={item.link}>
              Start Practice
            </StartButton>
          </PracticeCard>
        ))}
      </CardsGrid>
    </PracticePageContainer>
  );
};

export default PracticePage;
