import { createTheme, styled, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@material-ui/core";
const Paper = (porps) => {
  return (
    <div>
      <ThemeProvider>
        <Grid container direction='column'>
          <Typography >this is typography</Typography>
          <Button color='primary' variant='contained'>
            this is a button
          </Button>
          <Button color='secondary' variant='contained'>
            this is a button
          </Button>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Paper;
