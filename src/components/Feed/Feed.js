import React from "react";
import SinglePost from "./SinglePost";
import "./Feed.css";
import FlipMove from "react-flip-move";

function Feed({ postArray }) {
  // console.log(postArray);
  return (
    <div className="feed">
      <FlipMove>
        {postArray.map(
          ({ id, data: { name, description, body, photoURL } }) => (
            <SinglePost
              key={id}
              name={name}
              description={description}
              body={body}
              photoURL={photoURL}
            ></SinglePost>
          )
        )}
      </FlipMove>
    </div>
  );
}

export default Feed;
