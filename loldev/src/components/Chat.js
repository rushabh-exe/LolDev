import React, { useState } from 'react';
import './style/Chat.css'

function Chat() {
  const [voteCount, setVoteCount] = useState(0);
  const handleUpvote = () => {
    setVoteCount(voteCount + 1);
  };

  const handleDownvote = () => {
    setVoteCount(voteCount - 1);
  };

  return (
    <div className='community-box'>
      <header>Talk With Our Community</header>
      <main className='post-pannel'>
        <div className="community-post-box">
          <div className="post-title">
            <h2>An Interesting Title</h2>
            <p className="post-username">Developer_6699</p>
          </div>
          <p className="the-post-message">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae deserunt hic blanditiis modi aut laborum dolores repellendus consequuntur. Veniam, odio.</p>
          <div className="post-buttons">
            <button className="upvote-post" onClick={handleUpvote}>+</button>
            <p className="vote-count-post">{voteCount}</p>
            <button className="downvote-post" onClick={handleDownvote}>-</button>
            <button className="comment-post" >Comment</button>
            <button className="share-post" >Share</button>
            <button className="bookmark-post">Bookmark</button>
          </div>
        </div>
        <div className="community-post-box">
          <div className="post-title">
            <h2>An Interesting Title</h2>
            <p className="post-username">Developer_6699</p>
          </div>
          <p className="the-post-message">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae deserunt hic blanditiis modi aut laborum dolores repellendus consequuntur. Veniam, odio.</p>
          <div className="post-buttons">
            <button className="upvote-post" onClick={handleUpvote}>+</button>
            <p className="vote-count-post">{voteCount}</p>
            <button className="downvote-post" onClick={handleDownvote}>-</button>
            <button className="comment-post" >Comment</button>
            <button className="share-post" >Share</button>
            <button className="bookmark-post">Bookmark</button>
          </div>
        </div>
        <div className="community-post-box">
          <div className="post-title">
            <h2>An Interesting Title</h2>
            <p className="post-username">Developer_6699</p>
          </div>
          <p className="the-post-message">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae deserunt hic blanditiis modi aut laborum dolores repellendus consequuntur. Veniam, odio.</p>
          <div className="post-buttons">
            <button className="upvote-post" onClick={handleUpvote}>+</button>
            <p className="vote-count-post">{voteCount}</p>
            <button className="downvote-post" onClick={handleDownvote}>-</button>
            <button className="comment-post" >Comment</button>
            <button className="share-post" >Share</button>
            <button className="bookmark-post">Bookmark</button>
          </div>
        </div>
        <div className="community-post-box">
          <div className="post-title">
            <h2>An Interesting Title</h2>
            <p className="post-username">Developer_6699</p>
          </div>
          <p className="the-post-message">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae deserunt hic blanditiis modi aut laborum dolores repellendus consequuntur. Veniam, odio.</p>
          <div className="post-buttons">
            <button className="upvote-post" onClick={handleUpvote}>+</button>
            <p className="vote-count-post">{voteCount}</p>
            <button className="downvote-post" onClick={handleDownvote}>-</button>
            <button className="comment-post" >Comment</button>
            <button className="share-post" >Share</button>
            <button className="bookmark-post">Bookmark</button>
          </div>
        </div>
        <div className="community-post-box">
          <div className="post-title">
            <h2>An Interesting Title</h2>
            <p className="post-username">Developer_6699</p>
          </div>
          <p className="the-post-message">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae deserunt hic blanditiis modi aut laborum dolores repellendus consequuntur. Veniam, odio.</p>
          <div className="post-buttons">
            <button className="upvote-post" onClick={handleUpvote}>+</button>
            <p className="vote-count-post">{voteCount}</p>
            <button className="downvote-post" onClick={handleDownvote}>-</button>
            <button className="comment-post" >Comment</button>
            <button className="share-post" >Share</button>
            <button className="bookmark-post">Bookmark</button>
          </div>
        </div>
        <div className="community-post-box">
          <div className="post-title">
            <h2>An Interesting Title</h2>
            <p className="post-username">Developer_6699</p>
          </div>
          <p className="the-post-message">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae deserunt hic blanditiis modi aut laborum dolores repellendus consequuntur. Veniam, odio.</p>
          <div className="post-buttons">
            <button className="upvote-post" onClick={handleUpvote}>+</button>
            <p className="vote-count-post">{voteCount}</p>
            <button className="downvote-post" onClick={handleDownvote}>-</button>
            <button className="comment-post" >Comment</button>
            <button className="share-post" >Share</button>
            <button className="bookmark-post">Bookmark</button>
          </div>
        </div>
        <div className="community-post-box">
          <div className="post-title">
            <h2>An Interesting Title</h2>
            <p className="post-username">Developer_6699</p>
          </div>
          <p className="the-post-message">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae deserunt hic blanditiis modi aut laborum dolores repellendus consequuntur. Veniam, odio.</p>
          <div className="post-buttons">
            <button className="upvote-post" onClick={handleUpvote}>+</button>
            <p className="vote-count-post">{voteCount}</p>
            <button className="downvote-post" onClick={handleDownvote}>-</button>
            <button className="comment-post" >Comment</button>
            <button className="share-post" >Share</button>
            <button className="bookmark-post">Bookmark</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Chat;
