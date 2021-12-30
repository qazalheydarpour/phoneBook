import React from "react";
import { Card, Row , Col ,Button, Container } from "react-bootstrap";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import { CardEdit } from "../cardEdit/CardEdit";
import { Outlet , Link } from "react-router-dom";

export const ContactCard = () => {
  const params = useParams();
  const [user, setUser] = useState({
    id: 1,
    name: "",
    email: "",
    phone: "",
    website: "",
  });
  const getUsers = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.contactID}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [params.contactID]);
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card
              style={{
                width: "18rem",
                backgroundColor: "#373b3e",
                color: "white",
              }}
            >
              <Card.Img
                variant="top"
                src={`https://avatars.dicebear.com/api/personas/${user.id}.svg`}
              />
              <Card.Body>
                <Card.Title>{user.name}
                <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to={`edit`}
                      >
                <img  style={{ width: "20px", marginLeft: "5px" ,  position:'absolute',right:'5%'}} src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNjY2NjY2MiPjxwYXRoIGQ9Ik0xMzcuMzk4NDQsMTQuMzMzMzNjLTUuMTg2ODcsMCAtMTAuMzczNzUsMS45NzUzMSAtMTQuMzMzMzMsNS45MzQ5bC04LjM5ODQ0LDguMzk4NDRsMjguNjY2NjcsMjguNjY2NjdsOC4zOTg0NCwtOC4zOTg0NGM3LjkxMiwtNy45MTIgNy45MTIsLTIwLjc0NzUgMCwtMjguNjY2NjdjLTMuOTU5NTgsLTMuOTU5NTggLTkuMTQ2NDYsLTUuOTM0OSAtMTQuMzMzMzMsLTUuOTM0OXpNMTAzLjkxNjY3LDM5LjQxNjY3bC04Mi40MTY2Nyw4Mi40MTY2N3YyOC42NjY2N2gyOC42NjY2N2w4Mi40MTY2NywtODIuNDE2Njd6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4='/>
                </Link>
                </Card.Title>
                <hr/>
                <Card.Text>Email : {user.email}</Card.Text>
                <Card.Text>Phone : {user.phone}</Card.Text>
                <Card.Text>Website : {user.website}</Card.Text>
              </Card.Body>
              <Outlet/>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
