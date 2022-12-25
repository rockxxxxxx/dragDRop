import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "../table/Table";
import { CChart } from "@coreui/react-chartjs";
import Chart from "../chart/Chart";
import BarChart from "../bar/BarChart";
import { DragDrop } from "../../contextApi/dragDropContext";
import Test from "../test/Test";
import BlankComponent from "../blank/BlankComponent";

export default function Mid() {
  const {
    table,
    setTable,
    chart,
    setChart,
    bar,
    setBar,
    test,
    blankComponent,
    setBlankComponent,
  } = useContext(DragDrop);
  return (
    <Col xs={7} style={{ marginTop: "40px" }}>
      <Row xs={1} md={2}>
        {table && (
          <Col style={{ marginBottom: "20px" }}>
            <Table />
          </Col>
        )}
        {chart && (
          <Col style={{ marginBottom: "20px" }}>
            <Chart />
          </Col>
        )}

        {bar && (
          <Col style={{ marginBottom: "20px" }}>
            <BarChart />
          </Col>
        )}

        {blankComponent && (
          <Col style={{ marginBottom: "20px" }}>
            <BlankComponent />
          </Col>
        )}
      </Row>
    </Col>
  );
}
