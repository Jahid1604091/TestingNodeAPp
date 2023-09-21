import React from "react";
import Layout from "./Layout";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export default function Error({ error }) {
  return (
    <Layout>
      <Wrapper>
        <Container>
          <Row>
            <Col>
              <div className="alert alert-danger text-center">
              error
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.section`
  .alert {
    margin-top: 10rem;
  }
`;
