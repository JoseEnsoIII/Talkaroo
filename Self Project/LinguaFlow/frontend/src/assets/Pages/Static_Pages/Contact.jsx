import { useState } from "react";
import styled, { css } from "styled-components";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required");
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setSuccess("Message sent successfully! We'll respond shortly.");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <Container>
      <FormContainer>
        <Header>
          <Title>Get in Touch</Title>
          <Subtitle>Have a question or want to collaborate? Drop us a message.</Subtitle>
        </Header>

        {(error || success) && (
          <Alert type={error ? "error" : "success"}>
            <AlertIcon>
              {error ? (
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </AlertIcon>
            {error || success}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>Full Name</Label>
            <InputWrapper>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
              <InputIcon>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </InputIcon>
            </InputWrapper>
          </InputGroup>

          <InputGroup>
            <Label>Email</Label>
            <InputWrapper>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
              <InputIcon>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </InputIcon>
            </InputWrapper>
          </InputGroup>

          <InputGroup>
            <Label>Message</Label>
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="5"
            />
          </InputGroup>

          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4ff 0%, #f9f0ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const FormContainer = styled.div`
  background: white;
  border-radius: 1.5rem;
  padding: 3rem;
  width: 100%;
  max-width: 32rem;
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 25px 50px rgba(0,0,0,0.12);
  }
`;

const Header = styled.div`
  margin-bottom: 2.5rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 0.875rem;
`;

const Alert = styled.div`
  padding: 1rem;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  
  ${({ type }) => type === "error" ? css`
    background: #fee2e2;
    color: #991b1b;
  ` : css`
    background: #dcfce7;
    color: #166534;
  `}
`;

const AlertIcon = styled.div`
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #333;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  padding-right: 2.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  min-height: 8rem;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`;

const InputIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  pointer-events: none;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

export default ContactUs;