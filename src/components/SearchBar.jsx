import React, { useState } from "react";
import { Grid, TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

//  * Search Questions Elements/Details *
//  Access: Search Bar above question list

//  1. Input element
//  2. Begin and update search/filter when there is 3 or more characters typed
//  3. placeholder = “Have a question? Search for answers…”
//  4. Work with the sort and rating filters

const SearchQuestions = ({ setQuery }) => {

  const [inputText, setInput] = useState("")


  setQuery(inputText.length >= 3 ? inputText.toLowerCase() : "");

  return (
    <Grid container>
      <TextField
        value={inputText}
        onChange={(e) => setInput(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
        label="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default SearchQuestions;
