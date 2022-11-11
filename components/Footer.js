import { Row, Col } from "react-bootstrap"

export default function Footer () {
    return (
      <Row className="nav-row foot-row">
        <footer className={""}>
          <a href="https://github.com/gaelanmcmillan">
            <h4>by Gaelan McMillan</h4>
          </a>
        </footer>
      </Row>
    );
}