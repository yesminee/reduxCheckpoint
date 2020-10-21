import React from "react";
import AddTask from "./Components/addTask";
import ListTask from "./Components/listTask";

function App() {
  return (
    <div className="container">
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;