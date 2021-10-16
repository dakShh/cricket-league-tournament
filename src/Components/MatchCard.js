import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Images } from "../Config/Images";
const MatchCard = (props) => {
  console.log("matches", props.data);
  const [matchData, setMatchData] = useState([]);
  useEffect(() => {
    setMatchData(props.data);
  }, [props.data]);
  return (
    <>
      {matchData.map((match, index) => (
        <>
          <h5>{match.date}</h5>
          <Card key={index} className="matches-card p-3 mb-4">
            <Row>
              <Col lg={4}>
                <div className="graphic d-flex justify-content-evenly px-1">
                  <div style={{ height: "100px" }}>
                    <img src={match.team1.img} alt={match.team1.name} className="img-responsive" />
                  </div>
                  <h3 className="my-auto px-3">VS</h3>
                  <div style={{ height: "100px" }}>
                    <img src={match.team2.img} alt={match.team2.name} className="img-responsive" />
                  </div>
                </div>
              </Col>
              <Col sm={6} md={6} lg={4}>
                <div className="team-names d-flex flex-column h-100">
                  <div className="my-auto">
                    <h4 className="fst-italic">{match.team1.name}</h4>
                    <h4 className="fst-italic">{match.team2.name}</h4>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={6} lg={4}>
                <div className="date-time d-flex flex-column h-100">
                  <div className="my-auto">
                    <p className="mb-2">{match.time}</p>
                    <p className="m-0"> {match.venue}</p>
                  </div>
                  {match.status == 1 && (
                    <>
                      <Link to={`matchSummary/${match.id}`}>
                        <button>Match Summary</button>
                      </Link>{" "}
                    </>
                  )}
                </div>
              </Col>
            </Row>
          </Card>
        </>
      ))}
    </>
  );
};

export default MatchCard;
