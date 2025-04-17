import React, { useState } from "react";

export default function Onchange() {
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <div>
      <h1>Welcome to my website</h1>
      <h3>Example for React onChange Event Handler</h3>
      <select value={value} onChange={handleChange}>
        <option value={"HTML"}>HTML</option>
        <option value={"CSS"}>CSS</option>
        <option value={"JavaScript"}>JavaScript</option>
      </select>
      <br/>
      <div>User Input: {value}</div>
    </div>



    // // Sample 1
    // <div style={{ textAlign: "center", margin: "auto" }}>
    //   <h1 style={{ color: "Green" }}>GeeksforGeeks</h1>
    //   <h3>Exemple for React onChange Event Handler</h3>
    //   <input value={value} onChange={handleChange} />
    //   <br />
    //   <div>User Input:- {value}</div>
    // </div>
  );
}
