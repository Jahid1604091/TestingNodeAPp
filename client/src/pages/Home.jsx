import React from "react";
import Layout from "../components/Layout";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import styled from "styled-components";
import Loader from "../components/Loader";
import { useGetAllUsersQuery } from "../slices/adminApiSlice";
import { usePaymentCreateMutation } from "../slices/userApiSlice";

export default function Home() {
  const { data, isLoading } = useGetAllUsersQuery();
  const [paymentCreate] = usePaymentCreateMutation();

 const handlePayment = async () =>{
  await paymentCreate();
  window.location.href = 'https://scripts.sandbox.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout-sandbox.js'
 } 

  if (isLoading) {
    return <Loader />;
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
            {data?.data.map((d) => (
              <Col sm={4} key={d._id}>
                <Card className="card mb-3">
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUiF_OQ_-RS1ksidGVXXFQ-nJehHFxbHfIoQ&usqp=CAU"
                    className="avatar"
                  />
                  <Card.Body>
                    <Card.Title>{d.name}</Card.Title>
                    <p>{d.email}</p>
                    <button id="bKash_button" onClick={handlePayment} className="btn btn-primary">Pay Now</button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
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
