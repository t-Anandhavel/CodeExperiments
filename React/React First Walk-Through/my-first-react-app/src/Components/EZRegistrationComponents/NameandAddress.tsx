import { useState } from "react";

type Props = {
  updateProgress: (id: string, progress: number) => void;
};

const NameandAddress = ({ updateProgress }: Props) => {
  const [answers, setAnswers] = useState<Record<string, string>>({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const answeredCount = Object.values(answers).filter(
      (val) => val.trim() !== ""
    ).length;
    updateProgress("tab1", (answeredCount / 5) * 100);
  };

  return (
    <div>
      <h3>Name and Address</h3>
      {Array.from({ length: 5 }, (_, i) => (
        <input
          key={i}
          type="text"
          name={`q${i + 1}`}
          onChange={handleChange}
          placeholder={`Question ${i + 1}`}
        />
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default NameandAddress;
