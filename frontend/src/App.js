import './App.css';
import { Route } from 'react-router-dom';
import homePage from './Pages/homePage';
import chatPage from './Pages/chatPage';
// import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <Route path='/' component= {homePage} exact />
      <Route path='/test' component= { chatPage } />
    </div>
  );
}

export default App;
