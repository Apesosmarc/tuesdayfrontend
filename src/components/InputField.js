import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({ handleChange, input }) {
  console.log(input);
  return (
    <Box noValidate autoComplete="off" onChange={handleChange}>
      <TextField
        id="outlined-basic"
        name="title"
        label="Task"
        variant="outlined"
        value={input}
      />
    </Box>
  );
}
