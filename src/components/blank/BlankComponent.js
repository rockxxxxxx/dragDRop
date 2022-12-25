import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import Draggable from "react-draggable";
import { DragDrop } from "../../contextApi/dragDropContext";
import Test from "../test/Test";

export default function BlankComponent() {
  const { test, bar, chart, blankComponent } = useContext(DragDrop);
  return (
    <Card
      style={{
        height: "300px",
        overflow: "auto",
      }}
    >
      <Card.Header>
        <Draggable bounds={{ left: 0, top: 0, right: 200, bottom: 0 }}>
          <h5
            contentEditable={true}
            style={{ cursor: "pointer", display: "inline-block" }}
          >
            {test && <Test />}
          </h5>
        </Draggable>
      </Card.Header>

      <Draggable>
        <Card.Body>
          kdjkf
          <hr />
        </Card.Body>
      </Draggable>
    </Card>
  );
}
