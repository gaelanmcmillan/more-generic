import Link from "next/link";
import { Row, Col } from "react-bootstrap";

export default function Header() {
  return (
    <header >
      <Row>
        <Col >
          <Link href="/">
            <h2 className="clickable">Gaelan McMillan</h2>
          </Link>
        </Col>
        <Col >
          <nav>
            <Link href="/about">
              <h3 className="clickable">About</h3>
            </Link>
            <Link href="/blog">
              <h3 className="clickable">More Generic</h3>
            </Link>
          </nav>
        </Col>
      </Row>
    </header>
  );
}