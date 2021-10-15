import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Images } from "../Config/Images";
const MatchCard = (props) => {
  console.log("matches", props.data);
  const [matchData, setMatchData] = useState([]);
  return (
    <>
      <Card className="p-3">
        <Row>
          <Col style={{ borderRight: "1px solid gray" }}>
            <div className="d-flex justify-content-center">
              <img src={Images.mi} alt={"mumbai indians"} height="90px" />
              <h3 className="my-auto px-3">VS</h3>
              <img src={Images.csk} alt={"chennai"} height="90px" />
            </div>
          </Col>
          <Col style={{ borderRight: "1px solid gray" }}>
            <div className="d-flex flex-column ">
              <div className="me-auto">
                <h3 className="fst-italic">Mumbai Indians</h3>
                <h3 className="fst-italic">Chennai Super Kings</h3>
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column ">
              <p>19:30 IST (14:00 GMT), 18:00 LOCAL</p>
              <p> Dubai International Stadium, Dubai</p>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default MatchCard;
