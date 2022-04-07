import {
  ChatEngine
} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
  if (!localStorage.getItem('username') && !localStorage.getItem('password'))
    return <LoginForm />

  return (<ChatEngine height="100vh"
    projectID="5e565e0a-fc0f-4635-9d1e-26cdb8587571"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={
      (chatAppProps) => < ChatFeed {
        ...chatAppProps
      }
      />} />
  );
}

export default App;