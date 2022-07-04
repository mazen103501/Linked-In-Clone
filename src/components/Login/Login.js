import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import "./Login.css";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user";
function Login() {
  const [loginForm, setLoginForm] = useState(true);
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function changeMethod() {
    setEmail("");
    setPassword("");
    setImage("");
    setLoginForm((prevState) => !prevState);
  }
  function validationInputs(email, password) {
    // console.log(email, password);
    if (email === "" || password === "") {
      console.log("nonono");
      return false;
    }
    if (!email.includes("@")) {
      console.log("No @");
    } else {
      console.log("fe @");
    }
  }
  function loginFunc(e) {
    e.preventDefault();
    validationInputs(email, password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        console.log("uerauth" + userAuth);
        dispatch(
          userActions.login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((err) => alert(err));
  }
  function registerFunc(e) {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: image
              ? image
              : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAMFBMVEXk5ueutLeqsLPZ3N3n6eq0ubzd4OHS1dfFycvW2dq/xMbg4+S4vcDN0dO8wcPKztCju/PcAAACs0lEQVRoge2a226DMAyGc3ACJIG8/9sOKKvYBoldbJCm/BeVql58PuVkV6mmpqampqampqampqa9YNZDZBX9MOY8dtar242IeXJmk3ZhUDcaAHaaoXsZ3d9lAFj3k71ZcIsBoPoj+BqBTpwP/tD1zYAgTR9O2Ss/CdPPXX/JCca/Tp/5cnRbhc+Si7/D4E0vE38I9dCvfCuCRyR+k4T7gIVrk/n5mKp/i52OrLvN/ZHdfUtwnn/xQyDQtRmY8ZEQ+1mBOfqk2LNHH3oSXWverQcSjW46Vjwx9dwbv6fRtZ5Y8aijdi/ea0f5jnUkXjxt3f03PJXOi3+49MgLL7HiqduO5t12Ht50Hz5yqCuP+7oTac7zbvlz9CcKnTn1xHu2dpEZrxTFe/5nHox49w2/8wrweIk3LnSPPjHRxW+EGlzIc4d7zX8Lt/gEmzuY9AtU/ZtfX31esrMJ+Un6Ev8C27go3dWFmM4SINVS+2VApw8b6kk48G++yr/b2kZPw33zDFBDcPo10Vg+XfY3j3NA+S730xT6cbib/Rqh7XUneBmh9WFK6+XfpbREwEb5cRqoaMfJLQn/UXvrV5f6wcuNk+Zs5+RMYdudf5tNUAImANigS+jdGgwdcxrA58Ot5jQKwfIZAJZ0yX/JdTw5WCamdPqyCY/XDYD4GXw1wF3ciM8nptgIXDmBT842kgEXBiukHv4Z/8MrSHFYTNInFVAZFlP0QQIoL8o6n/rygGsV/0e0PhtkXvrs/1OR3/j44RKtkYLlo2/hxC4Wlo98dwO1gYrlox6f7GX3Fqr8vRQdFX5a/5CoOl2i6r9Vr35R5+utD/LUhKTa4UPu2xNVG/HI0mtjBr5D/kTF4uM+Z/+qGH3qxIguU8RLO1/+R1UUx+vSX3qsEVep9qIVly8Ev6mpqalJVF+YqB54PMBL1AAAAABJRU5ErkJggg==",
          })
          .then(() => {
            dispatch(
              userActions.login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL,
              })
            );
          });
      })
      .catch((err) => alert(err));
  }
  return (
    <div className="login">
      <div className="login-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/150px-LinkedIn_logo_initials.png"
          alt="logo"
        />
      </div>
      {loginForm && (
        <form className="login-form" onSubmit={loginFunc}>
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>
            Not a Member? <span onClick={changeMethod}>Register</span> Now
          </p>
        </form>
      )}
      {!loginForm && (
        <form className="register-form" onSubmit={registerFunc}>
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Full Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="image URL"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button type="submit">Register</button>
          <p>
            Already a Member? <span onClick={changeMethod}>Login</span> Now
          </p>
        </form>
      )}
    </div>
  );
}

export default Login;
