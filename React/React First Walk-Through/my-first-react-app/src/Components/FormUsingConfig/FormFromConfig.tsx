import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import formConfig from "./formConfig.json"; // Import JSON config

const FormFromConfig = () => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [allChecked, setAllChecked] = useState(false);

  // Initialize form state
  useEffect(() => {
    const initialFormData: Record<string, any> = {};
    formConfig.formFields.forEach((field) => {
      initialFormData[field.name] =
        field.defaultValue || (field.type === "checkbox" ? false : "");
    });
    setFormData(initialFormData);
  }, []);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Validate and submit form
  const handleValidate = () => {
    const allTogglesChecked = formConfig.formFields
      .filter((field) => field.type === "checkbox")
      .every((field) => formData[field.name] === true);

    setAllChecked(allTogglesChecked);

    if (!allTogglesChecked) {
      toast.error("You are not eligible for Easy Registration.");
    } else {
      toast.success("Validation successful!");
    }
  };

  return (
    <div className="container bg-success mt-5">
      <div className="card p-4">
        <h3 className="mb-4">Easy Registration Form Using Config</h3>
        <form>
          {formConfig.formFields.map((field) => (
            <div className="mb-3" key={field.name}>
              {field.type === "checkbox" ? (
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={field.name}
                    name={field.name}
                    checked={formData[field.name] || false}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor={field.name}>
                    {field.label}
                  </label>
                </div>
              ) : (
                <>
                  <label className="form-label">
                    {field.label}{" "}
                    {field.required && <span className="text-danger">*</span>}
                  </label>
                  <input
                    type={field.type}
                    className="form-control"
                    name={field.name}
                    value={formData[field.name]}
                    readOnly={field.readOnly}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
          ))}

          <button
            type="button"
            className="btn btn-primary w-100 mt-3"
            onClick={handleValidate}
            disabled={!allChecked}
          >
            VALIDATE
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default FormFromConfig;
