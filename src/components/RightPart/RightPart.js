import React from "react";
import "./RightPart.css";
function RightPart() {
  function trends(head, body, url) {
    return (
      <div className="single-trend">
        <div className="trend-image">
          <img src={url} alt="trend" />
        </div>
        <div className="trend-text">
          <h4>{head}</h4>
          <p>{body}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="right-part">
      <div className="trend-header">
        <h3>LinkedIn Trends</h3>
      </div>
      {trends(
        "Javascript",
        "From here to here",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
      )}
      {trends(
        "React",
        "Javascript library",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
      )}
      {trends(
        "GitHub",
        "Version control",
        "https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg"
      )}
    </div>
  );
}

export default RightPart;
