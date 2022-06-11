import { COLORS } from "../utilities/Constants";
import { Row, Col, Button } from "react-bootstrap";
import { t } from "i18next";

function getTitle(deviceName, t) {
  switch (deviceName) {
    case "Desktop PC":
      return t("desktop_pc");

    case "Laptop":
      return t("laptop");

    default:
      return deviceName;
  }
}

export function DeviceButton(props) {
  return (
    <Button
      style={{
        paddingTop: "30px",
        background: COLORS.primary,
        minWidth: "150px",
        minHeight: "150px",
        marginBottom: "30px",
      }}
      onClick={() => {
        props.handleShowModal();
        props.setDeviceType(props.DeviceName);
        props.handleHideResults();
      }}
    >
      <Row>
        <Col>{props.DeviceIcon}</Col>
      </Row>
      <Row>
        <Col>
          <div style={{ padding: "20px", background: COLORS.primary }}>
            {getTitle(props.DeviceName, t)}
          </div>
        </Col>
      </Row>
    </Button>
  );
}
