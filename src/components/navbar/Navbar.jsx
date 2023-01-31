import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" className="text" placeholder="Search" />
          <SearchIcon className="icon" />
        </div>

        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>

          <div className="item">
            <DarkModeIcon className="icon" />
          </div>

          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>

          <div className="item">
            <CircleNotificationsOutlinedIcon className="icon" />
            <div className="couter">1</div>
          </div>

          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="couter">2</div>

          </div>

          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>

          <div className="item">
            <img src="https://cdn.tgdd.vn/Files/2018/01/29/1062931/1_1280x720-800-resize.jpg" alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
