import React from "react";
import Tabledata from "./components/TableData";
import { Data } from "../src/components/json_file/mdata";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Tabledata data={Data} />
    </div>
  );
}

export default App;
