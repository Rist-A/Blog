import React, { useEffect, useState } from "react";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png"
import { Link } from "react-router-dom";
import Logo from "../assets/B.png"
import Menu from "../Components/Menu";

const Single = () => {
  
  return (
    <div className="single">
      <div className="content">
        <img src={Logo} alt="" />
        <div className="user">
           <img
            src={Logo}
            alt=""
          />
          <div className="info">
            <span>Rist</span>
            <p>Posted now</p>
          </div>
           
            <div className="edit">
              <Link to={`/write?edit=2`} >
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" />
            </div>
          
        </div>
        <h1>lorem me heading</h1>
        <p
        
        > Using Git and GitHub in VS Code is simple with the built-in Git integration and terminal commands. After completing the initial setup, pushing changes becomes easy with just a few commands or even through the Source Control GUI in VS Code. This command stages all the changes in the project. If you want to stage specific files, replace . with the file name (e.g., git add index.html).

        Alternatively, if you're using the Source Control feature in VS Code, you can click the + icon next to the modified files to stage them.</p>      </div>
      <Menu/>
    </div>
  );
};

export default Single;