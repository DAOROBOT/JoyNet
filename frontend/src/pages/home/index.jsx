import { React, useState } from "react";

import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH, FaFeatherAlt } from "react-icons/fa";
import { ArrowBack, CalendarMonth } from '@mui/icons-material';
import ProfilePage from "./components/Profile"

const Pages = {
  HomePage:          {title: "Home"          , icon : (<FaHome />)     , component: <div/> },
  ExplorePage:       {title: "Explore"       , icon : (<FaHashtag />)  , component: <div/> },
  NotificationsPage: {title: "Notifications" , icon : (<FaBell />)     , component: <div/> },
  MessagesPage:      {title: "Messages"      , icon : (<FaEnvelope />) , component: <div/> },
  BookmarksPage:     {title: "Bookmarks"     , icon : (<FaBookmark />) , component: <div/> },
  ListsPage:         {title: "Lists"         , icon : (<FaList />)     , component: <div/> },
  ProfilePage:       {title: "Profile"       , icon : (<FaUser />)     , component: <ProfilePage/> },
  MorePage:          {title: "More"          , icon : (<FaEllipsisH />), component: <div/> },
};






const Home = () => {
  const [currentPage, setCurrentPage] = useState(Pages.ProfilePage);

  const changePage = (page) => {
    setCurrentPage(page);
  }
  const navItems = Object.entries(Pages).map(([key, {icon, title}], i) => {
    return <NavItem onClick={() => {changePage(Pages[key])}} key={i} icon={icon} text={title} />
  });
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-1/5 border-r border-gray-700 p-5">
        <div className="text-2xl font-bold mb-5">Joynet</div>
        <nav className="space-y-4">
          {navItems}
        </nav>
        <button className="w-full mt-5 p-3 bg-blue-500 rounded-full text-lg font-bold flex items-center justify-center">
          <FaFeatherAlt className="mr-2" /> Post
        </button>
      </div>

      {/* Main Content */}
      <div className="w-3/5 border-r border-gray-700">
        {currentPage.component}
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

const TweetBox = () => (
  <div className="border-b border-gray-700 p-4">
    <textarea className="w-full bg-black text-white p-3 rounded-lg border border-gray-700" placeholder="What's happening?"></textarea>
    <button className="mt-3 bg-blue-500 px-4 py-2 rounded-full font-bold">Post</button>
  </div>
);

const NavItem = ({ onClick, icon, text }) => (
  <div className="flex items-center space-x-3 text-lg p-2 hover:bg-gray-800 rounded-lg cursor-pointer" onClick={onClick}>
    {icon}
    <span>{text}</span>
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
