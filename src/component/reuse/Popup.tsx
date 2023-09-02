import * as React from "react";
import { Button, Paper, FormLabel } from "@mui/material/";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import { Delete } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreVert";
import { deleteUsersAction } from "@/src/state/adminSlice/deleteUserSlice";
import { useAppDispatch, useAppSeletor } from "@/src/store/hooks";
import { TextFields, Buttons } from "../reuse/index";
import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { editUserAction } from "@/src/state/adminSlice/editUser";
import { getUsersAction } from "@/src/state/adminSlice/getUsersSlice";
import { Typography } from "@material-ui/core";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  id: number;
}
interface Users {
  name: string;
  email: string;
  role: string;
  id: string;
}

function SimpleDialog(props: SimpleDialogProps) {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault()
    const data  = {
        id:JSON.stringify(props.id),
        name:value.name,
        email:value.email,
        role:value.role
    }
    dispatch(editUserAction(data))
    dispatch(getUsersAction())
  }
  const [openEdit, setEdit] = React.useState(false);
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleOpenEdit = () => setEdit((prev) => !prev);

  return (
    <React.Fragment>
      {openEdit && (
        <Paper
          sx={{
            position: "absolute",
            top: 100,
            right: 10,
            // height: "60vh",
            border: "3px solid #eee",
            width: 400,
            padding: 2,
            zIndex: "999px",
          }}
        >
            <Box sx={{display:'flex', justifyContent:'space-around'}}>
            <Typography variant="h6">Edit user</Typography>
          <Button
            style={{ border: "none", backgroundColor: "transparent" }}
            onClick={() => setEdit(false)}
          >
            <CloseIcon sx={{ color: "tomato" }} />
          </Button>

            </Box>
         
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
             <FormLabel sx={{alignSelf:'flex-start', fontSize:12, fontWeight:'bold'}}>Name</FormLabel>   
              <TextFields
                type="text"
                label=""
                onChange={handleChange}
                name="name"
                value={value.name}
                width={50}
              />
             <FormLabel sx={{alignSelf:'flex-start', fontSize:12, fontWeight:'bold'}}>Email</FormLabel>  
              <TextFields
                type="text"
                label=""
                onChange={handleChange}
                name="email"
                value={value.email}
                width={50}
              />
              <FormLabel sx={{alignSelf:'flex-start', fontSize:12, fontWeight:'bold'}}>Role</FormLabel>  
              <TextFields
                type="text"
                label=""
                onChange={handleChange}
                name="role"
                value={value.role}
                width={50}
              />
            </Box>
          
          <Buttons width={150} submit={handleSubmit}>
            Submit
          </Buttons>
        </Paper>
      )}

      <Dialog onClose={handleClose} open={open}>
        <List>
          <ListItem disableGutters>
            <ListItemButton autoFocus onClick={handleOpenEdit}>
              <EditIcon sx={{ color: "tomato" }} />
              <ListItemText primary="Edit user" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disableGutters>
            <ListItemButton
              autoFocus
              onClick={() => dispatch(deleteUsersAction(props.id))}
            >
              <Delete sx={{ color: "tomato" }} />
              <ListItemText primary="Delete user" />
            </ListItemButton>
          </ListItem>
        </List>
      </Dialog>
    </React.Fragment>
  );
}

interface Id {
  id: number;
}
export default function SimpleDialogDemo({ id }: Id) {

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <MoreHorizIcon sx={{color:'#ccc', cursor:'pointer'}} onClick={handleClickOpen} />
        
      {/* </MoreHorizIcon> */}
       
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        id={id}
        />
    </div>
  );
}
