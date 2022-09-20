import './App.css';
import React, { useState } from "react";
import Message from './Message';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [author, setName] = useState('');
  const [text, setText] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();
   
    setMessageList( prevState => [...prevState,{
      text: text,
      author: author
    }])
  }

  return (
    <div>
        <h1>Добро пожаловать</h1>
          <form onSubmit={handelSubmit}>
            <label>Ваше имя: </label>
            <input value={author} onChange={(event)=>setName(event.target.value)}/>
            <label>Ваше сообщение: </label>
            <input  value={text} onChange={(event)=>setText(event.target.value)}/>
            <button type='submit'>Отправить</button>
          </form>
          <Message messageList={messageList} setMessageList={setMessageList}/>
    </div>
  );
}

export default App;
