import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./AllPosts.css";
import Feed from "../Feed/Feed";
import firebase from "firebase/compat/app";
import { db } from "../../firebase/firebase";
import { useSelector } from "react-redux";
// import firebase from "firebase";
function AllPosts() {
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.user.user);
  function inputValue(text) {
    // console.log(text , "from parent");
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      body: text,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="all-posts">
      <Post onSubmit={inputValue}></Post>
      <Feed postArray={posts}></Feed>
    </div>
  );
}

export default AllPosts;
