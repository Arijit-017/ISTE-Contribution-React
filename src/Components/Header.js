import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import Search from "./Search.js";

const Header = ({onSubmit}) => {
    function loadWebsite(){
        const url = "https://hitiste.vercel.app/";
        window.open(url, "_blank");
    }
    function joinLoader(){
      const url = "https://hitiste.vercel.app/join-membership";
      window.open(url, "_blank");
  }
  return (
    <header>
      <div className="logo">
        <img src="/iste.png" alt="ISTE Logo" className="imageLogo" />
      </div>
      <div className="nav">
        <div className="txt" onClick={joinLoader}>Join</div>
        <div className="txt">About</div>
        <div className="txt" onClick={loadWebsite}>Website</div>
      </div>
      <Search onSubmit={onSubmit} />
      <div className="toggle">
        <FontAwesomeIcon icon={faMoon} />
      </div>
    </header>
  );
};

ReactDOM.render(<Header />, document.getElementById("root"));

export default Header;
