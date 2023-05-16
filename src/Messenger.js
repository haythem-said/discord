import { Avatar } from "@mui/material";
import React from "react";

const Messenger = () => {
  return (
    <div className="message">
      <Avatar src="/images/user.jpg" />
      <div className="messengerInfo">
        <h4>
          Haythem
          <span className="messageTimes">{"16" + "mai" + "23:42"}</span>
        </h4>
        <br></br>
        <p>the messeneger put here</p>
      </div>
    </div>
  );
};

export default Messenger;
