import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

const EnrollmentContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CourseInfo = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  border-bottom: 2px solid #f0f2f5;
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: #2d3748;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.5);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background-color: #48bb78;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #38a169;
  }
`;

const ErrorMessage = styled.div`
  color: #e53e3e;
  padding: 1rem;
  background-color: #fff5f5;
  border-radius: 6px;
  margin-top: 1rem;
`;

const EnrollmentForm = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    firstName: '',
    lastName: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/courses/${courseId}`);
        const data = await response.json();
        setCourse(data);
      } catch (err) {
        setError('Failed to load course details');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('http://localhost:5001/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          courseId: parseInt(courseId)
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Enrollment failed');
      }

      navigate('/enrollment-success');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (loading) return <EnrollmentContainer>Loading course details...</EnrollmentContainer>;
  if (error) return <EnrollmentContainer>Error: {error}</EnrollmentContainer>;

  return (
    <EnrollmentContainer>
      <CourseInfo>
        <h2>Enrolling in: {course.course_name}</h2>
        <p>Course Level: {course.course_level}</p>
        <p>Price: ${course.course_price.toFixed(2)}</p>
      </CourseInfo>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Email *</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Username *</Label>
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>First Name</Label>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Last Name</Label>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormGroup>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <SubmitButton type="submit">
          Complete Enrollment
        </SubmitButton>
      </Form>
    </EnrollmentContainer>
  );
};

export default EnrollmentForm;