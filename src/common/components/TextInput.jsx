import React from "react";
import { TextField } from "@mui/material";

const TextInput = ({ 
  label, 
  name, 
  value, 
  onChange, 
  error, 
  helperText
}) => (
  <TextField
    fullWidth
    label={label}
    name={name}
    value={value}
    onChange={onChange}
    error={Boolean(error)}
    helperText={helperText}
    size="small"
    margin="normal"
    variant="outlined"
  />
);

export default TextInput;