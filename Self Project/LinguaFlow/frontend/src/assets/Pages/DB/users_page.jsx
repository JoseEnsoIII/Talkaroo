import React, { useState, useEffect } from "react";
import styled from "styled-components";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false); 
  const [newUser, setNewUser] = useState({
    username: "",
    first_name: "",
    last_name: "",
    suffix: "",
    email: "",
    password: "",
    course: "",
  });
  const [editUser, setEditUser] = useState(null); // state for editing user

  useEffect(() => {
    fetch("http://localhost:5001/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers([...users, data]);
        setShowModal(false);
      })
      .catch((err) => console.error("Error adding user:", err));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5001/api/users/${editUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editUser),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers((prev) =>
          prev.map((user) => (user.id === data.user.id ? data.user : user))
        );
        setEditUser(null);
        setShowModal(false);
      })
      .catch((err) => console.error("Error updating user:", err));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5001/api/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setUsers((prev) => prev.filter((user) => user.id !== id));
      })
      .catch((err) => console.error("Error deleting user:", err));
  };

  return (
    <Container>
      <Title>Registered Users</Title>

      <ButtonContainer>
        <AddButton onClick={() => setShowModal(true)}>Add User</AddButton>
      </ButtonContainer>

      {showModal && (
        <>
          <Overlay onClick={() => setShowModal(false)} />
          <Modal>
            <Form onSubmit={editUser ? handleEditSubmit : handleFormSubmit}>
              <FormInput
                type="text"
                name="username"
                value={editUser ? editUser.username : newUser.username}
                onChange={editUser ? handleEditInputChange : handleInputChange}
                placeholder="Username"
                required
              />
              <FormInput
                type="text"
                name="first_name"
                value={editUser ? editUser.first_name : newUser.first_name}
                onChange={editUser ? handleEditInputChange : handleInputChange}
                placeholder="First Name"
                required
              />
              <FormInput
                type="text"
                name="last_name"
                value={editUser ? editUser.last_name : newUser.last_name}
                onChange={editUser ? handleEditInputChange : handleInputChange}
                placeholder="Last Name"
                required
              />
              <FormInput
                type="text"
                name="suffix"
                value={editUser ? editUser.suffix : newUser.suffix}
                onChange={editUser ? handleEditInputChange : handleInputChange}
                placeholder="Suffix"
              />
              <FormInput
                type="email"
                name="email"
                value={editUser ? editUser.email : newUser.email}
                onChange={editUser ? handleEditInputChange : handleInputChange}
                placeholder="Email"
                required
              />
              <FormInput
                type="password"
                name="password"
                value={editUser ? editUser.password : newUser.password}
                onChange={editUser ? handleEditInputChange : handleInputChange}
                placeholder="Password"
                required
              />
              <FormInput
                type="text"
                name="course"
                value={editUser ? editUser.course : newUser.course}
                onChange={editUser ? handleEditInputChange : handleInputChange}
                placeholder="Course"
              />
              <FormSubmitButton type="submit">
                {editUser ? "Update User" : "Add User"}
              </FormSubmitButton>
            </Form>
          </Modal>
        </>
      )}

      {users.length === 0 ? (
        <LoadingText>Loading users...</LoadingText>
      ) : (
        <TableContainer>
          <StyledTable>
            <thead>
              <tr>
                <Th>ID</Th>
                <Th>Username</Th>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Suffix</Th>
                <Th>Email</Th>
                <Th>Password</Th>
                <Th>Course</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <StyledRow key={user.id}>
                  <Td>{user.id}</Td>
                  <Td>{user.username}</Td>
                  <Td>{user.first_name}</Td>
                  <Td>{user.last_name}</Td>
                  <Td>{user.suffix || "N/A"}</Td>
                  <Td>{user.email}</Td>
                  <Td>*******</Td>
                  <Td>{user.course}</Td>
                  <Td>
                    <EditButton onClick={() => setEditUser(user)}>Edit</EditButton>
                    <DeleteButton onClick={() => handleDelete(user.id)}>
                      Delete
                    </DeleteButton>
                  </Td>
                </StyledRow>
              ))}
            </tbody>
          </StyledTable>
        </TableContainer>
      )}
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 2rem;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: #007bff;
  margin-bottom: 1.5rem;
`;

const ButtonContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const AddButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1001;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormInput = styled.input`
  padding: 0.8rem;
  margin: 10px;
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const FormSubmitButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  max-width: 400px;
  margin-top: 10px;

  &:hover {
    background-color: #218838;
  }
`;

const LoadingText = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #6c757d;
`;

const TableContainer = styled.div`
  overflow-x: auto;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #dee2e6;
`;

const Th = styled.th`
  background: #007bff;
  color: white;
  padding: 10px;
  text-transform: uppercase;
  border: 1px solid #dee2e6;
`;

const Td = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #dee2e6;
`;

const StyledRow = styled.tr`
  &:nth-child(even) {
    background: #f8f9fa;
  }
  &:hover {
    background: #e9ecef;
  }
`;

const EditButton = styled.button`
  background-color: #ffc107;
  color: white;
  padding: 5px 10px;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    background-color: #e0a800;
  }
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  padding: 5px 10px;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

export default UsersPage;
