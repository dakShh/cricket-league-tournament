import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { scroller } from "react-scroll";
import { useHistory } from "react-router-dom";
import Teams from "../Config/Data/teams";
const Footer = () => {
  const history = useHistory();
  const scrollTarget = (target) => scroller.scrollTo(target, { smooth: true, duration: 700 });
  const scrollToPage = async (target) => {
    if (history.location.pathname !== "/") {
      await history.push("/");
    }
    scrollTarget(target);
  };
  return (
    <>
      <Card className="footer py-3">
        <Container>
          <Row>
            <Col sm={4} md={4} className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href={`/cricket-league-tournament`}>
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <div onClick={() => scrollToPage("venue")} className="pointer">
                    Venues
                  </div>
                </li>
                <li>
                  <div onClick={() => scrollToPage("result")} className="pointer">
                    Results
                  </div>
                </li>
                <li>
                  <div onClick={() => scrollToPage("match")} className="pointer">
                    Matches
                  </div>
                </li>
                <li>
                  <div onClick={() => scrollToPage("scoreTable")} className="pointer">
                    Score Table
                  </div>
                </li>
              </ul>
            </Col>
            <Col sm={4} md={4} className="footer-col">
              <h4>Teams</h4>
              <ul>
                {Teams.map((team, index) => (
                  <li key={index}>
                    <a href={`/teamDetails/${team.id}`}>
                      <span>{team.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Col>{" "}
            <Col sm={4} md={4} className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="#na">Contact Us</a>
                </li>
                <li>
                  <a href="#na">Sponsorship</a>
                </li>
              </ul>
              <div className="d-flex justify-content-start mt-4 mb-3 gap-3 fs-4">
                <i class="fab fa-twitter icons"></i>
                <i class="fab fa-facebook-f icons"></i>
                <i class="fab fa-instagram icons"></i>
                <i class="fab fa-google icons"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default Footer;
