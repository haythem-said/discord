import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchIcon from '@mui/icons-material/Search';
const ChatHeader = () => {
  return (
    <div className="chatHeader">
      <div className="chatHeaderLeft">
        <h3>
          <span className="chatHeaderLeft__hash">#</span>
          YouTube
        </h3>
      </div>
      
      <div className="chatHeaderRight">
        <NotificationsIcon />
        <EditLocationIcon />
        <PeopleAltIcon />
        <div className="chatHeader__search">
          <input type="text" placeholder="search"></input>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
