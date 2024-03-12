import { useState } from "react";

export default function MyBtn() {
  console.log('render');
  const state = useState("mohammed");
  const value = state[0];
  const setValue = state[1];

 function btnClicked() {
    setValue('omar')
  }

  return (
    <>
      <button onClick={btnClicked}>change name</button>
      <h1>{value}</h1>
    </>
  );
}
