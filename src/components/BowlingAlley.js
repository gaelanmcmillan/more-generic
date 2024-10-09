import { Col, Row } from "react-bootstrap";

const BowlingAlley = ({ lg, md, sm, xs, className, children }) => {
  const lgW = lg ? lg : 6;
  const mdW = md ? md : 8;
  const smW = sm ? sm : 10;
  const xsW = xs ? xs : 12;
  const gutterWidth = w => (12 - w) / 2;
  return (
    <Row className={className}>
      <Col lg={gutterWidth(lgW)} md={gutterWidth(mdW)} sm={gutterWidth(smW)} xs={gutterWidth(xsW)} /> {/* the gutters */}
      <Col /*style={{ overflow: "scroll" }}*/ lg={lgW} md={mdW} sm={smW} xs={xsW}> {/* the lane */}
        {children}
      </Col>
      <Col lg={gutterWidth(lgW)} md={gutterWidth(mdW)} sm={gutterWidth(smW)} xs={gutterWidth(xsW)} /> {/* the gutters */}
    </Row>
  )
}

export default BowlingAlley;

