import React from "react";
import { useSelector } from "react-redux";
import "./Avatar.css";
function Avatar({ url }) {
  const user = useSelector((state) => state.user.user);
  console.log(user.photoURL);
  console.log(url);

  return (
    <div className="avatar">
      <img src={url} alt="User img" />
    </div>
  );
}

export default Avatar;
