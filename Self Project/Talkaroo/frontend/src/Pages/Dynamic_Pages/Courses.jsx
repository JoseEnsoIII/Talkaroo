import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const CourseCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Flag = styled.img`
  width: 40px;
  height: 25px;
  border-radius: 3px;
  margin-right: 1rem;
`;

const CourseHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const TitleWrapper = styled.div`
  flex: 1;
`;

const CourseTitle = styled.h3`
  margin: 0;
  color: #2d3748;
  font-size: 1.25rem;
`;

const NativeTitle = styled.p`
  margin: 0;
  color: #718096;
  font-size: 0.9rem;
`;

const Description = styled.p`
  color: #4a5568;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const Price = styled.div`
  font-size: 1.5rem;
  color: #2d3748;
  font-weight: bold;
  margin-bottom: 1rem;
  
  &::before {
    content: '$';
    font-size: 0.8em;
    margin-right: 2px;
  }
`;

const LevelBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  background: ${props => {
    if (props.level === 'expert') return '#f56565';
    if (props.level === 'intermediate') return '#ecc94b';
    return '#48bb78';
  }};
  color: white;
`;

const LanguageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:2/api/courses'); // Use full URL
        const text = await response.text(); // Get raw response

        console.log("Raw Response:", text); // Debug log

        const data = JSON.parse(text).map(course => ({
          ...course,
          course_price: parseFloat(course.course_price), // Convert to number
        }));
        setCourses(data);
      } catch (err) {
        console.error("Fetch error:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <Container>Loading courses...</Container>;
  if (error) return <Container>Error: {error}</Container>;

  return (
    <Container>
      <h1>Language Courses</h1>
      <CourseGrid>
        {courses.map(course => (
          <Link key={course.course_id} to={`/enroll/${course.course_id}`}>
            <CourseCard>
              <CourseHeader>
                <Flag src={course.flag_url} alt={`${course.course_name} flag`} />
                <TitleWrapper>
                  <CourseTitle>{course.course_name}</CourseTitle>
                  <NativeTitle>{course.native_name}</NativeTitle>
                </TitleWrapper>
              </CourseHeader>
              
              <Description>{course.description}</Description>
              
              <Price>{isNaN(course.course_price) ? 'N/A' : course.course_price.toFixed(2)}</Price>
              
              <div>
                <LevelBadge level={course.course_level}>
                  {course.course_level}
                </LevelBadge>
              </div>
            </CourseCard>
          </Link>
        ))}
      </CourseGrid>
    </Container>
  );
};

export default LanguageCourses;
