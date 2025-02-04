import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationPage = () => {
  const [toggles, setToggles] = useState({
    reservedName: false,
    trn: false,
    drivingLicense: false,
    soleTrader: false,
  });

  const allChecked = Object.values(toggles).every(Boolean);

  const handleToggle = (field: keyof typeof toggles) => {
    setToggles((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleValidate = () => {
    if (!allChecked) {
      toast.error("You are not eligible for Easy Registration.");
    } else {
      toast.success("Validation successful!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h3 className="mb-4">Easy Registration</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">
              First Name: <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Last Name: <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Date of Birth: <span className="text-danger">*</span>
            </label>
            <input type="date" className="form-control" />
          </div>

          {(
            [
              { label: "Do you have a reserved name?", key: "reservedName" },
              {
                label:
                  "Do you have a valid Jamaican Tax Registration Number (TRN)?",
                key: "trn",
              },
              {
                label: "Do you have a valid Jamaican Driving License?",
                key: "drivingLicense",
              },
              { label: "Is this sole Trader/Proprietor?", key: "soleTrader" },
            ] as const
          ).map(({ label, key }) => (
            <div className="form-check form-switch mb-3" key={key}>
              <input
                className="form-check-input"
                type="checkbox"
                id={key}
                checked={toggles[key]}
                onChange={() => handleToggle(key)}
              />
              <label className="form-check-label" htmlFor={key}>
                {label}
              </label>
            </div>
          ))}

          <button
            type="button"
            className="btn btn-primary w-100 mt-3"
            onClick={handleValidate}
            // disabled={!allChecked}
          >
            VALIDATE
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default RegistrationPage;
