import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "45%",
    minWidth: "16vw",
    maxWidth: "16vw",
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(1),
  },
  header: {
    fontSize: "80%",
    maxHeight: "20%",
    borderBottom: "1px solid",
    paddingLeft: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: theme.palette.primary.main,
  },
  button: {
    fontSize: "95%",
    maxWidth: theme.spacing(4),
    maxHeight: theme.spacing(4),
    minWidth: theme.spacing(4),
    minHeight: theme.spacing(4),
  },
}));

export default function Graph() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div className={classes.header}>
        <Box marginTop={1}>BTC-USD-CME</Box>
        <span>
          <Button size="small" className={classes.button}>
            1h
          </Button>
          <Button size="small" className={classes.button}>
            1d
          </Button>
          <Button size="small" className={classes.button}>
            1w
          </Button>
          <Button size="small" className={classes.button}>
            1m
          </Button>
        </span>
      </div>
    </Paper>
  );
}
