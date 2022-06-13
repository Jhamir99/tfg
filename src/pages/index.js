import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { devices } from "../utilities/Constants";
import { useState } from "react";
import {
  LaptopModalBody,
  SmartphoneModalBody,
  DesktopPCModalBody,
  WearableModalBody,
} from "../components/ModalBodies";
import { DeviceButton } from "../components/DeviceButton";
import { Results } from "../components/Results";
import { DeviceHistory } from "../components/DeviceHistory";
import "./styles/index.css";
import { t } from "i18next";

function getDeviceInfo(deviceType) {
  switch (deviceType) {
    case "Smartphone":
      var brandSmartphone = document.getElementById("smartphoneBrand").value;
      var modelSmartphone = document.getElementById("smartphoneModel").value;
      var yearSmartphone = document.getElementById("smartphoneYear").value;
      return JSON.stringify({
        type: "Smartphone",
        brand: brandSmartphone,
        model: modelSmartphone,
        year: yearSmartphone,
      });

    case "Laptop":
      return {};

    case "Desktop PC":
      return {};

    case "Wearable":
      var nameWearable = document.getElementById("smartphoneName").value;
      var modelWearable = document.getElementById("smartphoneModel").value;
      var yearWearable = document.getElementById("smartphoneYear").value;
      return JSON.stringify({
        brand: nameWearable,
        model: modelWearable,
        year: yearWearable,
      });
  }
}

function DeviceForm(props) {
  switch (props.deviceType) {
    case "Smartphone":
      return <SmartphoneModalBody />;

    case "Laptop":
      return <LaptopModalBody />;

    case "Desktop PC":
      return <DesktopPCModalBody />;

    case "Wearable":
      return <WearableModalBody />;
  }
}

function ConfigModal(props) {
  return (
    <Modal
      show={props.showModal}
      onHide={props.handleCloseModal}
      onShow={() => {
        if (props.fromDH == true) {
          var json = JSON.parse(props.selectedDH);
          document.getElementById("smartphoneBrand").value = json.brand;
          document.getElementById("smartphoneModel").value = json.model;
          document.getElementById("modal-button").click();
        }
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add info about your device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DeviceForm deviceType={props.deviceType} />
      </Modal.Body>
      <Modal.Footer>
        <Button
          id="modal-button"
          onClick={() => {
            if (props.fromDH == true) {
              props.setFromDH(false);
            }
            props.addDeviceToDeviceHistory(getDeviceInfo(props.deviceType));
            props.handleCloseModal();
            props.handleShowResults();
          }}
        >
          {t("add")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const [showResults, setShowResults] = useState(false);
  const handleHideResults = () => setShowResults(false);
  const handleShowResults = () => setShowResults(true);

  const [deviceType, setDeviceType] = useState("");

  const [deviceHistory, setdeviceHistory] = useState([]);

  const [fromDH, setFromDH] = useState(false);
  const [selectedDH, setSelectedDH] = useState("");

  function addDeviceToDeviceHistory(device) {
    if (deviceHistory.find((d) => d == device)) return;
    if (deviceHistory.length == 5) deviceHistory.pop();
    setdeviceHistory([device, ...deviceHistory]);
  }

  const f = function viewHistoryDeviceResults(dev) {
    var json = JSON.parse(dev);
    setDeviceType(json.type);
    handleShowModal();
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>{t("main_title")}</h1>
        </Col>
      </Row>
      <Row className="align-items-end">
        <Col className="col-10">
          <h2>{t("sub_title")}</h2>
        </Col>
        <Col>
          {deviceHistory.length != 0 && (
            <DeviceHistory
              deviceHistory={deviceHistory}
              f={f}
              setFromDH={setFromDH}
              setSelectedDH={setSelectedDH}
            />
          )}
        </Col>
      </Row>
      <Row style={{ margin: "20px" }}>
        <Col>
          <Row className="row-cols-2">
            {devices.map(({ name, icon }) => (
              <Col key={name} className="my-3 d-flex justify-content-center">
                <DeviceButton
                  DeviceName={name}
                  DeviceIcon={icon}
                  handleShowModal={handleShowModal}
                  setDeviceType={setDeviceType}
                  handleHideResults={handleHideResults}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <div className="w-100 d-lg-none d-block"></div>
        <Col>
          {showResults ? <Results deviceType={deviceType} /> : t("no_results")}
        </Col>
      </Row>
      <ConfigModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleShowModal={handleShowModal}
        handleShowResults={handleShowResults}
        deviceType={deviceType}
        addDeviceToDeviceHistory={addDeviceToDeviceHistory}
        setFromDH={setFromDH}
        fromDH={fromDH}
        selectedDH={selectedDH}
      />
    </Container>
  );
};

export default Home;
