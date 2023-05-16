import React from "react";
import ChatHeader from "./ChatHeader";
import GifIcon from "@mui/icons-material/Gif";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader />

      <div className="chatMessages">
        
      </div>

      <div className="chatInput">
        <form className="form">
          <input type="text" placeholder="Message"></input>
        </form>
        <button className="chatInputButton" type="submit">
          SendMessage
        </button>
        <div className="chatInputIcon">
        <GifIcon />
        <InsertEmoticonIcon />
        </div>
       
      </div>
    </div>
  );
};

export default Chat;
