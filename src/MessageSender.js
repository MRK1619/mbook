import { Avatar } from "@mui/material";
import React from "react";
import "./MessageSender.css";
import VidocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useState } from "react";
import {useStateValue} from './StateProvider'
import db from "./firebase-config";
import firebase from "firebase/compat/app";

function MessageSender() {
  const [input, setInput]=useState("");
  const [imageUrl, setImageUrl]=useState("");
  const [{user},dispatch]=useStateValue();

  const handelSubmit = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      message:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      profilePic:user.photoURL,
      username:user.displayName,
      image:imageUrl,
    })

    //clear after press enter
    setInput("")
    setImageUrl("")
  };

  return (
    <div className="mesr">
      <div className="mesr_top">
        <Avatar src={user.imageURL}/>
        <form>
          <input value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input" placeholder={`Write Here, ${user.displayName}`} />
          <input value={imageUrl} 
           onChange={(e) => setImageUrl(e.target.value)}
           placeholder={"Image URL(Optional)"} />
          <button onClick={handelSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="mesr_bottom">
        <div className="mesr_option">
          <VidocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="mesr_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="mesr_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
