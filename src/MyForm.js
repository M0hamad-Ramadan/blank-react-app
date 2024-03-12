import { useState } from "react";

export default function MyForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  return (
    <form onSubmit={(e)=>{e.preventDefault()}}>
      <input
        type="text"
        placeholder="name..."
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="email..."
        value={userEmail}
        onChange={(e) => {
          setuserEmail(e.target.value);
        }}
      />

      <button>Submit</button>
    </form>
  );
}
