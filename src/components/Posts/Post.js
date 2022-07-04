import React, { useState } from "react";
import Avatar from "../Avatar/Avatar";
import "./Post.css";
import PostOption from "./PostOption";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
function Post({ inputValue, onSubmit }) {
  const [input, setInput] = useState("");
  const user = useSelector((state) => state.user.user);
  function submitHandler(e) {
    e.preventDefault();
    onSubmit(input);
    setInput("");
  }
  return (
    <div className="post-input">
      <form onSubmit={submitHandler}>
        <Avatar url={user.photoURL}></Avatar>
        <input
          placeholder="Start a Post"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <div>
        <PostOption icon={faImage} text="Photo" color="#70b5f9"></PostOption>
        <PostOption
          icon={faPhotoFilm}
          text="Photo"
          color="#7fc15e"
        ></PostOption>
        <PostOption
          icon={faCalendarDays}
          text="Event"
          color="#e7a33e"
        ></PostOption>
        <PostOption
          icon={faNewspaper}
          text="Write Article"
          color="#70b5f9"
        ></PostOption>
      </div>
    </div>
  );
}

export default Post;
