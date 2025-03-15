import React, { useState } from "react";
import "./feed.css";
import { FaRegComment, FaRetweet, FaHeart, FaShare } from "react-icons/fa";

const Feed = () => {
  const [posts, setPosts] = useState([
    { id: 1, user: "Elon Musk", handle: "@elonmusk", content: "Just launched a new rocket! 🚀" },
    { id: 2, user: "React Dev", handle: "@reactdev", content: "React 19 is coming soon!" },
    { id: 3, user: "Tech Guy", handle: "@techguy", content: "AI is taking over the world! 🤖" },
  ]);

  return (
    <div className="feed">
      <h2>Home</h2>
      <div className="tweet-box">
        <input type="text" placeholder="What’s happening?" />
        <button>Post</button>
      </div>
      <div className="tweets">
        {posts.map((post) => (
          <div key={post.id} className="tweet">
            <h3>{post.user} <span>{post.handle}</span></h3>
            <p>{post.content}</p>
            <div className="tweet-actions">
              <FaRegComment /> <FaRetweet /> <FaHeart /> <FaShare />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
