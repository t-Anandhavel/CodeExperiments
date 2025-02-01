// import { useState } from "react";
import "./App.css";
import "./Components/Message";
import Message from "./Components/Message";
import ListGroup from "./Components/ListGroup";
import ListGroupFromList from "./Components/ListGroupFromList";
import ConditionalListGroup from "./Components/ConditionalListGroup";

function App() {
  return (
    <div className="text-primary mt-4">
      <center>
        <Message />
      </center>
      <div className="row">
        <ListGroup />
        <ListGroupFromList />
        <ConditionalListGroup />
      </div>
    </div>
  );
}

export default App;
