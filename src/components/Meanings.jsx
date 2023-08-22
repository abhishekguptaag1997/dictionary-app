import { Paper } from "@mui/material";
import React, { useId } from "react";
import Meaning from "./Meaning";

const Meanings = ({data}) => {

    const id = useId();

    const listItems = data.map((item,index)=>{
        return <Meaning id={id+""+index} meaning={item.meanings[0]} />
    })
    

  return(
  <>
    <Paper elevation={0} sx={{width:"78vw" , display:"flex",flexWrap:"wrap", bgcolor: "#445069", justifyContent:"space-evenly"}} >
       {listItems}
    </Paper>
  </>);
};

export default Meanings;
