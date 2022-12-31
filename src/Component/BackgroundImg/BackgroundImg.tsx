import React from "react";
import { useState } from "react";
import { CiSearch } from 'react-icons/ci';
import './BackgroundImg.css'
import Suggbox from "../Suggestionbox/Suggbox";

import { Link } from 'react-router-dom';

function BackgroundImg() {
  const [value, setvalue] = useState(0);
  function SuggetionBox() {
    setvalue(value ^ 1);
  }
  return (
    <div className="background-img">
      <div className="search">
        <input type="text" placeholder="Search" className="search-item" onClick={SuggetionBox}></input>
        <Link to="/SearchList">
            <CiSearch className="icon" />
       </Link>
      </div>
      {value ? <Suggbox /> : ""}

    </div>
  );
}



export default BackgroundImg