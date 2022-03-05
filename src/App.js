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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Box
        sx={{
          backgroundColor: "#FBF2FB",
          textAlign: "center",
          width: "75vw",
          marginTop: "50px",
          marginBottom: "50px",
          padding: "50px"
        }}
      >
        <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#21254A"
            }}
          >
            Lorem Ipsum Generator
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              paddingTop: "50px",
              paddingBottom: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Typography
                variant="h6"
                color= "textSecondary"
                sx={{
                  marginRight: "10px"
                }}
              >Paragraphs: 
            </Typography>
            <form 
              onSubmit={handleSubmit}
            >
              {/* this sets the state of count to whatever is typed in to the number input */}
              <TextField 
                variant="outlined" 
                type="number" 
                value={count} 
                onChange={(e) => { setCount(e.target.value) }} 
                size= "small"
              />
              <Button 
                type="submit"
                variant="contained"
                sx={{
                  marginLeft: "10px"
                }}
              >GENERATE
              </Button>
            </form>
          </Box>
          
          {/* looping over the array of data and displaying it on the page  */}
          <Box>{text.map((item, index) => {
            return(
              <Typography 
                variant="p" 
                key={index}
                color="textSecondary"
              >{item}<br /><br /></Typography>
            )
          })}
          </Box>
      </Box>

    </Box>
  );
}

export default App;
