import './App.css';
import Message from './Message';

function App() {
  let name = "Варвара";

  return (
    <div>
        <h1>Добро пожаловать</h1>
        <Message name={name} />
    </div>
  );
}

export default App;
