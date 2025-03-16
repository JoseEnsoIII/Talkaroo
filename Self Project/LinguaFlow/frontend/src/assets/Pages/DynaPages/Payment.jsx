import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LanguageData from "/src/assets/JS/Language/LanguageData.js";
import Levels from "/src/assets/JS/Language/Levels_Data.js";

const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: white;
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  width: 400px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #333;
`;

const Amount = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #555;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #764ba2;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 15px;
  transition: 0.3s;

  &:hover {
    background: #5a3a8a;
  }
`;

const BackLink = styled.a`
  display: block;
  margin-top: 15px;
  color: #764ba2;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const PaymentPage = () => {
  const { id, level } = useParams();
  const navigate = useNavigate();
  const language = LanguageData.find((lang) => lang.id === id);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
    ewalletProvider: "",
    ewalletNumber: "",
  });

  if (!language) return <h2>Language not found</h2>;

  const handlePayment = (e) => {
    e.preventDefault();
    alert(`Payment successful using ${paymentMethod}! 🎉`);
    navigate("/");
  };

  return (
    <PaymentContainer>
      <Card>
        <Title>Payment for {language.name} - {level} Level</Title>
        <Amount>Amount: <strong>${Levels[level]?.price}</strong></Amount>

        <form onSubmit={handlePayment}>
          <label>Choose Payment Method:</label>
          <Select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="card">Credit/Debit Card</option>
            <option value="ewallet">Local E-Wallet</option>
          </Select>

          {paymentMethod === "card" ? (
            <>
              <Input type="text" placeholder="Card Number" value={formData.cardNumber} onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })} required />
              <Input type="text" placeholder="Expiry Date (MM/YY)" value={formData.cardExpiry} onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })} required />
              <Input type="text" placeholder="CVC" value={formData.cardCVC} onChange={(e) => setFormData({ ...formData, cardCVC: e.target.value })} required />
            </>
          ) : (
            <>
              <Input type="text" placeholder="E-Wallet Provider (e.g., GCash, PayMaya)" value={formData.ewalletProvider} onChange={(e) => setFormData({ ...formData, ewalletProvider: e.target.value })} required />
              <Input type="text" placeholder="E-Wallet Number" value={formData.ewalletNumber} onChange={(e) => setFormData({ ...formData, ewalletNumber: e.target.value })} required />
            </>
          )}

          <Button className="button" type="submit">Proceed to Payment</Button>
        </form>

        <BackLink href="/enroll/:id/:level">← Back to Home</BackLink>
      </Card>
    </PaymentContainer>
  );
};

export default PaymentPage;
