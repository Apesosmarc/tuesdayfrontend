import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useGlobalContext } from "../context/appContext";

export default function BasicSelect({
  status = "Working On It",
  id,
  handleCreateChange,
}) {
  const [val, setVal] = React.useState(status);
  const { editJob } = useGlobalContext();

  const handleChange = (event) => {
    setVal(event.target.value);
    if (handleCreateChange) {
      handleCreateChange(event);
      return;
    }
    editJob(id, { status: event.target.value });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="status">Status</InputLabel>
        <Select
          labelId="status-label"
          id="status-select"
          value={val}
          label="Status"
          name="status"
          onChange={handleChange}
        >
          <MenuItem value={"Done"}>Done</MenuItem>
          <MenuItem value={"Working On It"}>Working On It</MenuItem>
          <MenuItem value={"Stuck"}>Stuck</MenuItem>
          <MenuItem value={"Waiting For Review"}>Waiting For Review</MenuItem>
          <MenuItem value={"Paused"}>Paused</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

const setStatusBackground = (status) => {
  if (status === "Done") return "#00ca72";
  if (status === "Working On It") return "#fdab3d";
  if (status === "Stuck") return "#e44258";
  if (status === "Waiting For Review") return "#579bfc";
  if (status === "Paused") return "#a25ddc";
  return "#f7f3d7";
};
