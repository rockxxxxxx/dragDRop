import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Draggable from "react-draggable";
import { DragDrop } from "../../contextApi/dragDropContext";

export default function Right() {
  const {
    table,
    setTable,
    chart,
    setChart,
    bar,
    setBar,
    test,
    setTest,
    blankComponent,
    setBlankComponent,
  } = useContext(DragDrop);
  return (
    <Col>
      <div
        style={{ backgroundColor: "white", height: "90vh" }}
        className="card"
      >
        <div className="card-container">
          <ButtonGroup
            aria-label="Basic example"
            style={{ marginBottom: "25px" }}
          >
            <Button className="active" variant="secondary">
              Components
            </Button>
            <Button variant="secondary">Charts</Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            {!bar && (
              <Draggable axis="x" onStop={() => setBar(true)}>
                <Button
                  variant="outline-success"
                  size="md"
                  style={{ textAlign: "left" }}
                >
                  Bar Graph
                </Button>
              </Draggable>
            )}
            <Button
              variant="outline-success"
              size="md"
              style={{ textAlign: "left" }}
            >
              Row
            </Button>
            {!chart && (
              <Draggable onStop={() => setChart(true)}>
                <Button
                  variant="outline-success"
                  size="md"
                  style={{ textAlign: "left" }}
                >
                  Chart Graph
                </Button>
              </Draggable>
            )}
            <Button
              variant="outline-success"
              size="md"
              style={{ textAlign: "left" }}
            >
              Header
            </Button>
            <Button
              variant="outline-success"
              size="md"
              style={{ textAlign: "left" }}
            >
              Markdown
            </Button>
            <Button
              variant="outline-success"
              size="md"
              style={{ textAlign: "left" }}
            >
              Divider
            </Button>
            {!table && (
              <Draggable
                onStop={() => setTable(true)}
                defaultPosition={{ x: 0, y: 0 }}
              >
                <Button
                  variant="outline-success"
                  size="md"
                  style={{ textAlign: "left" }}
                >
                  Table
                </Button>
              </Draggable>
            )}
            <Button
              variant="outline-success"
              size="md"
              style={{ textAlign: "left" }}
            >
              Process Diagram
            </Button>
            <Button
              variant="outline-success"
              size="md"
              style={{ textAlign: "left" }}
            >
              Trigger Flow
            </Button>
            {!test && (
              <Draggable
                onStop={() => setTest(true)}
                defaultPosition={{ x: 0, y: 0 }}
              >
                <Button
                  variant="outline-success"
                  size="md"
                  style={{ textAlign: "left" }}
                >
                  Title
                </Button>
              </Draggable>
            )}
            {!blankComponent && (
              <Draggable
                onStop={() => setBlankComponent(true)}
                defaultPosition={{ x: 0, y: 0 }}
              >
                <Button
                  variant="outline-success"
                  size="md"
                  style={{ textAlign: "left" }}
                >
                  BlankComponent
                </Button>
              </Draggable>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
}
