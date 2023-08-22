import React from "react";
import { TextField, Input, InputAdornment, IconButton, MenuItem } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material/";
import Select, { SelectChangeEvent } from "@mui/material/Select";


type InputProps = {
  label: string;
  name: string;
  value: string;
//   type: string;
placeholder?:string

  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
export const InputField = ({
  name,
  value,
  onChange,
  placeholder
  
}: InputProps) => {
  return (
    <TextField
      value={value}
      name={name}
      onChange={onChange}
      label={""}
      variant="outlined"
      placeholder={placeholder}
      sx={{
        "& .MuiInputBase-root ":{
             height:"40px",
             width:350
        }
      }}
    />
  );
};


type PasswordProps = {
  value:string
  name:string
  onChange: React.ChangeEventHandler<HTMLInputElement>;

}
export const PasswordField = ({value, name, onChange}:PasswordProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Input
    value={value}
    name={name}
    onChange={onChange}
    sx={{
        border:'0.5px solid #cecece',
    borderRadius: '4px',
    height: '40px',
    width:350
    }}
      type={showPassword ? "text" : "password"}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
    />
  );
};


