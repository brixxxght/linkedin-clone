import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import coverPhoto from "./myavatar.jpeg";

const Sidebar = () => {

    const recentItem = (topic) => {
        return (
            <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
        )
    }

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={coverPhoto} alt="cover" />
        <Avatar className="sidebar__avatar" />
        <h2>Bright Green</h2>
        <h4>greenbrightsmart@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed you</p>
          <p className="sidebar__statNumber">5,545</p>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <p className="sidebar__statNumber">2,400</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('solidity')}
        {recentItem('javascript')}
        {recentItem('front-end')}
        {recentItem('design')}
        {recentItem('developer')}
        {recentItem('style')}
      </div>
    </div>
  );
};

export default Sidebar;
