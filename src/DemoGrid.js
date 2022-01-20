import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { dividerClasses } from "@mui/material";
import { textAlign } from "@mui/system";
import { makeStyles } from "@material-ui/styles";
import Divider from "@material-ui/core/Divider";

// const useStyles = makeStyles((theme => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary
//   }
// }));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  // const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
      ///////////////////////////////////////////////////////////
      <div>
        <Grid container spacing={2}>
          <Grid alignContent={"center"} item xs={12}>
            <Paper>xs=12</Paper>
          </Grid>
          <Grid alignContent={"center"} item xs={6}>
            <Paper>xs=6</Paper>
          </Grid>
          <Grid alignContent={"center"} item xs={6}>
            <Paper>xs=6</Paper>
          </Grid>
          <Grid alignContent={"center"} item xs={3}>
            <Paper>xs=3</Paper>
          </Grid>
          <Grid alignContent={"center"} item xs={3}>
            <Paper>xs=3</Paper>
          </Grid>
          <Grid alignContent={"center"} item xs={3}>
            <Paper>xs=3</Paper>
          </Grid>
          <Grid alignContent={"center"} item xs={3}>
            <Paper>xs=3</Paper>
          </Grid>
        </Grid>
      </div>
      ///////////////////////////////////////////////
      <div>
        <Grid container item xs={12}>
          <Grid item xs={2}>
            welcome.Anthony
          </Grid>
          <Grid item xs={8} />
          <Grid item xs={2}>
            logout
          </Grid>
          <Grid item xs={12}>
            -------------------
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
