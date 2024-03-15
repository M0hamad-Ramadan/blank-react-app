import { useState } from "react";

const MyForm = () => {
  const [myFormData, setNewState] = useState({ name: "", email: "", peo: "" });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(myFormData);
      }}>
      <div>
        <label>name:</label>
        <input
          type="text"
          value={myFormData.name}
          onChange={(e) => {
            setNewState({ ...myFormData, name: e.target.value });
          }}
        />
      </div>

      <div>
        <label>email:</label>
        <input
          type="text"
          value={myFormData.email}
          onChange={(e) => {
            setNewState({ ...myFormData, email: e.target.value });
          }}
        />
      </div>

      <div>
        <label>Peo:</label>
        <textarea
          type="text"
          value={myFormData.peo}
          onChange={(e) => {
            setNewState({ ...myFormData, peo: e.target.value });
          }}
        />
      </div>

      <button>Submit</button>
    </form>
  );
};

export default MyForm;
