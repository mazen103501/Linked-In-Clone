import { useEffect } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import LeftPart from "./components/LeftPart/LeftPart";
import AllPosts from "./components/Posts/AllPosts";
import RightPart from "./components/RightPart/RightPart";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login/Login";
import { auth } from "./firebase/firebase";
import { userActions } from "./store/user";
function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          userActions.login({
            email: userAuth.email,
            displayName: userAuth.displayName,
            uid: userAuth.uid,
            photoURL: userAuth.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <div className="app">
      {/* header */}

      {user ? (
        <div>
          <Header></Header>
          <div className="content-container">
            <LeftPart></LeftPart>
            <AllPosts></AllPosts>
            <RightPart></RightPart>
          </div>
        </div>
      ) : (
        <Login></Login>
      )}
    </div>
  );
}

export default App;
