import React from "react";
import MatchList from "../Config/Data/matchList";
import { Container, Row, Col, Card } from "react-bootstrap";
const MatchSummary = ({ match }) => {
  const data = MatchList.find((x) => x.id == match.params.id);
  console.log("data", data);
  return (
    <>
      <Container>
        <Card className="summary-card ">
          <div className="text-center mx-auto mb-4 w-50" style={{ borderBottom: "1px solid gray" }}>
            <h6>{data.venue}</h6>
          </div>
          <div className="text-center">
            <h2>{data.matchSummary.summary}</h2>
          </div>
          <div className="d-flex justify-content-center my-3">
            <div>
              <div className="left-img-container">
                <img
                  src={data.matchSummary.winning_team.img}
                  alt={data.matchSummary.winning_team.name}
                  className="img-responsive"
                />
              </div>
              <div className="left-container d-flex flex-column align-items-end  my-2 fs-4">
                <span style={{ color: "#fff" }}>{data.matchSummary.winning_team.name}</span>
                <span className="fs-1 fw-bold score-card">
                  {data.matchSummary.winning_team.runs.run}/
                  {data.matchSummary.winning_team.runs.wickets}
                </span>
                <span>overs : {data.matchSummary.winning_team.overs}/20</span>

                <div className="left-bottom-container my-4 d-flex flex-column align-items-end">
                  <div className="fs-6 fw-normal"> Man of the match</div>
                  <div className="fs-6 fw-normal"> Bowler of the match</div>
                  <div className="fs-6 fw-normal"> Best Fielder</div>
                </div>
              </div>
            </div>
            <div>
              <div className="right-img-container">
                <img
                  src={data.matchSummary.loosing_team.img}
                  alt={data.matchSummary.loosing_team.name}
                  className="img-responsive"
                />
              </div>
              <div className="right-container d-flex flex-column align-items-start  my-2 fs-4">
                <span style={{ color: "#fff" }}>{data.matchSummary.loosing_team.name}</span>
                <span className="fs-1 fw-bold score-card">
                  {data.matchSummary.loosing_team.runs.run}/
                  {data.matchSummary.loosing_team.runs.wickets}
                </span>
                <span>{data.matchSummary.loosing_team.overs}/20 : overs </span>
                <div className="right-bottom-container my-4 w-100">
                  <div className="fs-6 fw-normal"> {data.matchSummary.man_of_the_match}</div>
                  <div className="fs-6 fw-normal"> {data.matchSummary.bowler_of_the_match}</div>
                  <div className="fs-6 fw-normal"> {data.matchSummary.best_fielder}</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default MatchSummary;
