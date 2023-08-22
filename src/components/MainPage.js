import React, { useEffect, useState } from "react";
import "./component css/mainpage.css";
import { Paper, Typography } from "@mui/material";
import Heading from "./Heading";
import SearchBar from "./SearchBar";
import Meanings from "./Meanings";

const MainPage = () => {
  const [wordMeaningData, setWordMeaningData] = useState({});

  useEffect(() => {
  }, [wordMeaningData]);

  return (
    <>
      <Paper elevation={6} sx={{ bgcolor: "#445069", height: "100vh" }}>
        <Heading />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "1rem 0",
          }}
        >
          <SearchBar setWordMeaningData={setWordMeaningData} />
        </div>
        {wordMeaningData.isOk ? (
          <Meanings data={wordMeaningData.data} />
        ) : (
          <Typography sx={{ color: "red", textAlign:"center",lineHeight:"2rem",fontSize:"1.5rem" }}>
            Enter word correctly!
          </Typography>
        )}
      </Paper>
    </>
  );
};

export default MainPage;
