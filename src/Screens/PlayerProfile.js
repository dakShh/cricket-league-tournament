import React, { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Images } from "../Config/Images";
import PlayerList from "../Config/Data/playersList.json";
const PlayerProfile = ({ match }) => {
  const playerData = PlayerList.find((x) => x.id == match.params.id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Container className="min-vh-100 mb-3">
        <Row>
          <Col md={8} className=" ">
            <Card className="team-detail-card mt-4 w-100 p-3 ">
              <div>
                <h3 className="fst-italic">{`${playerData.first_name} ${playerData.last_name}`}</h3>
                <span>{playerData.Nationality}</span>
                <br />
                <span>{playerData.dob}</span>
              </div>
            </Card>
            <Row>
              <Col md={12} lg={6} className="d-flex">
                <Card className="team-detail-card mt-4 w-100 p-3 ">
                  <div className="d-table">
                    <span className="d-table-row">
                      <div className="th fw-bold">Role:</div>
                      <div className="td">{playerData.role}</div>
                    </span>
                    <span className="d-table-row">
                      <div className="th fw-bold">Batting Style:</div>
                      <div className="td">{playerData.batting_style}</div>
                    </span>{" "}
                    <span className="d-table-row">
                      <div className="th fw-bold">Bowling Style:</div>
                      <div className="td">{playerData.bowling_style}</div>
                    </span>{" "}
                    <span className="d-table-row">
                      <div className="th fw-bold">Debut:</div>
                      <div className="td">{playerData.ipl_debut}</div>
                    </span>
                  </div>
                </Card>
              </Col>
              <Col md={12} lg={6} className="d-flex">
                <Card className="team-detail-card mt-4 w-100 p-3 ">
                  <div className="d-table">
                    <span className="d-table-row">
                      <div className="th fw-bold">Matches:</div>
                      <div className="td">{playerData.matches}</div>
                    </span>
                    <span className="d-table-row">
                      <div className="th fw-bold">Runs:</div>
                      <div className="td">{playerData.runs}</div>
                    </span>{" "}
                    <span className="d-table-row">
                      <div className="th fw-bold">Wickets:</div>
                      <div className="td">{playerData.wickets}</div>
                    </span>{" "}
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xs={{ order: "first" }} lg={{ order: "last" }}>
            <div className="p-4" style={{ height: "300px" }}>
              <img src={Images.user} alt="user" className="img-responsive img-center" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="team-detail-card mt-4 w-100 p-3 ">
              <div>
                <h3>About</h3>
              </div>
              <div>
                <span>{playerData.description}</span>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlayerProfile;
