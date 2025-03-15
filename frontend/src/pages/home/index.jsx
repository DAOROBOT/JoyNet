import React, { useState } from "react";
import "./index.css";
import {
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaList,
  FaUser,
  FaEllipsisH,
  FaFeatherAlt,
} from "react-icons/fa";

const Home = () => {
  const [tweets, setTweets] = useState([
    { user: "Elon Musk", text: "Excited about the future of AI!" },
    { user: "Đặng Vĩnh Tường", text: "Tech supporter cho Đạo :))" },
    { user: "Đạo", text: "Cảm ơn Tường" },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);

  const addTweet = (newTweet) => {
    setTweets([newTweet, ...tweets]);
  };

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

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
        <TweetBox addTweet={addTweet} />
        <div className="tweetsContainer overflow-y-auto max-h-[500px] p-4">
          {tweets.map((tweet, index) => (
            <Tweet key={index} {...tweet} openImage={openImage} />
          ))}
        </div>
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

      {/* Hiển thị ảnh khi click vào */}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button
            className="absolute top-4 right-6 bg-gray-800 hover:bg-gray-600 text-white font-bold py-1 px-3 rounded-full text-lg"
            onClick={closeImage}
          >
            ✕
          </button>
          <img src={selectedImage} alt="Selected" className="max-w-[80vw] max-h-[80vh] rounded-lg shadow-lg" />
        </div>
      )}
    </div>
  );
};

const NavItem = ({ icon, text }) => (
  <div className="flex items-center space-x-3 text-lg p-2 hover:bg-gray-800 rounded-lg cursor-pointer">
    {icon}
    <span>{text}</span>
  </div>
);

const TweetBox = ({ addTweet }) => {
  const [tweetText, setTweetText] = useState("");
  const [image, setImage] = useState(null);

  const handleTweet = () => {
    if (tweetText || image) {
      addTweet({ user: "You", text: tweetText, image });
      setTweetText("");
      setImage(null);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    } else {
      alert("Please select a valid image file.");
    }
  };

  return (
    <div className="border-b border-gray-700 p-4">
      <textarea
        className="w-full bg-black text-white p-3 rounded-lg border border-gray-700"
        placeholder="What's happening?"
        value={tweetText}
        onChange={(e) => setTweetText(e.target.value)}
      ></textarea>
      <input type="file" accept="image/*" className="mt-2 text-white" onChange={handleFileChange} />
      {image && (
        <div className="relative mt-2">
          <img src={image} alt="Preview" className="max-w-[150px] rounded-lg" />
          <button
            className="absolute top-0 right-0 bg-black text-white p-1 rounded-full"
            onClick={() => setImage(null)}
          >
            ✖
          </button>
        </div>
      )}
      <button className="mt-3 bg-blue-500 px-4 py-2 rounded-full font-bold" onClick={handleTweet}>Post</button>
    </div>
  );
};

const Tweet = ({ user, text, image, openImage }) => (
  <div className="border-b border-gray-700 p-4">
    <div className="font-bold">{user}</div>
    <div>{text}</div>
    {image && (
      <img src={image} alt="Tweet" className="mt-2 rounded-lg max-w-[200px] cursor-pointer" onClick={() => openImage(image)} />
    )}
  </div>
);

const TrendingItem = ({ topic, tweets }) => (
  <div className="p-2">
    <div className="font-bold">{topic}</div>
    <div className="text-gray-400 text-sm">{tweets} Tweets</div>
  </div>
);

export default Home;
