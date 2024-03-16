import { useState } from "react";

const MyForm = () => {
  const [myFormData, setNewState] = useState({ status: "" });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(myFormData);
      }}>
      <div className="inp-group">
        <p>Please select Web language:</p>
        <input
          type="radio"
          name="status"
          value="HTML"
          checked={myFormData.status === "HTML"}
          onChange={(e) => {
            setNewState({ ...myFormData, status: e.target.value });
          }}
        />
        &nbsp; <label htmlFor="html">HTML</label>
        <br />
        <input
          type="radio"
          name="status"
          value="CSS"
          checked={myFormData.status === "CSS"}
          onChange={(e) => {
            setNewState({ ...myFormData, status: e.target.value });
          }}
        />
        &nbsp; <label htmlFor="css">CSS</label>
        <br />
        <input
          type="radio"
          name="status"
          value="JavaScript"
          checked={myFormData.status === "JavaScript"}
          onChange={(e) => {
            setNewState({ ...myFormData, status: e.target.value });
          }}
        />
        &nbsp; <label htmlFor="javascript">JavaScript</label>
      </div>

      <br></br>
      <br></br>
      <button>Submit</button>
    </form>
  );
};

export default MyForm;
