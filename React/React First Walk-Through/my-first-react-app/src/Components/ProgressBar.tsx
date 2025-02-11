// ProgressBar.tsx
import React from "react";

interface ProgressBarProps {
  name: string;
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ name }) => {
  return (
    <div className="mb-3">
      <label>{name} Content Goes here</label>
    </div>
  );
};

export default ProgressBar;
