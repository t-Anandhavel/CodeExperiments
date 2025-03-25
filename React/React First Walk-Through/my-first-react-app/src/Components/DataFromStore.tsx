import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";

const DataFromStore = () => {
  const storevalues = useStoreState((asdf: any) => asdf);
  const [localvalues, setLocalValues] = useState(storevalues);
  const SetStateValues = useStoreActions(
    (actions: any) => actions.UpdateValues
  );

  return (
    <div className="my-5">
      <h1>Data from store</h1>
      <h2>{storevalues.name}</h2>
      <h3>{storevalues.age}</h3>
      {/* Add a fallback in case the property is undefined */}

      <div className="form-group d-flex">
        <input
          type="text"
          value={localvalues.name}
          onChange={(e) =>
            setLocalValues({ ...localvalues, name: e.target.value })
          }
          placeholder="Enter your name"
          className="form-control d-flex w-auto"
        />
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => SetStateValues({ ...localvalues })}
        >
          Update Name
        </button>
      </div>
    </div>
  );
};

export default DataFromStore;
