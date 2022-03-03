import React, { useState } from "react"
import data from "./Data"

function App() {

  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const  handleSubmit = (e) => {
    e.preventDefault();

    setText(data)
    console.log(text)
  }

  return (
    <div>
        <h1>
          Lorem Ipsum Generator
        </h1>
        <form onSubmit={handleSubmit}>
          <span>Paragraphs: </span>
          <input type="number" value={count} onChange={(e) => { setCount(e.target.value) }} />
          <button type="submit">GENERATE</button>
        </form>
        <div>{text.map((item, index) => {

          return(
            <p key={index}>{item}</p>
          )
        })}</div>
    </div>
  );
}

export default App;
