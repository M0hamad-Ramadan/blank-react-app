import { useState } from "react";

export default function MyForm() {
  const [formInps, setFormInps] = useState({ userName: "", userEmail: "" });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <input
        type="text"
        placeholder="name..."
        value={formInps.userName}
        onChange={(e) => {
          setFormInps({ ...formInps, userName: e.target.value });
        }}
      />


      <input
        type="text"
        placeholder="email...."
        value={formInps.userEmail}
        onChange={(e) => {
          setFormInps({ ...formInps, userEmail: e.target.value });
        }}
      />

      <button>Submit</button>
    </form>
  );
}
