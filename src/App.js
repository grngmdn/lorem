import { Box, Button, TextField, Typography } from "@mui/material"
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
    <Box>
        <Typography
          variant="h3"
        >
          Lorem Ipsum Generator
        </Typography>
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h5"
          >Paragraphs: </Typography>
          {/* this sets the state of count to whatever is typed in to the number input */}
          <TextField variant="outlined" type="number" value={count} onChange={(e) => { setCount(e.target.value) }} />
          <Button 
            type="submit"
            variant="contained"
          >GENERATE
          </Button>
        </form>
        {/* looping over the array of data and displaying it on the page  */}
        <Box>{text.map((item, index) => {
          return(
            <Typography 
              variant="p" 
              key={index}
              color="textSecondary"
            >{item}</Typography>
          )
        })}
        </Box>
    </Box>
  );
}

export default App;
