import { Button, OverlayTrigger, Popover, ListGroup } from "react-bootstrap";
import { AiOutlineHistory } from "react-icons/ai";

function DeviceHistoryItems(props) {
  return (
    <ListGroup variant="flush">
      {props.deviceHistory.map((dev, index) => {
        var devJson = JSON.parse(dev);
        return (
          <ListGroup.Item
            key={"xd" + index}
            action
            onClick={() => {
              props.setFromDH(true);
              props.setSelectedDH(dev);
              props.f(dev);
            }}
          >
            {devJson.brand + " " + devJson.model}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export function DeviceHistory(props) {
  const popoverInfo = (
    <Popover id="popover-history">
      <Popover.Header as="h3">Device History</Popover.Header>
      <Popover.Body>
        <DeviceHistoryItems
          deviceHistory={props.deviceHistory}
          f={props.f}
          setFromDH={props.setFromDH}
          setSelectedDH={props.setSelectedDH}
        />
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverInfo}>
      <Button size="lg" variant="light">
        <AiOutlineHistory />
      </Button>
    </OverlayTrigger>
  );
}
