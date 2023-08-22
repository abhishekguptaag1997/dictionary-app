import { Paper, Typography } from "@mui/material";
import React from "react";

const Heading = () => {
  return (
    <>
      <Paper elevation={8}>
        <Typography
          variant="h3"
          sx={{
            bgcolor: "#252B48",
            height: "8vh",
            color: "#F7E987",
            textAlign: "center",
          }}
        >
          My Dictionary App
        </Typography>
      </Paper>
    </>
  );
};

export default Heading;
