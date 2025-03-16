import React from 'react';
import styled from 'styled-components';

// Styled Components

const colors = {
  primary: '#4361ee',
  secondary: '#3f37c9',
  accent: '#4895ef',
  dark: '#2b2d42',
  light: '#f8f9fa',
  gradient: 'linear-gradient(135deg, #4361ee 0%, #3f37c9 100%)',
};

// Styled Components
const PageContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 20px;
  overflow-x: hidden;
`;

const PageTitle = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 40px;
  background: ${colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  letter-spacing: -1.5px;
  position: relative;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const ContentSection = styled.div`
  margin-bottom: 60px;
  padding: 40px;
  background: ${colors.light};
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 150px;
    height: 150px;
    background: ${colors.accent};
    opacity: 0.1;
    border-radius: 50%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: ${colors.dark};
  font-weight: 700;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: ${colors.primary};
    border-radius: 2px;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 1.5rem;
  font-weight: 400;
`;

const MissionSection = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MissionText = styled.div`
  flex: 1;
  position: relative;
  padding-right: 40px;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 60px;
    height: 60px;
    background: ${colors.accent};
    opacity: 0.1;
    border-radius: 12px;
  }
`;

const MissionImage = styled.div`
  flex: 1;
  border-radius: 24px;
  overflow: hidden;
  transform: rotate(3deg);
  box-shadow: 16px 16px 0 ${colors.accent}20;

  img {
    width: 100%;
    height: auto;
    transform: rotate(-3deg);
    border-radius: 24px;
  }
`;

const FeatureCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  position: relative;
`;

const FeatureCard = styled.div`
  padding: 40px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.1);
    
    &::before {
      transform: scale(2);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    width: 40px;
    height: 40px;
    background: ${colors.accent}20;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  h3 {
    font-size: 1.5rem;
    color: ${colors.dark};
    margin: 20px 0 15px;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    color: #718096;
    line-height: 1.6;
  }
`;

const CallToAction = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const SignUpButton = styled.a`
  padding: 18px 45px;
  background: ${colors.gradient};
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 8px 24px rgba(67, 97, 238, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(67, 97, 238, 0.4);
  }

  &::after {
    content: '→';
    font-weight: 400;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(4px);
  }
`;
const About = () => {
  return (
    <PageContainer>
    <PageTitle>About Talkaroo</PageTitle>
  
    {/* Introduction Section */}
    <ContentSection>
      <SectionTitle>Who We Are</SectionTitle>
      <Paragraph>
        Talkaroo is a cutting-edge language learning platform designed to help learners of all levels 
        master a new language with ease. Whether you're learning for business, travel, or personal growth, 
        our platform provides the tools and guidance needed to succeed.
      </Paragraph>
    </ContentSection>
  
    {/* Mission Statement */}
    <ContentSection>
      <SectionTitle>Our Mission</SectionTitle>
      <Paragraph>
        Our mission is to bridge the gap between learners and fluency by offering an engaging, 
        interactive, and structured approach to language learning. We are committed to making 
        language acquisition accessible and effective for everyone.
      </Paragraph>
    </ContentSection>
  
    {/* Motivation Section */}
    <ContentSection>
      <SectionTitle>Why We Built Talkaroo</SectionTitle>
      <Paragraph>
        The reason I decided to build Talkaroo is to empower individuals by helping them learn basic 
        languages that can open doors to new career opportunities. Whether for personal development or 
        professional growth, learning a new language can provide a significant boost to one's job prospects 
        and career trajectory. I believe that by making language learning accessible to everyone, 
        we can help people build the skills they need to succeed in their careers.
      </Paragraph>
    </ContentSection>
  
    {/* Features Section with Cards */}
    <ContentSection>
      <SectionTitle>Why Choose Talkaroo?</SectionTitle>
      <FeatureCards>
        <FeatureCard>
          <h3>📚 Interactive Lessons</h3>
          <p>Learn through dynamic exercises and real-world scenarios.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>🎤 Speech Recognition</h3>
          <p>Improve pronunciation with AI-powered feedback.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>📈 Progress Tracking</h3>
          <p>Monitor your learning journey and set personalized goals.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>👨‍🏫 Expert-Curated Content</h3>
          <p>Lessons created by professional linguists and educators.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>🌍 Community Support</h3>
          <p>Engage with fellow learners and native speakers.</p>
        </FeatureCard>
      </FeatureCards>
    </ContentSection>
  
    {/* Call to Action */}
    <ContentSection>
      <SectionTitle>Join Us Today</SectionTitle>
      <Paragraph>
        Start your language learning journey with Talkaroo and unlock new opportunities. 
        Sign up now and take the first step toward fluency!
      </Paragraph>
      <CallToAction>
        <SignUpButton href="/signup">Get Started</SignUpButton>
      </CallToAction>
    </ContentSection>
  </PageContainer>
  
  );
};

export default About;
