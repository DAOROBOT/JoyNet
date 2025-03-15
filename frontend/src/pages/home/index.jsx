import { React, useState } from "react";
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH, FaFeatherAlt } from "react-icons/fa";
import { ArrowBack, CalendarMonth } from '@mui/icons-material';
import {
    Button,
    IconButton,
    Typography,
    Avatar,
} from "@mui/material";

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
        <Profile/>
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

const TextWithSubText = ({mainText, subText}) => (
  <div className="flex flex-col justify-start text-start w-fit">
    <span className="align-center text-lg font-bold"> {mainText} </span>
    <span className="align-center text-gray-500 text-[0.75em]">{subText}</span>
  </div>
)

const Profile = () => {
  const [switchCurrentItem, setSwitchCurrentItem] = useState(0);
  const switchItemClicked = (index) => {
    setSwitchCurrentItem(index);
  };
  const switches = ["Posts", "Replies", "Highlights", "Articles", "Media", "Likes"].map((label, i) => <SwitchItem key={i}  index={i} label={label} isSelected={switchCurrentItem === i} onClick={() => switchItemClicked(i)} />);
  return (
    <div>
      <div className="flex justify-start gap-3 ps-3 pt-1 pb-1">
        <IconButton className="text-white bg-transparent">
          <ArrowBack fontSize="small" className="w-4! fill-[rgb(255_255_255)]!"/>
        </IconButton>
        <TextWithSubText mainText="Tuong" subText="0 posts"/>
      </div>
      <div className="w-full flex flex-col justify-end h-[200px] bg-gray-700!">
        <Avatar className="relative! w-26! h-26! border-3 border-black! ms-2 inset-y-13!"/>
      </div>
      <div className="w-full h-fit relative flex justify-end place-content-top">
        <Button variant="outlined" className="normal-case! border-1! border-[rgb(83,100,113)]! rounded-[20px]! h-fit p-2 place-self-top text-top! text-white! mt-2! me-2!">
          Set up profile
        </Button>
      </div>
      <div className="w-full mt-4 flex flex-col ps-4 gap-3">
        <TextWithSubText mainText="Pross" subText="@pross1312"/>
        <div className="flex text-gray-500! gap-2 text-center">
          <CalendarMonth fontSize="small"/>
          <span>Joined August 2021 </span>
        </div>
        <div className="flex text-gray-500! gap-10 text-center">
          <span className="flex gap-1 items-center">
            <span className="text-sm font-bold text-white!">16</span>
            <span className="text-sm">Following</span>
          </span>
          <span className="flex gap-1 align-middle items-center">
            <span className="text-sm font-bold text-white">16</span>
            <span className="text-sm">Followers</span>
          </span>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-evenly border-b-1 border-b-gray-500!">
          {switches}
        </div>
      </div>
    </div>
  );
}

const SwitchItem = ({label, isSelected, onClick}) => (
  <div onClick={onClick}>
    <Button className={"normal-case! text-gray-500! hover:bg-gray-700! border-[0px] font-bold! " + (isSelected ? "text-white!" : "")}>
      {label}
    </Button>
    <div className={isSelected ? "w-full rounded h-[4px] bg-blue-400!" : "hidden"}></div>
  </div>
)

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
