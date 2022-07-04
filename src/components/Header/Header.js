import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import avatarImage from "../../assets/photo.jpg";
import HeaderIcons from "./HeaderIcons";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/user";
import { auth } from "../../firebase/firebase";
function Header() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  let thephoto =
    "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";
  function Logout() {
    dispatch(userActions.logout());
    auth.signOut();
  }
  return (
    <div className="header">
      <div className="left-side">
        <img
          src="https://img.icons8.com/fluency/96/000000/linkedin.png"
          alt="logo"
        />
        <div className="search-box">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input placeholder="Search" />
        </div>
      </div>
      <div className="right-side">
        <HeaderIcons icon={faHouseChimney}>Home</HeaderIcons>
        <HeaderIcons icon={faUserGroup}>My Network</HeaderIcons>
        <HeaderIcons icon={faBriefcase}>Jobs</HeaderIcons>
        <HeaderIcons icon={faMessage}>Messaging</HeaderIcons>
        <HeaderIcons icon={faBell}>Notification</HeaderIcons>
        <HeaderIcons
          // avatar={!user.photoURL ? thephoto : user.photoURL}
          onLogout={Logout}
          last="yes"
        >
          Me
        </HeaderIcons>
      </div>
    </div>
  );
}

export default Header;
