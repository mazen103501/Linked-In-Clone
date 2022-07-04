import React, { forwardRef } from "react";
import Avatar from "../Avatar/Avatar";
import PostOption from "../Posts/PostOption";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./SinglePost.css";

const SinglePost = forwardRef(({ name, description, body, photoURL }, ref) => {
  return (
    <div className="single-post" ref={ref}>
      <div className="single-post-top">
        <Avatar url={photoURL}></Avatar>
        <div className="info">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
      <div className="body">
        <p>{body}</p>
      </div>
      <div className="like">
        <PostOption icon={faThumbsUp} text="Like" color="gray"></PostOption>
        <PostOption
          icon={faCommentDots}
          text="Comment"
          color="gray"
        ></PostOption>
        <PostOption icon={faShare} text="Like" color="gray"></PostOption>
        <PostOption icon={faPaperPlane} text="Like" color="gray"></PostOption>
      </div>
    </div>
  );
});

export default SinglePost;
