const items: any[] = [];
import { MouseEvent } from "react";
const handleClick = (event: MouseEvent) => console.log(event);

const message =
  items.length === 0 ? <p onClick={handleClick}>No Items found</p> : null;

function ConditionalListGroup() {
  return (
    <>
      <div className="col p-5">
        <h2>Conditional List Group From an Empty Array</h2>
        {message}
        {/* or */}
        {items.length === 0 && <p onClick={handleClick}>No Items Found</p>}

        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className="list-group-item"
              key={item}
              onClick={() =>
                console.info(item + " of index " + index + " is clicked")
              }
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

export default ConditionalListGroup;
