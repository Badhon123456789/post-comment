import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details'
import Comment from './Components/Comment/Comment'
import Context from './Context/Context';

function App() {
  return (
    <Context>
      <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/detail/:id' element={<Details/>}/>
          <Route path='/comment/:postId' element={<Comment/>}/>
        </Routes>
      </Router>
    </div>
    </Context>
  );
}

export default App;
