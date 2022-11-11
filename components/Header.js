import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import AcronymSlider from "./AcronymSlider";
import styled from "styled-components";

const NavTitle = styled.a`
  height: auto;
  color: unset;
  cursor: pointer;
  text-decoration: none;
  font-family: "Inconsolata";
`
export default function Header() {
  return (
    <header>
      <Row className="nav-row">
      <Col lg={3} md={2} sm={1} xs={0} />
      <Col lg={6} md={8} sm={10} xs={12}>
        <nav>
        <Link href="/">
          <a>
          <AcronymSlider
            style={{display: "flex", margin: "auto"}}
            font='"Inconsolata"'
            fontSize="2rem"
            words={
              ["M", "o", "r", "e", " ", "G", "e", "n", "e", "r", "i", "c. A blog about generic programming in C++."]
            }/>
          </a>
        </Link>
        <Link href="/about">
          <NavTitle><h2>About</h2></NavTitle>
        </Link>
        <Link href="/blog">
          <NavTitle><h2>Blog</h2></NavTitle>
        </Link>
        </nav>
      </Col>
      <Col lg={3} md={2} sm={1} xs={0} />
        <Col >
        </Col>
      </Row>
    </header>
  );
}