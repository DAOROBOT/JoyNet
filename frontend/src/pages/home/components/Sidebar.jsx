import React from "react";
import "./sidebar.css";
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">J</h2>
      <ul className="sidebar-menu">
        <li><FaHome /> Home</li>
        <li><FaHashtag /> Explore</li>
        <li><FaBell /> Notifications</li>
        <li><FaEnvelope /> Messages</li>
        <li><FaBookmark /> Bookmarks</li>
        <li><FaList /> Lists</li>
        <li><FaUser /> Profile</li>
        <li><FaEllipsisH /> More</li>
      </ul>
      <button className="tweet-button">Post</button>
    </div>
  );
};

export default Sidebar;
