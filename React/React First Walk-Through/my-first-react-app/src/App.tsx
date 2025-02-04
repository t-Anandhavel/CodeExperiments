// import { useState } from "react";
import "./App.css";
import "./Components/Message";
import Message from "./Components/Message";
import ListGroup from "./Components/ListGroup";
import ListGroupFromList from "./Components/ListGroupFromList";
import ConditionalListGroup from "./Components/ConditionalListGroup";
import StateManagementInList from "./Components/StateManagementInList";
import RegistrationPage from "./Components/COJEZRegistraionValidation";
import ListFromProps from "./Components/ListFromProps";
import { ToastContainer, toast } from "react-toastify";
import { Alert } from "./Components/Alert";
import { ReusableBootstrapButton } from "./Components/ResuableBootstrapButton";

function App() {
  const items = [
    "India",
    "China",
    "Canada",
    "Australia",
    "Thailand",
    "Singapore",
    "Malasia",
    "Dubai",
    "Europe",
  ];

  function handleItemClick(item: string): void {
    toast.info("You have clicked on " + item);
  }

  return (
    <div className="text-primary mt-4">
      <center>
        <Message />
      </center>
      <div className="row">
        <ListGroup />
        <ListGroupFromList />
      </div>
      <div className="row">
        <ConditionalListGroup />
        <StateManagementInList />
      </div>
      <div className="row">
        <ListFromProps
          Items={items}
          Heading="Heading and Items parsed from props"
          OnSelectItem={handleItemClick}
        />
      </div>
      <Alert onClose={() => console.info("Alert's Close Button Clicked")}>
        Hello <span>World</span>
        <h3>!!</h3>
      </Alert>
      <ToastContainer />
      <RegistrationPage />
      <ReusableBootstrapButton color="secondary">
        MY Re-usable Button
      </ReusableBootstrapButton>
    </div>
  );
}

export default App;
