import React from "react";
import { TextField, Button, MenuItem, Typography } from "@material-ui/core/";
import { Select } from "@mui/material";
import styled from "@mui/styled-engine";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "400px",
        height: "40px",
      },
    },
    input: {
      width: 350,
    },
    btn: {
      backgroundColor: "green",
      color: "#fff",
      marginTop: 50,
    },
  })
);

type Props = {
  value: string;
  name: string;
  type: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  width?: number;
};

export const TextFields = ({
  type,
  label,
  onChange,
  name,
  value,
  width,
}: Props) => {
  const classes = useStyles();
  return (
    <TextField
      // className={classes.input}
      name={name}
      label={label}
      type={type}
      onChange={onChange}
      value={value}
      style={{width:width}}

    />
  );
};

type ButtonProps = {
  children: any;
  submit: React.FormEventHandler;
  width?: number;
};

export const Buttons = ({ submit, children, width }: ButtonProps) => {
  const classes = useStyles();
  return (
    <Button
      style={{ backgroundColor: "green", color: "#fff", marginTop: 50 }}
      onClick={submit}
    >
      {children}
    </Button>
  );
};

interface SelectProps {
  value: string;
  name: string;
  onChange: any;
  item: string[];
  width: number;
  variant: string;
}

export const SelectInput = ({ value, item, name, onChange }: SelectProps) => {
  const classes = useStyles();

  return (
    <Select
      value={value}
      name={name}
      onChange={onChange}
      variant="outlined"
      style={{ marginLeft: 12, width: "400px", marginTop: 10 }}
    >
      {item.map((item, index) => (
        <MenuItem key={index} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  );
};

export const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "1rem",
  backgroundColor: "#fff",
  borderRadius: "4px",
  boxShadow: "0 2px 4px rgba(0,0,0,.2)",
});

export const DateInput = styled("input")({
  width: "100%",
  color: "#eee",
  border: "1px solid #eee",
  height: 50,
});

export const StyledTextField = styled(TextField)({
  width: "100%",
});

export const StyledButton = styled(Button)({
  width: "100%",
  margin: "0 auto",
});

export const Heading = styled(Typography)({
  width: "100%",
});

// export const  MyDatePicker = () =>{
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleDateChange = (e:React.ChangeEvent<HTMLInputElement>) => {
//     // setSelectedDate(e.target.value);
//   };

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <KeyboardDatePicker
//         margin="normal"
//         id="date-picker-dialog"
//         label="Select date"
//         format="MM/dd/yyyy"
//         value={selectedDate}
//         onChange={() => console.log("")}
//         KeyboardButtonProps={{
//           'aria-label': 'change date',
//         }}
//       />
//     </MuiPickersUtilsProvider>
//   );
// }
