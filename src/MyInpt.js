import { useState } from "react";

export default function MyInpt() {
  const [myInpValue, setInpValue] = useState("");

  function handleInpChange(e) {
    setInpValue(e.currentTarget.value);
  }
  return (
    <div>
      <label>Your Name:</label>
      <input type="text" onChange={handleInpChange} value={myInpValue} />
    </div>
  );
}
