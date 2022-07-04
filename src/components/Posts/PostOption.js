import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PostOption.css";
function PostOption({ color, icon, text }) {
  return (
    <div className="post-option">
      <FontAwesomeIcon icon={icon} style={{ color }} />
      <p>{text}</p>
    </div>
  );
}

export default PostOption;
