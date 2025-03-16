import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  font-family: 'Inter', system-ui, sans-serif;
`;

const Header = styled.h2`
  font-size: 2rem;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    // ... same user fetch logic as before ...
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container>
      <Header>Your Learning Profile</Header>
      
      {/* User Info Section */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="p-6 bg-indigo-50 rounded-xl">
          <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
          <InfoItem label="Name" value={`${user.first_name} ${user.last_name}`} />
          <InfoItem label="Email" value={user.email} />
          <InfoItem label="Enrolled Course" value={user.course} />
        </div>

        <div className="p-6 bg-green-50 rounded-xl">
          <h3 className="text-lg font-semibold mb-4">Course Progress</h3>
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Overall Completion</span>
            <span className="text-2xl font-bold text-green-600">50%</span>
          </div>
          <ProgressBar value={50} />
        </div>
      </div>
    </Container>
  );
};

// Helper components
const InfoItem = ({ label, value }) => (
  <div className="flex justify-between items-center py-2 border-b border-gray-200">
    <span className="text-gray-600">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

const ProgressBar = ({ value }) => (
  <div className="w-full bg-gray-200 rounded-full h-3">
    <div 
      className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full h-3 transition-all duration-500" 
      style={{ width: `${value}%` }}
    />
  </div>
);

export default ProfilePage;
