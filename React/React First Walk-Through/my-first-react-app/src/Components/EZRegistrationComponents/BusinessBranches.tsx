import { useState } from "react";

type BussinessBranchesProps = {
  updateProgress?(id?: string, progress?: number): void;
};

const BussinessBranches = (props: BussinessBranchesProps) => {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
  });

  const { updateProgress } = props;

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const answered = Object.values(answers).filter((val) => val !== "").length;
    const percentage = (answered / 5) * 100;
    updateProgress && updateProgress("tab2", percentage);
  };

  return (
    <div>
      <h3>Business Branchess</h3>
      <input
        type="text"
        name="q1"
        onChange={handleChange}
        placeholder="Question 1"
      />
      <input
        type="text"
        name="q2"
        onChange={handleChange}
        placeholder="Question 2"
      />
      <input
        type="text"
        name="q3"
        onChange={handleChange}
        placeholder="Question 3"
      />
      <input
        type="text"
        name="q4"
        onChange={handleChange}
        placeholder="Question 4"
      />
      <input
        type="text"
        name="q5"
        onChange={handleChange}
        placeholder="Question 5"
      />
      <input
        type="text"
        name="q6"
        onChange={handleChange}
        placeholder="Question 6"
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default BussinessBranches;
