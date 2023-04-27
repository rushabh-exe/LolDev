import React from 'react';

function Profile() 
    {
    
  return (
    <>
{/*<!--main-left-->*/}

  <div className="left-content">
    <div className="user-info-box">
      <img src="https://picsum.photos/100/100" alt="" className="background-image" />
      <img src="https://picsum.photos/100/100" alt="" className="user-pfp" />
      <h3 className="username-inbox">Username</h3>
      <p className="user-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi tempore atque nobis, nisi nostrum a nam eum facilis maiores quia.</p>
      <p className="user-email">xyz@gmail.com</p>
      <p className="user-contact">123xxxx321</p>
      <button className="open-chat-box">Open Chat Box</button>
    </div>
    <div className="chat-box">
      <header>Chat Assistant</header>
      <div className="chat">
        <p className="bot-message">I am here to help you!</p>
      </div>
      <footer>
        <input type="text" name="" id="user-input-message" />
        <button className="send-button">OK</button>
        <button className="cancel-button">Cancel</button>
      </footer>
    </div>
  </div>
</>
  );
}

export default Profile;
