import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const PlayerCard = ({ list, role, id }) => {
  return (
    <>
      {list
        .filter((x) => x.role === role && x.team.id == id)
        .map((player, index) => (
          <Col key={index} xs={6} md={4} lg={3} xl={2} className="px-1 my-1">
            <Link to={`/playerProfile/${player.id}`}>
              <Card className=" player-card text-white bg-primary d-flex flex-column align-items-center">
                <div className="mb-2">
                  <i class="fas fa-user-tie user-profile"></i>
                </div>
                <div className="player-card-name text-center">
                  <span>{player.first_name}</span>
                  <h4> {player.last_name}</h4>
                </div>
                <div className="d-flex align-items-evenly">
                  <div className="d-flex flex-column text-center player-card-info">
                    <span>{player.matches}</span>
                    <span className="player-card-heading">MATCHES</span>
                  </div>
                  <div className="d-flex flex-column text-center player-card-info">
                    <span>{player.runs}</span>
                    <span className="player-card-heading">RUNS</span>
                  </div>{" "}
                  <div className="d-flex flex-column text-center player-card-info">
                    <span>{player.wickets}</span>
                    <span className="player-card-heading">WICKETS</span>
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
    </>
  );
};

export default PlayerCard;
