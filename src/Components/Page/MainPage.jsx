import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import TimeLine from "./TimeLine";
import RightBar from "./RightBar";

export default function MainPage() {
  return (
    <Container fluid style={{ backgroundColor: "#000000" }}>
      <Container>
        <Row style={{ overflowY: "visible" }}>
          <Col lg={"auto"}>
            <NavBar />
          </Col>
          <Col
            lg={5}
            style={{
              padding: "0px",
              borderLeft: "1px solid rgb(47, 51, 54)",
              borderRight: "1px solid rgb(47, 51, 54)",
            }}
          >
            <TimeLine />
          </Col>
          <Col lg={4}>
            <RightBar />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
