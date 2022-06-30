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
    switch (props.deviceType) {
      case "Smartphone":
        var yearElement = document.getElementById("smartphoneYear");

        if (yearElement == null) return 1;

        var year = yearElement.value;

        if (year == "") year = 2015;
        else year = parseFloat(year);

        var deltaYear = 2015 - year;

        if (deltaYear > 5) deltaYear = 5;
        else if (deltaYear < -5) deltaYear = -5;

        var res =
          deltaYear < 0
            ? 1 - (0.5 * -deltaYear) / 5
            : 1 + (0.5 * deltaYear) / 5;

        var w = document.getElementById("smartphoneWidth");
        var h = document.getElementById("smartphoneHeight");
        var d = document.getElementById("smartphoneDepth");

        if (w == null || h == null || d == null) return res;
        if (w.value == "" || h.value == "" || d.value == "") return res;

        res = w.value * h.value * d.value > 100 ? res * 1.05 : res;

        return res;

      case "Wearable":
        var yearElement = document.getElementById("wearableYear");

        if (yearElement == null) return 1;

        var year = yearElement.value;

        if (year == "") year = 2015;
        else year = parseFloat(year);

        var deltaYear = 2015 - year;

        if (deltaYear > 5) deltaYear = 5;
        else if (deltaYear < -5) deltaYear = -5;

        var res =
          deltaYear < 0
            ? 1 - (0.5 * -deltaYear) / 5
            : 1 + (0.5 * deltaYear) / 5;

        var w = document.getElementById("wearableWidth");
        var h = document.getElementById("wearableHeight");
        var d = document.getElementById("wearableDepth");

        if (w == null || h == null || d == null) return res;
        if (w.value == "" || h.value == "" || d.value == "") return res;

        res = w.value * h.value * d.value > 50 ? res * 1.05 : res;
        return res;

      case "Desktop PC":
        var yearElement = document.getElementById("desktopPCYear");

        if (yearElement == null) return 1;

        var year = yearElement.value;

        if (year == "") year = 2015;
        else year = parseFloat(year);

        var deltaYear = 2015 - year;

        if (deltaYear > 5) deltaYear = 5;
        else if (deltaYear < -5) deltaYear = -5;

        var res =
          deltaYear < 0
            ? 1 - (0.5 * -deltaYear) / 5
            : 1 + (0.5 * deltaYear) / 5;

        var gpu = document.getElementById("desktopPCGPU");

        if (gpu == null) return res;

        res = gpu.checked ? res * 1.2 : res;

        return res;

      case "Laptop":
        var yearElement = document.getElementById("laptopYear");

        if (yearElement == null) return 1;

        var year = yearElement.value;

        if (year == "") year = 2015;
        else year = parseFloat(year);

        var deltaYear = 2015 - year;

        if (deltaYear > 5) deltaYear = 5;
        else if (deltaYear < -5) deltaYear = -5;

        var res =
          deltaYear < 0
            ? 1 - (0.5 * -deltaYear) / 5
            : 1 + (0.5 * deltaYear) / 5;

        var gpu = document.getElementById("laptopGPU");

        if (gpu == null) return res;

        res = gpu.checked ? res * 1.2 : res;

        return res;
    }
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
