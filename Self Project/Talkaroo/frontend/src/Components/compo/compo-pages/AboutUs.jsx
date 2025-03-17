import styled from 'styled-components';
import { FaGlobe, FaComments, FaBookOpen, FaUsers, FaClock } from 'react-icons/fa6';
import { FaMobileAlt } from 'react-icons/fa';
import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';

const AboutPage = () => {
  return (
    <Container>
      <FeaturesSection>
        <SectionTitle>Why Choose Talkaroo?</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FaGlobe size={40} color="#4A90E2" />
            <FeatureTitle>100+ Languages</FeatureTitle>
            <FeatureText>From Spanish to Swahili, we've got you covered</FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FaComments size={40} color="#4A90E2" />
            <FeatureTitle>Native Speaker Conversations</FeatureTitle>
            <FeatureText>Practice with real conversations</FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FaMobileAlt size={40} color="#4A90E2" />
            <FeatureTitle>Learn Anywhere</FeatureTitle>
            <FeatureText>Mobile-friendly platform</FeatureText>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
      <HeroSection>
        <HeroContent>
          <Title>Unlock the World Through Language</Title>
          <SubTitle>Join 10 Million+ Learners Worldwide</SubTitle>
          <CTAButton>Start Learning Now</CTAButton>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>Why Choose Talkaroo?</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FaGlobe size={40} color="#4A90E2" />
            <FeatureTitle>100+ Languages</FeatureTitle>
            <FeatureText>From Spanish to Swahili, we've got you covered</FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FaComments size={40} color="#4A90E2" />
            <FeatureTitle>Native Speaker Conversations</FeatureTitle>
            <FeatureText>Practice with real conversations</FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FaMobileAlt size={40} color="#4A90E2" />
            <FeatureTitle>Learn Anywhere</FeatureTitle>
            <FeatureText>Mobile-friendly platform</FeatureText>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <StatsSection>
        <StatItem>
          <StatNumber>15M+</StatNumber>
          <StatLabel>Lessons Completed</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>500k+</StatNumber>
          <StatLabel>Active Learners</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>150+</StatNumber>
          <StatLabel>Countries</StatLabel>
        </StatItem>
      </StatsSection>

      <TeamSection>
        <SectionTitle>Meet Our Language Experts</SectionTitle>
        <TeamGrid>
          <TeamMember>
            <Avatar src="https://via.placeholder.com/150" />
            <MemberName>Maria Sanchez</MemberName>
            <MemberRole>Spanish Language Lead</MemberRole>
          </TeamMember>
          <TeamMember>
            <Avatar src="https://via.placeholder.com/150" />
            <MemberName>Jean Dupont</MemberName>
            <MemberRole>French Curriculum Director</MemberRole>
          </TeamMember>
        </TeamGrid>
      </TeamSection>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  font-family: 'Inter', sans-serif;
  color: #2d3436;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #4A90E2 0%, #6C5CE7 100%);
  padding: 8rem 2rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  color: rgba(255,255,255,0.9);
  margin-bottom: 2rem;
`;

const CTAButton = styled.button`
  background: #FF7675;
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin: 5rem 0 3rem;
  color: #2d3436;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  background: #f8f9fa;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  margin: 1rem 0;
`;

const FeatureText = styled.p`
  color: #636e72;
  line-height: 1.6;
`;

const StatsSection = styled.section`
   background: linear-gradient(135deg, #4A90E2 0%, #6C5CE7 100%);
  color: white;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  gap: 5rem;
  flex-wrap: wrap;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color:rgb(255, 255, 255);
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const TeamSection = styled.section`
  padding: 4rem 2rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const MemberName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.p`
  color: #636e72;
`;

const Footer = styled.footer`
  background: #2d3436;
  color: white;
  padding: 2rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;

  svg {
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #4A90E2;
    }
  }
`;

const Copyright = styled.small`
  opacity: 0.8;
  font-size: 0.9rem;
`;

export default AboutPage;
