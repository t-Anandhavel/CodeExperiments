import { useState } from "react";

const items = [
  "India",
  "China",
  "Canada",
  "Australia",
  "Thailand",
  "Singapore",
  "Malaysia",
  "Dubai",
  "Europe",
];

function StateManagementInList() {
  // Correct placement of useState inside the component
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <div className="col p-5">
        <h3 className="text-wrap">
          State Management in the changing class name when List Item is clicked
        </h3>
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={index} // Use index as key instead of item
              onClick={() => setSelectedIndex(index)}
            >
              {item}
            </li>
            //add unique key to the li, otherwise you will get an console error
          ))}
        </ul>
      </div>
    </>
  );
}

export default StateManagementInList;
