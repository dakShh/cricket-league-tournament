import React from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
// import Hero from "../Components/Hero";
import Teams from "../Config/Data/teams";
import VenueList from "../Config/Data/VenueList.json";
import MatchCard from "../Components/MatchCard";
import MatchList from "../Config/Data/matchList";
const HomeScreen = () => {
  return (
    <>
      {/* <Hero /> */}
      <Container>
        {/* TEAMS */}
        <section>
          <div className="heading mt-4 mb-1">
            <h2 className="title">Teams</h2>
          </div>
          <Row>
            {Teams.map((team, index) => (
              <Col key={index} xs={6} md={4} lg={3}>
                <Card className="team-card p-3 sm-p-3 my-3">
                  <div style={{ height: "165px" }} className="d-flex align-items-center">
                    <Card.Img variant="top" src={team.img} className="img-center team-card-img" />
                  </div>
                  <div className="mt-4 text-center">
                    <h4>{team.name}</h4>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
        {/* list of venues */}
        <section>
          <div className="heading mt-4 mb-1">
            <h2 className="title">List of Venues </h2>
          </div>
          <div className="mt-3">
            <h5>In India</h5>
          </div>
          <Table className="table table-hover" responsive="xl">
            <thead>
              <tr>
                <th scope="col">Venue</th>
                <th scope="col">City</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">No. of matches</th>
                <th scope="col">Home of</th>
              </tr>
            </thead>
            <tbody>
              {VenueList.map((venue, index) => (
                <tr key={index} className="table-primary">
                  <th scope="row">{venue.venue}</th>
                  <td>{venue.city}</td>
                  <td>{venue.first}</td>
                  <td>{venue.last}</td>
                  <td>{venue.matchesPlayed}</td>
                  <td>{venue.homeOf}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
        {/* list of matches */}
        <section>
          <div className="heading mt-4 mb-1">
            <h2 className="title">Matches</h2>
          </div>
          <MatchCard data={MatchList} />
        </section>
      </Container>
    </>
  );
};

export default HomeScreen;
