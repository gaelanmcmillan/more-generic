import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const BowlingAlley = ({className, children}) => {
  return (
    <Row className={className}>
      <Col lg={3} md={2} sm={1} xs={0} /> {/* the gutters */}
      <Col lg={6} md={8} sm={10} xs={12}> {/* the lane */}
        {children}
      </Col>
      <Col lg={3} md={2} sm={1} xs={0} /> {/* the gutters */}
    </Row>
  )
}

export default BowlingAlley;

