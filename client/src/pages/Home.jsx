import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";

import NotFound from "../components/NotFound";
import { useGetAllUsersQuery } from "../slices/adminApiSlice";



export default function Home() {

  const {data,isLoading} = useGetAllUsersQuery();
if(isLoading){
  return <Loader/>
}
  return (
    <Layout>
      <Wrapper>
        <Container>
          <Form.Control
           className="mb-3 text-center"
            type="search"
            placeholder="Search by name, expertise area etc ..."
          />
       
          <Row className="">
            {
              data?.data.map(d=>  <Col sm={4}>
                <div>
                  <Card className="card mb-3">
                    <Card.Img
                      variant="top"
                      src=
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUiF_OQ_-RS1ksidGVXXFQ-nJehHFxbHfIoQ&usqp=CAU"
                      className="avatar"
                    />
                    <Card.Body>
                      <Card.Title>{d.name}</Card.Title>
                      <p>{d.email}</p>
                    </Card.Body>
                  </Card>
                </div>
              </Col>)
            }
              
 
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.section`
  .card {
    .avatar {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin: auto;
    }
  }
`;
