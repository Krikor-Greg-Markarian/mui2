import styles from "../styles/Home.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button,
  Grid,
  Paper,
  TablePagination,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import DemoGrid from "../src/DemoGrid";
import Card from "../src/Card";
import SweetsTable from "../src/SweetsTable";
import { makeStyles } from "@material-ui/styles";
import ExampleTab from "../src/ExampleTab";

import React from "react";
import HomePage from "../src/HomePage";

const label = { inputProps: { "aria-label": "Switch demo" } };

const useStyles = makeStyles({
  CardContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  boxStyle: {
    marginTop: "20px",
  },
});

export default function Home(props) {
  const classes = useStyles();

  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <div className={styles.container}>
      <ThemeProvider theme={darkTheme}>
        <Paper style={{ height: "100vh" }}>
          <Grid container direction='column'>
            <Typography variant='h3'>this is my typography</Typography>
            <Button variant='contained' color='primary'>
              this is my button
            </Button>
            <Button variant='contained' color='secondary'>
              this is my button
            </Button>
            <Switch
              {...label}
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </Grid>
        </Paper>
      </ThemeProvider>
      //////////////////////////////////////////////////////////////////
      <DemoGrid />
      <div className={classes.boxStyle}>
        <Grid
          justifyContent='center'
          className={classes.CardContainer}
          spacing={2}
          container
          direcion='column'
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
        </Grid>
      </div>
      <div className={classes.boxStyle}>
        <SweetsTable />
      </div>
      <div className={classes.boxStyle}>
        <HomePage />
      </div>
      <div className={classes.boxStyle}>
        <TablePagination />
      </div>
      <div className={classes.boxStyle}></div>
      <div className={classes.boxStyle}></div>
      <div className={classes.boxStyle}></div>
      <div className={classes.boxStyle}></div>
      <div className={classes.boxStyle}></div>
    </div>
  );
}
