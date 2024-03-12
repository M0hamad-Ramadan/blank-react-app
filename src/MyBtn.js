import { useState } from "react";

export default function MyBtn() {
  const [name, setName] = useState("mohammed");
  
  function changeName() {
    name === "mohammed" ? setName("omar") : setName("mohammed");
  }

  return (
    <>
      <button onClick={changeName}>change name</button>
      <h1>{name}</h1>
    </>
  );
}
