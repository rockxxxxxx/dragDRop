import { createContext, useState } from "react";

export const DragDrop = createContext({
  table: false,
  setTable: () => {},
  chart: false,
  setChart: () => {},
  bar: false,
  setBar: () => {},
  test: false,
  setTest: () => {},
  blankComponent: false,
  setBlankComponent: () => {},
});

export const DragDropProvider = ({ children }) => {
  const [table, setTable] = useState(false);
  const [chart, setChart] = useState(false);
  const [bar, setBar] = useState(false);
  const [test, setTest] = useState(false);
  const [blankComponent, setBlankComponent] = useState(false);
  const value = {
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
  };
  return <DragDrop.Provider value={value}>{children}</DragDrop.Provider>;
};
