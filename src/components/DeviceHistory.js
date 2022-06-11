import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { AiOutlineHistory } from "react-icons/ai";

export function DeviceHistory(props) {
  const popoverInfo = (
    <Popover id={`popover-`}>
      <Popover.Header as="h3">title</Popover.Header>
      <Popover.Body>{props.deviceHistory}</Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="top" overlay={popoverInfo}>
      <Button size="lg">
        <AiOutlineHistory />
      </Button>
    </OverlayTrigger>
  );
}
