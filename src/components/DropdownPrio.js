import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useGlobalContext } from "../context/appContext";

export default function BasicSelect({
  priority = "Medium",
  id,
  handleCreateChange,
}) {
  const { editJob } = useGlobalContext();
  const [val, setVal] = React.useState(priority);
  const handleChange = (event) => {
    setVal(event.target.value);
    if (handleCreateChange) {
      handleCreateChange(event);
      return;
    }

    editJob(id, { priority: event.target.value });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="priority">Prio</InputLabel>
        <Select
          labelId="priority-label"
          id="priority-select"
          value={val}
          label="priority"
          name="priority"
          onChange={handleChange}
        >
          <MenuItem value={"High"}>High</MenuItem>
          <MenuItem value={"Medium"}>Medium</MenuItem>
          <MenuItem value={"Low"}>Low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
