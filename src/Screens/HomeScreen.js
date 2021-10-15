import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import Hero from "../Components/Hero";
import Teams from "../Config/Data/teams";
const HomeScreen = () => {
  return (
    <>
      {/* <Hero /> */}
      <Container>
        {/* TEAMS */}

        <section>
          <Row>
            {Teams.map((team, index) => (
              <Col lg={3}>
                <Card className="p-3">
                  <Card.Img variant="top" src={team.img} className="img-center team-card-logo" />
                  <h4>{team.name}</h4>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </>
  );
};

export default HomeScreen;
