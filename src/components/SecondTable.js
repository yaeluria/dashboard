import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ColumnTable from "./ColumnTable";
import data from "../data";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles((theme) => ({
  headerText: {
    display: "flex",
    borderBottom: "1px solid",
    backgroundColor: theme.palette.primary.main,
    textTransform: "uppercase",
    fontSize: "80%",
    paddingLeft: theme.spacing(1),
  },
}));
const tableData = data?.secondTable;

export function TableContent() {
  const classes = useStyles();
  return (
    <>
      {tableData.map((row) => (
        <TableRow className={classes.row} key={row.name}>
          <TableCell component="th" scope="row">
            {row.counterparty}
          </TableCell>
          <TableCell>{row.BTC}</TableCell>
          <TableCell>{row.ETH}</TableCell>
          <TableCell>{row.XRP}</TableCell>
          <TableCell>{row.EUR}</TableCell>
          <TableCell>{row.USD}</TableCell>
          <TableCell>{row.GBR}</TableCell>
          <TableCell>{row["net exposure"]}</TableCell>
          <TableCell>{row["last calculation date"]}</TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default function SecondTable() {
  const classes = useStyles();
  const firstHeader = (
    <div className={classes.headerText}>
      Threshold &nbsp;
      <b> 1000</b>
    </div>
  );
  return (
    <ColumnTable
      firstHeader={firstHeader}
      tableContent={<TableContent />}
      columnNames={Object.keys(tableData[0])}
    />
  );
}
