import React from "react";

function Home2() {

  
  return (
    <>
      {/*<!--main-left-->*/}

      <div className="left-content">
        <div  className="user-info-box">
          <img
            src="https://picsum.photos/200/200"
            alt=""
            className="background-image"
          />
          <div className="userpfpdiv">
            <img
              src="https://picsum.photos/100/100"
              alt=""
              className="user-pfp"
            />
          </div>
          <h3 className="username-inbox">Username</h3>
          <p className="user-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            tempore atque nobis, nisi nostrum a nam eum facilis maiores quia.
          </p>
          <p className="user-email">xyz@gmail.com</p>
          <p className="user-contact">123xxxx321</p>
        </div>
        
        <div className="chat-box">
          <header><h3>Chat Assistant</h3> <button
              className="cancel-button"
              onClick={() => {
                const chatBox = document.querySelector(".chat-box");
                if (chatBox.classList.contains("show-chat-box")) {
                  chatBox.classList.add("hide-chat-box");
                  chatBox.classList.remove("show-chat-box");
                }
              }}
            >
              X
            </button></header>
          <div className="chat">
            <p className="bot-message">I am here to help you!</p>
          </div>
          <footer>
            <input type="text" name="" id="user-input-message" />
            <button className="send-button">҉</button>
          </footer>
        </div>
        <button
            className="open-chat-button"
            onClick={() => {
              const chatBox = document.querySelector(".chat-box");
              if (chatBox.classList.contains("show-chat-box")) {chatBox.classList.add("hide-chat-box");chatBox.classList.remove("show-chat-box");} 
              else {chatBox.classList.add("show-chat-box");chatBox.classList.remove("hide-chat-box");}}}>Bot</button>
      </div>
    </>
  );
}

export default Home2;
