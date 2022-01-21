import styles from "../styles/Home.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import DemoGrid from "../src/DemoGrid";
import { Card } from "@mui/material";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home(props) {
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
      <div>
        <Card />
      </div>
    </div>
  );
}
