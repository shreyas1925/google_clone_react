import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import { auth } from "../firebase";
import { selectUser } from "../features/UserSlice";
import { useSelector } from "react-redux";
import Search from "./Search";

const Home = () => {
  // const user = useSelector(selectUser);

  return (
    <div className="homes">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/about">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/about">Gmail</Link>
          <Link to="/about">Images</Link>
          <AppsIcon />
          {/* <Avatar src={user.photo} onClick={() => auth.signOut()} /> */}
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
