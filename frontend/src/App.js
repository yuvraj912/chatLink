import './App.css';
import { Route } from 'react-router-dom';
import homePage from './Pages/homePage';
import ChatPage from './Pages/chatPage';
// import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <Route path='/' component= {homePage} exact />
      <Route path='/random' component= { ChatPage } />
    </div>
  );
}

export default App;
