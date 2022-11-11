import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import AcronymSlider from "./AcronymSlider";
import BowlingAlley from "./BowlingAlley";
import NavTitle from "./NavStyles";

export default function Header() {
  return (
    <header>
      <BowlingAlley className="nav-row soft-shadow" >
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
      </BowlingAlley>
    </header>
  );
}