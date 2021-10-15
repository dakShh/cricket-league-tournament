import React, { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Teams from "../Config/Data/teams";
const TeamDetails = ({ match }) => {
  const teamData = Teams.find((x) => x.id == match.params.id);
  useEffect(() => {}, []);
  return (
    <div>
      <Container>
        <Row>
          <Col md={8} className="d-flex ">
            <Card className="team-detail-card mt-4 w-100 p-3 ">
              <div>
                <h3 className="fst-italic">{teamData.name}</h3>
              </div>
              <div className="p-3">
                <p>
                  <strong>Owner : </strong>
                  {teamData.details.owner}
                </p>
                <p>
                  <strong>Coach : </strong>
                  {teamData.details.coach}
                </p>
                <p>
                  <strong>Venue : </strong>
                  {teamData.details.venue}
                </p>
                <p>
                  <strong>Captain : </strong>
                  {teamData.details.captain}
                </p>
              </div>
            </Card>
          </Col>
          <Col>
            <div className="p-4" style={{ height: "300px" }}>
              <img src={teamData.img} alt={teamData.name} className="img-responsive img-center" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeamDetails;
