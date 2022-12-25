import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { DragDrop } from "../../contextApi/dragDropContext";

export default function Test() {
  const { test, seTest } = useContext(DragDrop);
  return <h3>Title</h3>;
}
