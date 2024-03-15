import { useState } from "react";

const MyForm = () => {
  const [myFormData, setNewState] = useState({
    name: "",
    email: "",
    peo: "",
    male: false,
    fmale: false,
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(myFormData);
      }}>
      <div className="inp-group">
        <label>name:</label>
        <input
          type="text"
          value={myFormData.name}
          onChange={(e) => {
            setNewState({ ...myFormData, name: e.target.value });
          }}
        />
      </div>

      <div className="inp-group">
        <label>email:</label>
        <input
          type="text"
          value={myFormData.email}
          onChange={(e) => {
            setNewState({ ...myFormData, email: e.target.value });
          }}
        />
      </div>

      <div className="inp-group">
        <label>Peo:</label>
        <textarea
          type="text"
          value={myFormData.peo}
          onChange={(e) => {
            setNewState({ ...myFormData, peo: e.target.value });
          }}
        />
      </div>

      <div className="inp-group">
        <label>male:</label>
        <input
          type="checkbox"
          checked={myFormData.male}
          onChange={(e) => {
            setNewState({ ...myFormData, male: e.target.checked });
          }}
        />
      </div>

      <div className="inp-group">
        <label>fmale:</label>
        <input
          type="checkbox"
          checked={myFormData.fmale}
          onChange={(e) => {
            setNewState({ ...myFormData, fmale: e.target.checked });
          }}
        />
      </div>

      <button>Submit</button>
    </form>
  );
};

export default MyForm;
