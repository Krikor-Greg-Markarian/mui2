import { AdbOutlined } from "@material-ui/icons";
import { Tab, Tabs, AppBar } from "@mui/material";
import React from "react";
import Contact from "./Contact";
import About from "../src/About"

const HomePage = (props) => {
  const [selectedTab, setselectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setselectedTab(newValue);
  };
  return (
    <div>
      {/* <AppBar position="static"> */}
      <Tabs value={selectedTab} onChange={handleChange}>
        <Tab label='Item One' />
        <Tab label='Item Two' />
      </Tabs>
      {/* </AppBar> */}
      {selectedTab === 0 && <About />}
      {selectedTab === 1 && <Contact />}
    </div>
  );
};

export default HomePage;
