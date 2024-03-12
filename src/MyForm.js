import { useState } from "react";

export default function MyForm() {
  const [formInps, setFormInps] = useState({userName:'', userEmail:''});

  return (
    <form onSubmit={(e)=>{e.preventDefault()}}>
      <input
        type="text"
        placeholder="name..."
        value={formInps.userName}
        onChange={(e) => {
          setFormInps({userName:e.target.value, userEmail:formInps.userEmail});
        }}
      />

      <input
        type="text"
        placeholder="email..."
        value={formInps.userEmail}
        onChange={(e) => {
          setFormInps({userEmail:e.target.value, userName:formInps.userName});
        }}
      />

      <button>Submit</button>
    </form>
  );
}
