import { Row, Col, Form } from "react-bootstrap";
import { t } from "i18next";

export function SmartphoneModalBody(props) {
  return (
    <Form>
      <Form.Group className="m-3" controlId="smartphoneBrand">
        <Form.Label> {t("brand")} </Form.Label>
        <Form.Control placeholder="Apple, Samsung..." />
      </Form.Group>

      <Form.Group className="m-3" controlId="smartphoneModel">
        <Form.Label> {t("model")} </Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group className="m-3" controlId="smartphoneYear">
        <Form.Label> {t("year")} </Form.Label>
        <Form.Control type="number" min="2010" max={new Date().getFullYear()} />
      </Form.Group>

      <Row className="m-2">
        <Col>
          <Form.Group controlId="smartphoneWidth">
            <Form.Label> {t("width")} </Form.Label>
            <Form.Control />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="smartphoneHeight">
            <Form.Label> {t("height")} </Form.Label>
            <Form.Control />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="smartphoneDepth">
            <Form.Label> {t("depth")} </Form.Label>
            <Form.Control />
          </Form.Group>
        </Col>
      </Row>
      <Form.Text className="text-muted m-3">
        {t("warning_dimensions")}
      </Form.Text>
    </Form>
  );
}

export function LaptopModalBody(props) {
  return (
    <Form>
      <Form.Group className="m-3" controlId="laptopBrand">
        <Form.Label> {t("brand")} </Form.Label>
        <Form.Control placeholder="Apple, Samsung..." />
      </Form.Group>

      <Form.Group className="m-3" controlId="laptopModel">
        <Form.Label> {t("model")} </Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group className="m-3" controlId="laptopYear">
        <Form.Label> {t("year")} </Form.Label>
        <Form.Control type="number" min="2010" max={new Date().getFullYear()} />
      </Form.Group>

      <Form.Group className="m-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={t("has_external_gpu")} />
      </Form.Group>
    </Form>
  );
}

export function DesktopPCModalBody(props) {
  return (
    <Form>
      <Form.Group className="m-3" controlId="laptopBrand">
        <Form.Label> {t("brand")} </Form.Label>
        <Form.Control placeholder="Apple, Samsung..." />
      </Form.Group>

      <Form.Group className="m-3" controlId="laptopModel">
        <Form.Label> {t("model")} </Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group className="m-3" controlId="laptopYear">
        <Form.Label> {t("year")} </Form.Label>
        <Form.Control type="number" min="2010" max={new Date().getFullYear()} />
      </Form.Group>

      <Form.Group className="m-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={t("has_external_gpu")} />
      </Form.Group>
    </Form>
  );
}

export function WearableModalBody(props) {
  return (
    <Form>
      <Form.Group className="m-3" controlId="wearableBrand">
        <Form.Label> {t("brand")} </Form.Label>
        <Form.Control placeholder="Apple, Samsung..." />
      </Form.Group>

      <Form.Group className="m-3" controlId="wearableModel">
        <Form.Label> {t("model")} </Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group className="m-3" controlId="wearableYear">
        <Form.Label> {t("year")} </Form.Label>
        <Form.Control type="number" min="2010" max={new Date().getFullYear()} />
      </Form.Group>

      <Row className="m-2">
        <Col>
          <Form.Group controlId="wearableWidth">
            <Form.Label> {t("width")} </Form.Label>
            <Form.Control />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="wearableHeight">
            <Form.Label> {t("height")} </Form.Label>
            <Form.Control />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="wearableDepth">
            <Form.Label> {t("depth")} </Form.Label>
            <Form.Control />
          </Form.Group>
        </Col>
      </Row>
      <Form.Text className="text-muted m-3">
        {t("warning_dimensions")}
      </Form.Text>
    </Form>
  );
}
