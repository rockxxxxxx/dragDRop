import React, { useState } from "react";
import { TableControl } from "react-bootstrap-table-control";
import Card from "react-bootstrap/Card";
import Draggable from "react-draggable";

export default function () {
  const [tableData, setTableData] = useState([]);
  const AddNewData = () => {
    setTableData([
      ...tableData,
      {
        id: tableData.length + 1,
        name: `Name${tableData.length + 1}`,
        description: `Description${tableData.length + 1}`,
      },
    ]);
  };

  return (
    <Card style={{ height: "300px", overflow: "auto" }}>
      <Card.Header>
        <div className="card-header d-flex justify-content-between align-items-center">
          <Draggable bounds={{ left: 0, top: 0, right: 270, bottom: 50 }}>
            <h5>Table</h5>
          </Draggable>
          <Draggable
            bounds={{ left: -290, top: 0, right: 0, bottom: 250 }}
            onDrag={(event) => event.stopPropagation()}
            onStart={(event) => event.stopPropagation()}
            onStop={(event) => event.stopPropagation()}
            onMouseDown={(event) => event.stopPropagation()}
            onMouseUp={(event) => event.stopPropagation()}
            onTouchStart={(event) => event.stopPropagation()}
            onTouchEnd={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={() => AddNewData()}
            >
              Add
            </button>
          </Draggable>
        </div>
      </Card.Header>
      <Card.Body>
        <TableControl
          header={[
            { key: "id", name: "#" },
            { key: "name", name: "Name" },
            { key: "description", name: "Description" },
          ]}
          itens={tableData}
        />
      </Card.Body>
    </Card>
  );
}
