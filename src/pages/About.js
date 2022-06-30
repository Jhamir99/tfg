import { Container, Row, Col, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import aboutUsImg from "../about_us_img.jpeg"

const About = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <Col className="m-5">
          <h1>{t("about_us")}</h1>
          {t("about_us_text")}
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={aboutUsImg} fluid="true"></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
