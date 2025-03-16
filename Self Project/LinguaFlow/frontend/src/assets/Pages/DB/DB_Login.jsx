import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styled from "styled-components"; // Import styled-components

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
  
    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        setMessage("Login successful!");
        localStorage.setItem("token", data.token); // Store JWT token
        localStorage.setItem("user", JSON.stringify(data.user)); // Store user info
  
        // Check if user exists and has the 'verified' property
        if (data.user && typeof data.user.verified !== 'undefined') {
          if (data.user.verified) {
            // ✅ Redirect to "/users" after successful login and verification
            navigate("/users");
          } else {
            setMessage("Account not verified. Please check your email.");
          }
        } else {
          setMessage("User data is incomplete or missing. Please contact support.");
        }
      } else {
        setMessage(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Server error, try again.");
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <Container>
      <Card>
        <Title>Login</Title>
        {message && <ErrorMessage>{message}</ErrorMessage>}
        <Form onSubmit={handleLogin}>
          <InputGroup>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>

          <SubmitButton className="button" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </SubmitButton>

        
        </Form>
      </Card>
    </Container>
  );
};

// Styled Components

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background: linear-gradient(to bottom right, #4e7dff, #1c3b6d);
  padding: 16px;
`;

const Card = styled.div`
  background-color: white;
  padding: 32px;
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 24px;
`;

const ErrorMessage = styled.p`
  color: #ff4d4f;
  text-align: center;
  margin-bottom: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #444;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 12px 16px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #1d4ed8;
    box-shadow: 0 0 0 2px rgba(29, 78, 216, 0.3);
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const SubmitButton = styled.button`
  padding: 14px;
  font-size: 1.1rem;
  color: white;
  background-color: #1d4ed8;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2563eb;
  }

  &:disabled {
    background-color: #a1c4fd;
    cursor: not-allowed;
  }
`;

const RegisterLink = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: #555;

  a {
    color: #1d4ed8;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default LoginForm;
