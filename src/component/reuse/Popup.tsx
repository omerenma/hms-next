import * as React from "react";
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
import { useAppDispatch } from "@/src/store/hooks";
import { editUserAction } from "@/src/state/adminSlice/editUser";
import { getUsersAction } from "@/src/state/adminSlice/getUsersSlice";
import {  toggleEditOpen } from "@/src/state/patients/toggleEditPatientSlice";
import { deletePatientAction } from "@/src/state/patients/deletePatientSlice";
const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
  selectedValue: string;
  onClose: (value: string) => void;
  id: number;
}

export function SimpleDialog({
  id,
  open,
  selectedValue,
  onClose,
  setOpen,
}: SimpleDialogProps) {

  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState({
    name: "",
    email: "",
    role: "",
  });
  

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = {
      id: JSON.stringify(id),
      name: value.name,
      email: value.email,
      role: value.role,
    };
    dispatch(editUserAction(data));
    dispatch(getUsersAction());
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleOpenEdit = () => {
    dispatch(toggleEditOpen())
     setOpen(false);
  };

 
  return (
        <Dialog onClose={handleClose} open={open}>
          <List>
            <ListItem disableGutters>
              <ListItemButton autoFocus onClick={handleOpenEdit}>
                <EditIcon sx={{ color: "tomato" }} />
                <ListItemText primary="Edit patient" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disableGutters onClick={() => dispatch(deletePatientAction(id))}>
              <ListItemButton
                autoFocus
              >
                <Delete sx={{ color: "tomato" }} />
                <ListItemText primary="Delete patient" />
              </ListItemButton>
            </ListItem>
          </List>
        </Dialog>
  );
}

interface Id {
  id?: any;
}



export default function SimpleDialogDemo({ id }: Id) {
const [rowsId, setRowsId] =  React.useState<any>(null)
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

 React.useEffect(() => {
  const id = localStorage.getItem('editRowId')
  setRowsId(id)
 }, [])

  return (
    <div>
      <MoreHorizIcon
        sx={{ color: "#ccc", cursor: "pointer" }}
         onClick={handleClickOpen}
      />
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        id={rowsId}
        setOpen={setOpen}
      />
    </div>
  );
}
