import { useState } from "react";

const MyForm = () => {
  const [myFormData, setNewState] = useState({ status: "" });

  function handleSelect(e){
    setNewState(myFormData.status = {...myFormData, status: e.target.value}) 
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(myFormData);
      }}>
      
      <select value={myFormData.status} onChange={handleSelect}>
        <option>Html</option>
        <option>css</option>
        <option>js</option>
        <option>svg</option>
      </select>

      <br></br>
      <br></br>
      <button>Submit</button>
    </form>
  );
};

export default MyForm;
