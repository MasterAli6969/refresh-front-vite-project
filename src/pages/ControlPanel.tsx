import { FC, useRef } from "react";
import Draggable from "react-draggable";

const ControlPanel: FC = () => {
  const panelRef = useRef(null);

  return (
    <div
      ref={panelRef}
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        border: "1px solid black",
      }}
    >
      <Draggable bounds="parent" grid={[50, 50]}>
        <div
          style={{ width: "50px", height: "50px", backgroundColor: "red" }}
        />
      </Draggable>
      <Draggable bounds="parent" grid={[50, 50]}>
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "blue",
            position: "absolute",
            top: "100px",
            left: "100px",
          }}
        />
      </Draggable>
    </div>
  );
};

export default ControlPanel;
