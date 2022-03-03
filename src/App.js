import React, { useState } from "react"
import data from "./Data"

function App() {

  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const  handleSubmit = (e) => {
    e.preventDefault();

    // changes the string to number 
    let amount = parseInt(count)

    // making sure the page displays at least 1 paragraph of lorem ipsum and no more than the maximum of 8 paragraph as there are only 8 arrays in the data  
    if(count <= 0){
      amount = 1
    }
    if(count > 8){
      amount = 8
    }

    // setting the state of text to an array of given numbers of data
    setText(data.slice(0, amount))
  }

  return (
    <div>
        <h1>
          Lorem Ipsum Generator
        </h1>
        <form onSubmit={handleSubmit}>
          <span>Paragraphs: </span>
          {/* this sets the state of count to whatever is typed in to the number input */}
          <input type="number" value={count} onChange={(e) => { setCount(e.target.value) }} />
          <button type="submit">GENERATE</button>
        </form>
        {/* looping over the array of data and displaying it on the page  */}
        <div>{text.map((item, index) => {
          return(
            <p key={index}>{item}</p>
          )
        })}
        </div>
    </div>
  );
}

export default App;
