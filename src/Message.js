import './App.css';
import React, { useEffect } from "react";

function Message({messageList, setMessageList}) {

  useEffect(() => {
    setTimeout(() => {
      robot()
    },2000)
  },[messageList])

  function robot(){
    const user = messageList[messageList.length - 1];
    if(user && user.author!="Админа"){
      setMessageList( prevState => [...prevState, {
        author: 'Админа',
        text: `Привет ${user.author}` 
      }])
    }
  }

    return (
      <div>
      {messageList.map((message => {
        return(
          <div class="message">
            Чат: "{message.text}" от {message.author}
          </div>
        )
      }))}
      </div>
    );
  }
  
  export default Message;