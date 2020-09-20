import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ColumnTable from "./ColumnTable";
import data from "../data";
import Chip from "@material-ui/core/Chip";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

const useStyles = makeStyles((theme) => ({
  chip: {
    marginRight: "4px",
    height: theme.spacing(4),
  },
  filterContainer: {
    display: "flex",
    borderBottom: "1px solid",
    backgroundColor: theme.palette.primary.main,
  },
  filterText: {
    padding: theme.spacing(1, 2),
    textTransform: "uppercase",
    fontSize: "80%",
  },
  canceled: {
    color: theme.palette.error.main,
    display: "flex",
    "& span": {
      marginLeft: theme.spacing(1),
    },
  },
  active: {
    color: theme.palette.success.main,
    display: "flex",
    "& span": {
      marginLeft: theme.spacing(1),
    },
  },
}));
const transactionData = data?.transactionTable;

export function TableContent() {
  const classes = useStyles();

  return (
    <>
      {transactionData.map((row) => (
        <TableRow key={row.name}>
          <TableCell component="th" scope="row">
            {row["company name"]}
          </TableCell>
          <TableCell padding="none">{row.product}</TableCell>
          <TableCell padding="none">{row["sent at"]}</TableCell>
          <TableCell
            className={
              row.status === "Canceled" ? classes.canceled : classes.active
            }
          >
            <RadioButtonCheckedIcon fontSize="small" />
            <span>{row.status}</span>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}

export function FirstHeader() {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  const classes = useStyles();
  return (
    <div className={classes.filterContainer}>
      <div className={classes.filterText}>Filters Applied:</div>
      <Chip
        variant="outlined"
        label="Filter 1"
        onDelete={handleDelete}
        className={classes.chip}
      />
      <Chip
        variant="outlined"
        label="Filter 1"
        onDelete={handleDelete}
        className={classes.chip}
      />
      <Chip
        variant="outlined"
        label="Filter 1"
        onDelete={handleDelete}
        className={classes.chip}
      />
    </div>
  );
}

export default function TransactionTable() {
  return (
    <ColumnTable
      firstHeader={<FirstHeader />}
      rowData={data.transactionTable}
      tableContent={<TableContent />}
      columnNames={Object.keys(transactionData[0])}
    />
  );
}
