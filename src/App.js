import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="d6c185fd-66df-4993-8b4c-207bbed4333b"
      userName="hoko"
      userSecret="1234"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
