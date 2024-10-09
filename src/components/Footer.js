import BowlingAlley from "./BowlingAlley";

export default function Footer() {
  return (
    <BowlingAlley className="nav-row foot-row soft-shadow">
      <footer>
        <div style={{ display: "flex" }}>
          <div style={{ margin: "auto", fontFamily: "Inconsolata" }}>
            <p>© 2024 <a className="outgoing-link" href="https://github.com/gaelanmcmillan">Gaelan McMillan</a></p>
          </div>
        </div>
      </footer>
    </BowlingAlley>
  );
}