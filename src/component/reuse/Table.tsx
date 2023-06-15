import React, { useEffect, useState } from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SimpleDialog from "../reuse/Popup";
import { useAppSeletor } from "@/src/store/hooks";
import { getUsersAction } from "@/src/state/adminSlice/getUsersSlice";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  th: {
    color: "red",
  },
});

interface Prop {
  data: {
    name: string;
    email: string;
    role: string;
    id: number;
  }[];
}
const UserTable = ({ data }: Prop) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        List of users
      </Typography>

      <TableContainer
        component={Paper}
        style={{ width: 900, margin: "0 auto" }}
      >
      {
        data.length === 0 ? "Loading...": "Data"
      }
      </TableContainer>
    </div>
  );
};
export default UserTable;
