import { useState } from "react";

const MyForm = () => {
  const [myFormData, setNewState] = useState({
    name: "",
    email: "",
    peo: "",
    male: false,
    fmale: false,
    lang: "",
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
          defaultValue={myFormData.name}
          onChange={(e) => {
            setNewState({ ...myFormData, name: e.target.value });
          }}
        />
      </div>

      <div className="inp-group">
        <label>email:</label>
        <input
          type="text"
          defaultValue={myFormData.email}
          onChange={(e) => {
            setNewState({ ...myFormData, email: e.target.value });
          }}
        />
      </div>

      <div className="inp-group">
        <label>Peo:</label>
        <textarea
          type="text"
          defaultValue={myFormData.peo}
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

      <div className="inp-group">
        <p>Please select Web language:</p>
        <input
          type="radio"
          name="fav_language"
          value="HTML"
          onChange={(e) => {
            setNewState({ ...myFormData, lang: e.target.value });
          }}
        />
        &nbsp; <label htmlFor="html">HTML</label>
        <br />
        <input
          type="radio"
          name="fav_language"
          value="CSS"
          onChange={(e) => {
            setNewState({ ...myFormData, lang: e.target.value });
          }}
        />
        &nbsp; <label htmlFor="css">CSS</label>
        <br />
        <input
          type="radio"
          name="fav_language"
          value="JavaScript"
          onChange={(e) => {
            setNewState({ ...myFormData, lang: e.target.value });
          }}
        />
        &nbsp; <label htmlFor="javascript">JavaScript</label>
      </div>

      <button>Submit</button>
    </form>
  );
};

export default MyForm;
