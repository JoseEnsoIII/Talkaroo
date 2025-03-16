import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaClock, FaPuzzlePiece, FaBook, FaQuestionCircle, FaCode, FaBalanceScale, FaChartBar, FaMagic, FaCommentDots, FaTerminal, FaRegLightbulb, FaLanguage } from 'react-icons/fa';

const GrammarPage = () => {
  const { courseId } = useParams();
  const [isEnrolled, setIsEnrolled] = useState(false);

  const course = {
    title: 'Spanish Grammar Mastery',
    description: 'Comprehensive guide to Spanish grammar rules and sentence structures',
    topics: [
      { id: 1, name: 'Verb Conjugations', icon: <FaClock /> },
      { id: 2, name: 'Tenses Timeline', icon: <FaChartBar /> },
      { id: 3, name: 'Noun Gender Rules', icon: <FaLanguage /> },
      { id: 4, name: 'Sentence Structure', icon: <FaPuzzlePiece /> },
      { id: 5, name: 'Adjective Agreement', icon: <FaBalanceScale /> },
      { id: 6, name: 'Pronouns Usage', icon: <FaCommentDots /> },
      { id: 7, name: 'Prepositions', icon: <FaCode /> },
      { id: 8, name: 'Subjunctive Mood', icon: <FaRegLightbulb /> },
      { id: 9, name: 'Conditionals', icon: <FaMagic /> },
      { id: 10, name: 'Imperatives', icon: <FaTerminal /> },
      { id: 11, name: 'Negation', icon: <FaQuestionCircle /> },
      { id: 12, name: 'Compound Sentences', icon: <FaBook /> },
    ],
  };

  const handleEnroll = () => setIsEnrolled(true);

  const handleTopicClick = (topicName) => {
    alert(`Starting grammar module: ${topicName}`);
  };

  return (
    <Container>
      {!isEnrolled ? (
        <EnrollSection>
          <HeroGrammar>
            <h1>Unlock Your Language Grammar</h1>
            <p>{course.description}</p>
            <GrammarFeatures>
              <FeatureCard>
                <FaPuzzlePiece className="feature-icon" />
                <h3>Structured Learning Path</h3>
                <p>Step-by-step progression through grammar concepts</p>
              </FeatureCard>
              <FeatureCard>
                <FaMagic className="feature-icon" />
                <h3>Interactive Exercises</h3>
                <p>Practice with instant feedback and explanations</p>
              </FeatureCard>
              <FeatureCard>
                <FaBook className="feature-icon" />
                <h3>Cheat Sheets</h3>
                <p>Downloadable grammar references</p>
              </FeatureCard>
            </GrammarFeatures>
            <EnrollButton className="button" onClick={handleEnroll}>
              Enroll Now
              <span>Full access to all grammar modules</span>
            </EnrollButton>
          </HeroGrammar>
        </EnrollSection>
      ) : (
        <CourseContent>
          <CourseHeader>
            <h1>{course.title}</h1>
            <ProgressWrapper>
              <ProgressBar>
                <ProgressFill width="15%" />
              </ProgressBar>
              <ProgressStats>
                <span>2/15 Lessons Completed</span>
                <span>15% Mastered</span>
              </ProgressStats>
            </ProgressWrapper>
          </CourseHeader>

          <ModuleGrid>
            {course.topics.map((topic) => (
              <GrammarModule key={topic.id}>
                <ModuleHeader>
                  <TopicIcon>{topic.icon}</TopicIcon>
                  <h3>{topic.name}</h3>
                </ModuleHeader>
                <ModuleContent>
                  <DifficultyBadge>Beginner</DifficultyBadge>
                  <Stats>
                    <span>📖 5 Lessons</span>
                    <span>✍️ 3 Exercises</span>
                  </Stats>
                  <StartButton className="button" onClick={() => handleTopicClick(topic.name)}>
                    Start Module <FaArrowRight />
                  </StartButton>
                </ModuleContent>
              </GrammarModule>
            ))}
          </ModuleGrid>
        </CourseContent>
      )}
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const EnrollSection = styled.div`
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
`;

const HeroGrammar = styled.div`
  background: white;
  color: white;
  padding: 4rem 2rem;
  text-align: center;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 3rem;
    line-height: 1.6;
    opacity: 0.95;
  }
`;

const GrammarFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`;

const FeatureCard = styled.div`
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

  &:hover {
    transform: translateY(-5px);
  }

  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #bfdbfe;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1rem;
    opacity: 0.9;
    margin: 0;
  }
`;

const EnrollButton = styled.button`
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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }

  span {
    font-size: 0.9rem;
    font-weight: 400;
    opacity: 0.9;
  }
`;

const CourseContent = styled.div`
  padding: 2rem 0;
`;

const CourseHeader = styled.div`
  margin-bottom: 3rem;

  h1 {
    font-size: 2.4rem;
    color: #1e3a8a;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const ProgressWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ProgressBar = styled.div`
  height: 8px;
  background: #e0f2fe;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  width: ${props => props.width};
  height: 100%;
  background: #3b82f6;
  border-radius: 4px;
  transition: width 0.3s ease;
`;

const ProgressStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  color: #3b82f6;
  font-weight: 500;
`;

const ModuleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const GrammarModule = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.1);
  }
`;

const ModuleHeader = styled.div`
  background: #eff6ff;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  h3 {
    font-size: 1.2rem;
    color: #1e3a8a;
    margin: 0;
  }
`;

const TopicIcon = styled.div`
  font-size: 1.8rem;
  color: #3b82f6;
`;

const ModuleContent = styled.div`
  padding: 1.5rem;
`;

const DifficultyBadge = styled.span`
  background: #dbeafe;
  color: #1e3a8a;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Stats = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  color: #64748b;
  font-size: 0.9rem;
`;

const StartButton = styled.button`
  background: #3b82f6;
  color: white;
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #2563eb;
  }
`;

export default GrammarPage;