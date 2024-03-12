import { useState } from "react";

let name = "mohammed";
export default function MyBtn() {
  console.log('render');
  const state = useState("mohammed");
  const value = state[0];
  const setValue = state[1];
  console.log(value);
  console.log(setValue);
  
  return (
    <>
      <button onClick={btnClicked}>change name</button>
      <h1>{name}</h1>
    </>
  );
}

function btnClicked() {
  name = "omar";

}
