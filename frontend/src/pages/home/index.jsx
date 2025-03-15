import React from "react";
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH, FaFeatherAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-1/5 border-r border-gray-700 p-5">
        <div className="text-2xl font-bold mb-5">Joynet</div>
        <nav className="space-y-4">
          <NavItem icon={<FaHome />} text="Home" />
          <NavItem icon={<FaHashtag />} text="Explore" />
          <NavItem icon={<FaBell />} text="Notifications" />
          <NavItem icon={<FaEnvelope />} text="Messages" />
          <NavItem icon={<FaBookmark />} text="Bookmarks" />
          <NavItem icon={<FaList />} text="Lists" />
          <NavItem icon={<FaUser />} text="Profile" />
          <NavItem icon={<FaEllipsisH />} text="More" />
        </nav>
        <button className="w-full mt-5 p-3 bg-blue-500 rounded-full text-lg font-bold flex items-center justify-center">
          <FaFeatherAlt className="mr-2" /> Post
        </button>
      </div>

      {/* Main Content */}
      <div className="w-3/5 border-r border-gray-700">
        <div className="p-4 border-b border-gray-700 text-xl font-bold">Home</div>
        <TweetBox />
        <Feed />
      </div>

      {/* Right Sidebar */}
      <div className="w-1/5 p-5">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Trending</h3>
          <TrendingItem topic="ReactJS" tweets="120K" />
          <TrendingItem topic="AI Development" tweets="85K" />
          <TrendingItem topic="Tech News" tweets="75K" />
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, text }) => (
  <div className="flex items-center space-x-3 text-lg p-2 hover:bg-gray-800 rounded-lg cursor-pointer">
    {icon}
    <span>{text}</span>
  </div>
);

const TweetBox = () => (
  <div className="border-b border-gray-700 p-4">
    <textarea className="w-full bg-black text-white p-3 rounded-lg border border-gray-700" placeholder="What's happening?"></textarea>
    <button className="mt-3 bg-blue-500 px-4 py-2 rounded-full font-bold">Post</button>
  </div>
);

const Feed = () => (
  <div>
    <Tweet user="Elon Musk" text="Excited about the future of AI!" />
    <Tweet user="React Dev" text="React 19 is going to be amazing!" />
    <Tweet user="Tech Guru" text="Technology is evolving faster than ever!" />
  </div>
);

const Tweet = ({ user, text }) => (
  <div className="border-b border-gray-700 p-4">
    <div className="font-bold">{user}</div>
    <div>{text}</div>
  </div>
);

const TrendingItem = ({ topic, tweets }) => (
  <div className="p-2">
    <div className="font-bold">{topic}</div>
    <div className="text-gray-400 text-sm">{tweets} Tweets</div>
  </div>
);

export default Home;
