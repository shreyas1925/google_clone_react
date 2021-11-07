import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "../firebase";

const Login = () => {
  const login = () => {
    auth.signInWithPopup(provider).then((err) => console.log(err.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src=""
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          // src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png"
          alt="discord logo"
          alt=""
        />
      </div>

      <Button onClick={login} className="button">
        Signin
      </Button>
    </div>
  );
};

export default Login;
