import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
// import '/SideBar.css'

const SideBar = () => {
  return (
    <div className="sideBar">
      I'am the side Bar
      <div className="sideBar__top">
        <h3>Discord Haythem </h3>
        <KeyboardArrowDownIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sideBar__channelsHeader">
          <div className="sideBar__Header">
            <KeyboardArrowDownIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className="sideBar__AddChannel" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
