import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HeaderIcons.css";
import { useSelector } from "react-redux";
function HeaderIcons({ icon, children, avatar, onLogout, last }) {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  let av;
  if (!user && last) {
    av = (
      // eslint-disable-next-line jsx-a11y/img-redundant-alt
      <img
        src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
        alt="image"
      />
    );
  }
  if (user && last) {
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    av = <img src={user.photoURL} alt="image" />;
  }

  return (
    <div className="icon-cont" onClick={onLogout}>
      {icon && <FontAwesomeIcon className="icon" icon={icon} />}
      {avatar && <img src={avatar} alt="imageasd" />}

      {av}

      <h4>{children}</h4>
    </div>
  );
}

export default HeaderIcons;
