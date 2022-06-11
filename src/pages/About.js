import { Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { IoPhonePortraitOutline } from "react-icons/io5";

const About = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <Col>About</Col>
      </Row>
    </Container>
  );
};

export default About;
