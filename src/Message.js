import './App.css';

function Message({name}) {
    return (
      <div class="message">
          {name}, Вам пришло сообщение!
      </div>
    );
  }
  
  export default Message;