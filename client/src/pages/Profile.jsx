import React from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteProfileMutation } from "../slices/userApiSlice";
import { logout } from "../slices/authSlice";
import Layout from "../components/Layout";
import { FaMailBulk } from "react-icons/fa";
import styled from "styled-components";


export default function Profile() {
  const {
    userInfo: { _id, name, email,avatar },
  } = useSelector((state) => state.auth);

  const [deleteProfile, { isLoading }] = useDeleteProfileMutation();
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await deleteProfile();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error?.data?.message || error.error);
    }
  };

  return (
    <Layout>
      <Wrapper>
        <Row>
          <Col md={6} className="mx-auto">
            <Card className="text-center">
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  margin: "auto",
                }}
                src={avatar?.url || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUiF_OQ_-RS1ksidGVXXFQ-nJehHFxbHfIoQ&usqp=CAU'}
                
              />
              <Card.Body>
                <Card.Title>
               {name}
                 
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  {" "}
                  <h6>
                    {" "}
                    <span className="text-primary">
                      {" "}
                      <FaMailBulk />{" "}
                    </span>{" "}
                    {email}
                  </h6>{" "}
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
           
                <Link
                  to="/profile"
                  className="btn bg-danger text-light p-1"
                  onClick={handleDelete}
                >
                  Delete Profile
                </Link>
              </Card.Body>
            </Card>
          </Col>

         
        </Row>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.section`
  .btn {
    transition: var(--transition);
    /* color: var(--clr-red-dark); */
    cursor: pointer;
    &:hover {
      /* color: var(--clr-red-light); */
    }
  }
`;
