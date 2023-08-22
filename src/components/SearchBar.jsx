import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ setWordMeaningData }) => {
  const [word, setWord] = useState(null);

  const onClickHandler = (e) => {
    e.preventDefault();
    fetchWordMeaning();
  };

  const fetchWordMeaning = async () => {
    const link = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
    const response = await fetch(link);
    const isOk = response.ok;
    const myJson = await response.json();
    // console.log(isOk);
    // console.log(myJson);

    const data = {
      isOk: isOk,
      data: myJson,
    };

    setWordMeaningData(data);
  };

  return (
    <>
      <Paper
        component="form"
        onSubmit={onClickHandler}
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "40vw",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search here..."
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={onClickHandler}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchBar;
