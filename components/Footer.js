import { Row, Col } from "react-bootstrap"
import Link from "next/link";
import BowlingAlley from "./BowlingAlley";
import NavTitle from "./NavStyles";

export default function Footer () {
    return (
      <BowlingAlley className="nav-row foot-row soft-shadow">
        <footer>
          <Link href="https://github.com/gaelanmcmillan">
            <NavTitle><h4>by Gaelan McMillan</h4></NavTitle>
          </Link>
        </footer>
      </BowlingAlley>

    );
}