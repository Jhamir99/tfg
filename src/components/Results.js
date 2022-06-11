import { t } from "i18next";
import {
  Row,
  Col,
  Button,
  ListGroup,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import { IoInformationCircleOutline } from "react-icons/io5";
import {
  collpaseSize,
  resultValuesSmartphone,
  resultValuesDesktopPC,
  resultValuesLaptop,
  resultValuesWearable,
} from "../utilities/Constants";


export function Results(props) {
  function calculateResults() {
    var yearElement = document.getElementById("smartphoneYear");

    if (yearElement == null) return 1;

    var year = yearElement.value;

    if (year == "") return 1;
    else year = parseFloat(year);

    var deltaYear = 2015 - year;

    if (deltaYear > 10) deltaYear = 10;
    else if (deltaYear < -5) deltaYear = -5;

    const res = deltaYear < 0 ? 1 - 0.025 * -deltaYear : 1 + 0.025 * deltaYear;
    return res;
  }

  function resultTitle(title) {
    var res = "";
    if (title == "Production") res = t("production");
    else if (title == "Use") res = t("use");

    return <ListGroup.Item key={title}>{res}</ListGroup.Item>;
  }

  function ResultItem(props) {
    const popoverInfo = (
      <Popover id={`popover-${props.name}`}>
        <Popover.Header as="h3">{props.title}</Popover.Header>
        <Popover.Body>{t(props.name + "_info")}</Popover.Body>
      </Popover>
    );

    return (
      <>
        {props.name == "co2" && resultTitle("Production")}
        {props.name == "co2Use" && resultTitle("Use")}
        <ListGroup.Item key={props.name} variant={props.variant}>
          <Row>
            <Col className="align-self-center">{props.title}:</Col>
            <Col>
              <Row>
                <Col className="align-self-center col-7">
                  {(parseFloat(props.value) * calculateResults()).toFixed(2) +
                    " " +
                    props.unit.replace(/(<([^>]+)>)/gi, "")}
                </Col>
                <Col className="d-flex justify-content-end align-self-center">
                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    overlay={popoverInfo}
                  >
                    <Button size="sm" variant={`outline-${props.variant}`}>
                      <IoInformationCircleOutline />
                    </Button>
                  </OverlayTrigger>
                </Col>
              </Row>
            </Col>
          </Row>
        </ListGroup.Item>
      </>
    );
  }

  return (
    <ListGroup className={`m-${collpaseSize}-3`}>
      {props.deviceType == "Smartphone" &&
        resultValuesSmartphone.map(
          ({ name, title, variant, info, value, unit }) => (
            <ResultItem
              name={name}
              title={title}
              variant={variant}
              value={value}
              unit={unit}
              info={info}
            />
          )
        )}
      {props.deviceType == "Desktop PC" &&
        resultValuesDesktopPC.map(
          ({ name, title, variant, value, unit, info }) => (
            <ResultItem
              name={name}
              title={title}
              variant={variant}
              value={value}
              unit={unit}
              info={info}
            />
          )
        )}
      {props.deviceType == "Laptop" &&
        resultValuesLaptop.map(
          ({ name, title, variant, value, unit, info }) => (
            <ResultItem
              name={name}
              title={title}
              variant={variant}
              value={value}
              unit={unit}
              info={info}
            />
          )
        )}
      {props.deviceType == "Wearable" &&
        resultValuesWearable.map(
          ({ name, title, variant, value, unit, info }) => (
            <ResultItem
              name={name}
              title={title}
              variant={variant}
              value={value}
              unit={unit}
              info={info}
            />
          )
        )}
    </ListGroup>
  );
}
