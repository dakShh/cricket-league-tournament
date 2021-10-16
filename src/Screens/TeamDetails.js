import React, { useEffect, useRef } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Teams from "../Config/Data/teams";
import PlayersList from "../Config/Data/playersList.json";
import PlayerCard from "../Components/PlayerCard";
const TeamDetails = ({ match }) => {
  const teamData = Teams.find((x) => x.id == match.params.id);
  const focusStart = useRef();
  console.log(focusStart.current);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Container className="min-vh-100 mb-3" ref={focusStart}>
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
        <Row>
          <Col>
            <Card className="team-detail-card mt-4 p-1">
              <div className=" mt-4 mb-2">
                <h2 className="">Squad List </h2>
              </div>
              <div>
                <div className="w-100 text-center">
                  <h4>All-Rounder</h4>
                </div>
                <Row className="gx-0 d-flex justify-content-center">
                  <PlayerCard list={PlayersList} id={match.params.id} role="all-rounder" />
                </Row>
                <div className="w-100 text-center">
                  <h4>Batsman</h4>
                </div>
                <Row className="gx-0 d-flex justify-content-center">
                  <PlayerCard list={PlayersList} id={match.params.id} role="batsman" />
                </Row>
                <div className="w-100 text-center">
                  <h4>Bowler</h4>
                </div>
                <Row className="gx-0 d-flex justify-content-center">
                  <PlayerCard list={PlayersList} id={match.params.id} role="bowler" />
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeamDetails;
