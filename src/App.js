import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="5e565e0a-fc0f-4635-9d1e-26cdb8587571"
      userName="tata"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }
    />
  );
}

export default App;