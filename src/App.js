import React, { useState } from "react"
import data from "./Data"

function App() {

  const [count, setCount] = useState(0)
  const [text, setText] = useState([])



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

    </div>
  );
}

export default App;
