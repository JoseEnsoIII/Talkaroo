import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #48bb78;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #38a169;
  }
`;

const EnrollmentForm = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [formData, setFormData] = useState({ email: '', username: '', firstName: '', lastName: '', level: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5001/api/courses/${courseId}`)
      .then(res => res.json())
      .then(data => setCourse({ ...data, course_price: parseFloat(data.course_price) }))
      .catch(() => setError('Failed to load course details'));
  }, [courseId]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('http://localhost:5001/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          course_id: parseInt(courseId),
        })
      });

      if (!response.ok) throw new Error('Enrollment failed');
      
      if (formData.level === 'basic') {
        navigate('/');
      } else {
        navigate('payment/:courseId');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container>
      {course && (
        <div>
          <h3>Enroll in {course.course_name}</h3>
          <p>Level: {course.course_level}</p>
          <p>Price: ${course.course_price.toFixed(2)}</p>
          <Select name="level" value={formData.level} onChange={handleChange} required>
            <option value="">Select Level</option>
            <option value="basic">Basic</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </Select>
        </div>
      )}
      <Form onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <Input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        <Input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
        <Input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit">Enroll</Button>
      </Form>
    </Container>
  );
};

export default EnrollmentForm;
