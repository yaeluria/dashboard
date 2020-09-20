import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";

import SyncAltIcon from "@material-ui/icons/SyncAlt";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignContent: "space-between",
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    padding: theme.spacing(1, 0.5),
    fontSize: "80%",
  },
  rotateBuy: {
    transform: "rotate(-80deg)",
  },
  rotateSell: {
    transform: "rotate(-160deg)",
  },
}));

export default function SellBuy() {
  const classes = useStyles();
  const squaresData = [1.25, "MKT", "Slippage"];
  return (
    <div>
      <Paper>
        <div className={classes.header}>
          <SyncAltIcon fontSize="small" />
          <span>BTC-USD</span>
        </div>
        <Box display="flex" flexDirection="column">
          <Box display="flex" justifyContent="space-between" padding={1}>
            <Box
              display="flex"
              bgcolor="error.main"
              justifyContent="space-evenly"
              padding={1}
              flex={1}
            >
              <ChangeHistoryIcon
                fontSize="large"
                className={classes.rotateSell}
              />
              <Box display="flex" flexDirection="column">
                <span>9562.57</span>
                <span>Sell</span>
              </Box>
            </Box>
            <Box padding={1}>18.5</Box>

            <Box
              display="flex"
              bgcolor="success.main"
              justifyContent="space-evenly"
              padding={1}
              flex={1}
            >
              <ChangeHistoryIcon
                fontSize="large"
                className={classes.rotateBuy}
              />
              <Box display="flex" flexDirection="column">
                <span>9580.57</span>
                <span>Buy</span>
              </Box>
            </Box>
          </Box>
          <Box padding={1} display="flex" justifyContent="space-between">
            {squaresData.map((square) => (
              <Box width={1} marginLeft={1} padding={0.4} border="1px solid">
                {square}
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
    </div>
  );
}
