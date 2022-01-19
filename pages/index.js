import styles from "../styles/Home.module.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { typography } from "@mui/system";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";

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
            <Button color='primary' variant='contained'>
              this is my button
            </Button>
            <Button color='secondary' variant='contained'>
              this is my button
            </Button>
          </Grid>
        </Paper>
      </ThemeProvider>
    </div>
  );
}
