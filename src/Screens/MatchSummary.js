import React from "react";
import MatchList from "../Config/Data/matchList";
import { Container, Row, Col, Card } from "react-bootstrap";
const MatchSummary = ({ match }) => {
  const data = MatchList.find((x) => x.id == match.params.id);
  console.log("data", data);
  return (
    <>
      <Container>
        <Card className="summary-card p-3">
          <div className="text-center mx-auto mb-4 w-50" style={{ borderBottom: "1px solid gray" }}>
            <h6>{data.venue}</h6>
          </div>
          <div className="text-center">
            <h2>{data.matchSummary.summary}</h2>
          </div>
          <div className="d-flex justify-content-center my-3">
            <div>
              <div style={{ height: "200px", padding: "1rem" }}>
                <img
                  src={data.matchSummary.winning_team.img}
                  alt={data.matchSummary.winning_team.name}
                  className="img-responsive"
                />
              </div>
              <div className="d-flex flex-column align-items-end px-4 my-2 fs-4">
                <span>{data.matchSummary.winning_team.name}</span>
                <span className="fs-1 fw-bold">
                  {data.matchSummary.winning_team.runs.run}/
                  {data.matchSummary.winning_team.runs.wickets}
                </span>
                <span>overs : {data.matchSummary.winning_team.overs}/20</span>

                <div className="my-4 d-flex flex-column align-items-end">
                  <div className="fs-6 fw-normal"> Man of the match</div>
                  <div className="fs-6 fw-normal"> Bowler of the match</div>
                  <div className="fs-6 fw-normal"> Best Fielder</div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ height: "200px", padding: "1rem" }}>
                <img
                  src={data.matchSummary.loosing_team.img}
                  alt={data.matchSummary.loosing_team.name}
                  className="img-responsive"
                />
              </div>
              <div className="d-flex flex-column align-items-start px-4 my-2 fs-4">
                <span>{data.matchSummary.loosing_team.name}</span>
                <span className="fs-1 fw-bold">
                  {data.matchSummary.loosing_team.runs.run}/
                  {data.matchSummary.loosing_team.runs.wickets}
                </span>
                <span>{data.matchSummary.loosing_team.overs}/20 : overs </span>
                <div className="my-4">
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
