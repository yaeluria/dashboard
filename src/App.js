import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import TransactionTable from "./components/TransactionTable";
import SecondTable from "./components/SecondTable";
import SellBuy from "./components/SellBuy";
import Graph from "./components/Graph";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#485569",
    },
    error: {
      main: "#c52d41",
    },
    success: {
      main: "#2ba12c",
    },
    background: {
      default: "#1a1a25",
      paper: "#2a323e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Box display="flex" flexDirection="column">
          <Box maxHeight="40vh" maxWidth="100vw" display="flex">
            <TransactionTable />
            <TransactionTable />
            <Box display="flex" flexDirection="column">
              <Graph />
              <Graph />
            </Box>
            <Box display="flex" flexDirection="column">
              <Graph />
              <Graph />
            </Box>
          </Box>
          <Box maxHeight="30vh" display="flex">
            <Box paddingRight={1} maxWidth="47.5vw" maxHeight="inherit">
              <SecondTable />
            </Box>
            <Box margin={1}>
              <SellBuy />
              <SellBuy />
            </Box>
            <Box maxHeight="inherit" flex={"25%"} paddingRight={1}>
              <Box marginTop={1}>
                <Graph />
              </Box>
            </Box>
          </Box>
          <Box maxHeight="30vh">
            <div> third table</div>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
