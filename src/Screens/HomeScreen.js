import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
// import Hero from "../Components/Hero";
import Teams from "../Config/Data/teams";
import VenueList from "../Config/Data/VenueList.json";
import MatchCard from "../Components/MatchCard";
import MatchList from "../Config/Data/matchList";
import Scores from "../Config/Data/scores.json";
import { Link } from "react-router-dom";
const HomeScreen = (props) => {
  const match = useRef(null);
  const [currFocus, setCurrFocus] = useState();
  useEffect(() => {
    // currFocus.current.scrollIntoView({ behaviour: "smooth" });
  }, []);
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
                <Link to={`/teamDetails/${team.id}`}>
                  <Card className="team-card p-3 sm-p-3 my-3">
                    <div style={{ height: "165px" }} className="d-flex align-items-center">
                      <Card.Img
                        variant="top"
                        src={team.img}
                        className="img-center img-responsive"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h4>{team.name}</h4>
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </section>
        {/* list of matches */}
        <section id="match" ref={match}>
          <div className="heading mt-4 mb-1">
            <h2 className="title">Matches</h2>
          </div>
          <MatchCard data={MatchList} pending={1} />
        </section>
        {/* tournament score table */}
        <section id="scoreTable">
          <div className="heading mt-4 mb-1">
            <h2 className="title">Standings </h2>
          </div>

          <Table className="table table-hover" responsive="xl">
            <thead>
              <tr>
                <th scope="col">Team</th>
                <th scope="col">Played</th>
                <th scope="col">Won</th>
                <th scope="col">Lost</th>
                <th scope="col">Tied</th>
                <th scope="col">Points</th>
                <th scope="col">Form</th>
              </tr>
            </thead>
            <tbody>
              {Scores.map((score, index) => (
                <tr key={index} className="table-active">
                  <th scope="row">
                    <a href={`/teamDetails/${score.team.id}`}>{score.team.name}</a>
                  </th>
                  <td>{score.played}</td>
                  <td>{score.won}</td>
                  <td>{score.lost}</td>
                  <td>{score.tied}</td>

                  <td>{score.points}</td>
                  <td>
                    {score.form.map((x) => (
                      <span>{x}</span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
        {/* list of result */}
        <section id="result">
          <div className="heading mt-4 mb-1">
            <h2 className="title">Results</h2>
          </div>
          <MatchCard data={MatchList} pending={0} />
        </section>
        {/* list of venues */}
        <section id="venue">
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
                  <td>
                    <Link to={`/teamDetails/${venue.homeOf.id}`}>{venue.homeOf.name}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </Container>
    </>
  );
};

export default HomeScreen;
