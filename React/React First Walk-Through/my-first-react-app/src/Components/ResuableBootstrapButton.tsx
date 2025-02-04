import { useState } from "react";
import { Alert } from "./Alert";

interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "danger" | "warning" | "info";
}

export const ReusableBootstrapButton = ({
  children,
  color = "primary",
}: ButtonProps) => {
  const [AlertVisibility, SetAlertVisibility] = useState(false);

  return (
    <>
      <center>
        {AlertVisibility && <Alert onClose={()=> SetAlertVisibility(false)}>You have Clicked the Button</Alert>}
        <button
          type="button"
          role="button"
          className={"my-4 btn btn-" + color}
          onClick={() => SetAlertVisibility(true)}
        >
          {children}
        </button>
      </center>
    </>
  );
};
