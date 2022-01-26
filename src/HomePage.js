import { Tab, Tabs } from "@mui/material";
import React from "react";

const HomePage = (props) => {
  const [selectTab, setselectTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setselectTab(newValue);
  };
  return (
    <div>
      <Tabs value={selectTab} onChange={handleChange}>
        <Tab label='Item One' />
        <Tab label='Item Two' />
      </Tabs>
    </div>
  );
};

export default HomePage;
