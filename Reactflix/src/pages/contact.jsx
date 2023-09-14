import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import styled from 'styled-components';

const PageContainer = styled.div`
  background-color: #212016;
  height:700px;
`;

const ContentContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #fff;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  color:#fff;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #fff;
  color: #000;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

const ContactPage = () => {
  return (
    <PageContainer>
      <Navbar />
      <ContentContainer>
        <Title>Contact Us</Title>
        <ContactForm>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" required />

          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />

          <Label htmlFor="message">Message</Label>
          <TextArea id="message" name="message" rows="4" required />

          <Button type="submit">Submit</Button>
        </ContactForm>
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
};

export default ContactPage;
