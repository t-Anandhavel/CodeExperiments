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

function ListGroupFromList() {
  return (
    <>
      <div className="col p-5">
        <h2>List Group From an Array</h2>
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

export default ListGroupFromList;
