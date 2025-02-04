import { useState } from "react";

interface ListItemProps {
  Items: string[];
  Heading: string;
  OnSelectItem: (item: string) => void;
}

// export default function ListFromProps({Items, Heading, OnSelectItem}: ListItemProps) {
export default function ListFromProps(props: ListItemProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <div className="col p-5">
        {/* <h2>{Heading}</h2> */}
        <h2>{props.Heading}</h2>
        <ul className="list-group">
          {props.Items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                console.info(item + " of index " + index + " is clicked");
                setSelectedIndex(index);
                props.OnSelectItem(item);
              }}
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
