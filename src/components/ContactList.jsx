import React from "react";
import {
  Table,
  Button,
  Container,
  Row,
  Col,
  Navbar,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import { NavBar } from "../components";

export const ContactList = () => {
  const [users, setUserList] = useState([]);
  const [filter, setFilter] = useState("");
  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUserList(data));
  };
  useEffect(() => {
    document.title = "PhoneBook";
    getUsers();
  }, []);

  const deleteUser = (id) => {
    setUserList(users.filter((x) => x.id !== id));
  };
  return (
    <Container>
      <Row>
        <Col xl={4}>
          <NavBar />
          <div style={{
            backgroundColor: '#373b3e'
          }}>
            <InputGroup className="mb-3">
              <FormControl
                style={{
                  backgroundColor: "inherit", marginTop:'30px' , marginLeft : '15px' ,width: '60%' , borderColor: 'grey'
                }}
                placeholder="SEARCH"
                aria-label="name contact"
                onChange={(e) => setFilter(e.target.value)}
                aria-describedby="basic-addon2"
              />
            </InputGroup>
          </div>
          <Table striped bordered hover variant="dark" style={{marginTop:'-10px'}}>
            <tbody>
              {users.filter((x) =>
                x.name.toLowerCase().includes(filter.toLowerCase())
              ).length === 0 ? (
                <h1>empty list</h1>
              ) : (
                users
                  .filter((x) =>
                    x.name.toLowerCase().includes(filter.toLowerCase())
                  )
                  .map((user) => (
                    <tr key={user.id}>
                      <td style={{ width: "80px" }}>
                        <img
                          style={{
                            backgroundColor: "white",
                            borderRadius: "100%",
                          }}
                          src={`https://avatars.dicebear.com/api/personas/${user.id}.svg`}
                        />
                      </td>
                      <td style={{ width: "200px" }}>
                        <h6>{user.name}</h6>
                        {user.phone}
                      </td>
                      <td>
                        <Link
                          style={{ textDecoration: "none", color: "white" }}
                          to={`${user.id}`}
                        >
                          <img
                            style={{ width: "20px", marginLeft: "5px" }}
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNjY2NjY2MiPjxwYXRoIGQ9Ik0yMi45MzMzMyw2My4wNjY2N2MtMTIuNjY0OTMsMCAtMjIuOTMzMzMsMTAuMjY4NCAtMjIuOTMzMzMsMjIuOTMzMzNjMCwxMi42NjQ5MyAxMC4yNjg0LDIyLjkzMzMzIDIyLjkzMzMzLDIyLjkzMzMzYzEyLjY2NDkzLDAgMjIuOTMzMzMsLTEwLjI2ODQgMjIuOTMzMzMsLTIyLjkzMzMzYzAsLTEyLjY2NDkzIC0xMC4yNjg0LC0yMi45MzMzMyAtMjIuOTMzMzMsLTIyLjkzMzMzek04Niw2My4wNjY2N2MtMTIuNjY0OTMsMCAtMjIuOTMzMzMsMTAuMjY4NCAtMjIuOTMzMzMsMjIuOTMzMzNjMCwxMi42NjQ5MyAxMC4yNjg0LDIyLjkzMzMzIDIyLjkzMzMzLDIyLjkzMzMzYzEyLjY2NDkzLDAgMjIuOTMzMzMsLTEwLjI2ODQgMjIuOTMzMzMsLTIyLjkzMzMzYzAsLTEyLjY2NDkzIC0xMC4yNjg0LC0yMi45MzMzMyAtMjIuOTMzMzMsLTIyLjkzMzMzek0xNDkuMDY2NjcsNjMuMDY2NjdjLTEyLjY2NDkzLDAgLTIyLjkzMzMzLDEwLjI2ODQgLTIyLjkzMzMzLDIyLjkzMzMzYzAsMTIuNjY0OTMgMTAuMjY4NCwyMi45MzMzMyAyMi45MzMzMywyMi45MzMzM2MxMi42NjQ5MywwIDIyLjkzMzMzLC0xMC4yNjg0IDIyLjkzMzMzLC0yMi45MzMzM2MwLC0xMi42NjQ5MyAtMTAuMjY4NCwtMjIuOTMzMzMgLTIyLjkzMzMzLC0yMi45MzMzM3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
                          />
                        </Link>

                        <img
                          onClick={() => deleteUser(user.id)}
                          style={{
                            width: "20px",
                            marginLeft: "5px",
                            cursor: "pointer",
                          }}
                          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNlNzRjM2MiPjxwYXRoIGQ9Ik03MS42NjY2NywxNC4zMzMzM2wtNy4xNjY2Nyw3LjE2NjY3aC00M3YxNC4zMzMzM2g3Ljk1MDUybDEyLjc3OTYyLDEwOS4zMzM2NnYwLjA1NTk5YzAuOTM5LDcuMDcxMDggNy4wNzg4MiwxMi40NDM2OCAxNC4yMDczNiwxMi40NDM2OGg1OS4xMTFjNy4xMjg1MywwIDEzLjI2ODM1LC01LjM3MjY5IDE0LjIwNzM2LC0xMi40NDM2OGwwLjAxNCwtMC4wNTU5OWwxMi43Nzk2MiwtMTA5LjMzMzY2aDcuOTUwNTJ2LTE0LjMzMzMzaC00M2wtNy4xNjY2NywtNy4xNjY2N3pNNDMuODk1ODMsMzUuODMzMzNoODQuMjA4MzNsLTEyLjU1NTY2LDEwNy41aC01OS4xMTF6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                        />
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </Table>
        </Col>
        <Col xl={8}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};
