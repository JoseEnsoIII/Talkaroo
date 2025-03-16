import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styled from "styled-components";
import { isValidPhoneNumber, parsePhoneNumberFromString } from "libphonenumber-js"; // Import phone number validation

const RegisterContainer = styled.div`
    max-width: 400px;
    margin: 50px auto;
    padding: 30px;
    background: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
`;

const Title = styled.h2`
    font-size: 24px;
    color: #333;
    margin-bottom: 5px;
`;

const Subtitle = styled.p`
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
`;

const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    transition: 0.3s;

    &:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 12px;
    background: ${(props) => (props.secondary ? "#6c757d" : "#007bff")};
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    margin-top: ${(props) => (props.secondary ? "10px" : "0")};

    &:hover {
        background: ${(props) => (props.secondary ? "#5a6268" : "#0056b3")};
    }
`;

const Message = styled.p`
    margin-top: 15px;
    font-size: 14px;
    color: ${(props) => (props.$error ? "red" : "green")};
`;

const Register = () => {
    const navigate = useNavigate(); // Initialize navigation
    const [formData, setFormData] = useState({
        username: "",
        first_name: "",
        last_name: "",
        suffix: "",
        email: "",
        password: "",
        phone: "", // Add phone number field
    });

    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [showLoginButton, setShowLoginButton] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setShowLoginButton(false);

        // Validate phone number (basic validation)
        const phoneNumber = parsePhoneNumberFromString(formData.phone);
        if (formData.phone && !phoneNumber?.isValid()) {
            setMessage("❌ Invalid phone number. Please include the country code.");
            setIsError(true);
            return;
        }

        try {
            const response = await fetch("http://localhost:5001/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("✅ Registration successful! Redirecting to login...");
                setIsError(false);
                setTimeout(() => navigate("/login"), 2000); // Redirect after 2s
            } else {
                setMessage(data.error || "❌ Registration failed. Please try again.");
                setIsError(true);

                // If the error message indicates an existing account, show login button
                if (data.error && data.error.toLowerCase().includes("already exists")) {
                    setShowLoginButton(true);
                }
            }
        } catch (error) {
            setMessage("❌ Registration failed. Please try again.");
            setIsError(true);
        }
    };

    return (
        <RegisterContainer>
            <Title>Sign Up</Title>
            <Subtitle>Create an account to start learning!</Subtitle>
            <RegisterForm onSubmit={handleSubmit}>
                <Input type="text" name="username" placeholder="Username" onChange={handleChange} required />
                <Input type="text" name="first_name" placeholder="First Name" onChange={handleChange} required />
                <Input type="text" name="last_name" placeholder="Last Name" onChange={handleChange} required />
                <Input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <Input
                    type="text"
                    name="phone"
                    placeholder="Phone Number (with country code)"
                    onChange={handleChange}
                    required
                />
                <Input type="password" name="password" placeholder="Password" onChange={handleChange} required />
               
                <Button className="button" type="submit">Register</Button>
            </RegisterForm>
            {message && <Message $error={isError}>{message}</Message>}
            {showLoginButton && (
                <Button secondary onClick={() => navigate("/login")}>
                    Go to Login
                </Button>
            )}
        </RegisterContainer>
    );
};

export default Register;
