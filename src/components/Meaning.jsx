import { CardActionArea, Paper } from "@mui/material";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Meaning = ({ id,meaning }) => {

    
  return (
    <>
      <Paper elevation={0} sx={{ margin:"1rem",bgcolor: "#445069"}} >
      <Card sx={{ minWidth: 220 }}>
      <CardActionArea>
      <CardContent sx={{backgroundColor:"#F7E987"}}>
        <Typography sx={{ mb: 1.5 , fontFamily:"fantasy"}} color="text.secondary">
          {meaning.partOfSpeech}
        </Typography>
        <Typography variant="body2">
            <Typography sx={{fontFamily:"monospace"}}>
            {meaning.definitions[0].definition}
            </Typography>
          <br />
           Example-  {meaning.definitions[0].example}
          
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
      </Paper>
    </>
  );
};

export default Meaning;
