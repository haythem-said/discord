import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import SideBarChannel from "./SideBarChannels";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import CallIcon from "@mui/icons-material/Call";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import MicIcon from "@mui/icons-material/Mic";
import HeadsetIcon from "@mui/icons-material/Headset";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUsers } from "./features/userSlice";
import db, { auth } from "./Firebase";

const SideBar = (props) => {
  const user = useSelector(selectUsers);
  const [channels, setChannels] = useState([]);

  const handelChannelAdd = () => {
    const channelName = prompt("Enter a new Channel Name");
    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };
  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
    });
  });

  return (
    <div className="sideBar">
      <div className="sideBar__top">
        <h3>Discord {user.displayName} </h3>
        <KeyboardArrowDownIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sideBar__channelsHeader">
          <div className="sideBar__Header">
            <KeyboardArrowDownIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon onClick={handelChannelAdd} className="sideBar__AddChannel" />
        </div>
        <div className="sidebar__ChannelsList">
          {channels.map(({id,channel}) => {
             <SideBarChannel id={id} channelName={channel.channelName} />;
          })}
        </div>
      </div>
      <div className="voice">
        <div className="connection">
          <SignalCellularAltIcon />
        </div>
        <div className="voiceConnected">
          <span>Voice</span> Connected
        </div>
        <div className="call">
          <DoNotDisturbOnIcon />
          <br />
          <CallIcon />
        </div>
      </div>
      <div className="voice">
        <div className="nameProfile">
          <Avatar onClick={() => auth.signOut()} src={user.photo} />
        </div>
        <div className="equqipement">
          <span>Haythem</span> said
        </div>
        <div className="call">
          <MicIcon />
          <br />

          <HeadsetIcon />
          <br />

          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
