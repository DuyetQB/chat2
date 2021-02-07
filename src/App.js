
import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
    height="100vh"
    projectID= "be002709-e468-4da9-a3be-05e9841b9c03"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
  />
  );
}

export default App;
