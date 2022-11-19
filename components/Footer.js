import { Row, Col } from "react-bootstrap"
import Link from "next/link";
import BowlingAlley from "./BowlingAlley";
import NavTitle from "./NavStyles";

export default function Footer () {
    return (
      <BowlingAlley className="nav-row foot-row soft-shadow">
        <footer>
          <div style={{display: "flex"}}>
            <div style={{margin: "auto", fontFamily: "Inconsolata"}}>
              <p>© 2022 Gaelan McMillan</p>
            </div>
          </div>
        </footer>
      </BowlingAlley>

    );
}