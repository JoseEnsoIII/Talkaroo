import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #f0f2f5;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.bg || "red"};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 0.5rem;
  &:hover {
    background-color: ${(props) => props.hover || "darkred"};
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.thead`
  background-color: #001529;
  color: white;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }
  &:hover {
    background-color: #e9ecef;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #dee2e6;
`;

const TableHeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  min-width: 300px;
`;

const UsersDashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "client",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5002/api/users");
        if (!response.ok) throw new Error("Failed to fetch users");
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    try {
      const method = editUser ? "PUT" : "POST";
      const url = editUser
        ? `http://localhost:5002/api/users/${editUser.id}`
        : "http://localhost:5002/api/users";
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to save user");
      const updatedUser = await response.json();

      if (editUser) {
        setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
      } else {
        setUsers([...users, updatedUser]);
      }

      closeModal();
    } catch (error) {
      alert("Error saving user.");
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await fetch(`http://localhost:5002/api/users/${id}`, { method: "DELETE" });
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      alert("Error deleting user.");
    }
  };

  const openModal = (user = null) => {
    setEditUser(user);
    setFormData(user ? { name: user.name, email: user.email, role: user.role } : { name: "", email: "", role: "client" });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditUser(null);
  };

  return (
    <DashboardContainer>
      <Sidebar />
      <Content>
        <Header>
          <h1>User Management</h1>
          <Button onClick={() => openModal()} bg="#28a745" hover="#218838">
            + Add User
          </Button>
        </Header>

        {error && <div>Error: {error}</div>}
        {loading ? (
          <div>Loading users...</div>
        ) : (
          <Table>
            <TableHeader>
              <tr>
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Email</TableHeaderCell>
                <TableHeaderCell>Role</TableHeaderCell>
                <TableHeaderCell>Actions</TableHeaderCell>
              </tr>
            </TableHeader>
            <tbody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Button onClick={() => openModal(user)} bg="#ffc107" hover="#e0a800">
                      Edit
                    </Button>
                    <Button onClick={() => handleDeleteUser(user.id)} bg="#dc3545" hover="#c82333">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        )}
      </Content>

      {modalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2>{editUser ? "Edit User" : "Add User"}</h2>
            <label>Name:</label>
            <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <br />
            <label>Email:</label>
            <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <br />
            <label>Role:</label>
            <select value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
              <option value="client">Client</option>
              <option value="admin">Admin</option>
            </select>
            <br />
            <Button onClick={handleAddUser} bg="#28a745" hover="#218838">
              {editUser ? "Update" : "Add"}
            </Button>
            <Button onClick={closeModal} bg="#6c757d" hover="#5a6268">
              Cancel
            </Button>
          </ModalContent>
        </ModalOverlay>
      )}
    </DashboardContainer>
  );
};

export default UsersDashboard;
