// src/components/Sidebar.js
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #001529;
  color: white;
  padding: 1rem;
  min-height: 100vh;
`;

const MenuItem = styled.div`
  padding: 0.8rem;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #1890ff;
  }
`;

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/login');
  };

  return (
    <SidebarContainer>
      <h2>Admin Panel</h2>
      <MenuItem onClick={() => navigate('/admin')}>Dashboard</MenuItem>
      <MenuItem onClick={() => navigate('/dashboard/users')}>Users</MenuItem>
      <MenuItem onClick={() => navigate('/dashboard/users')}>Courses</MenuItem>
      <MenuItem onClick={() => navigate('/dashboard/settings')}>Settings</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;