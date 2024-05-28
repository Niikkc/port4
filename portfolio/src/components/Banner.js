
import { Container, Row, Col } from "react-bootstrap";
export const Banner = () => {

  return (
    <section className="banner" id="home">
      <a id="youtube" href="https://www.youtube.com/watch?v=XO02P3QwENo">
      </a>
      <Container>
        <Row className="align-items-center">
          <Col>
            <h1>My Portfolio</h1>
            <p>An aspiring software engineer at the University of California, Riverside</p>
          </Col>
        </Row>
        <Row>
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="snowflake"></div>
          ))}
        </Row>
      </Container>
      
    </section>
  )
}

export default Banner;