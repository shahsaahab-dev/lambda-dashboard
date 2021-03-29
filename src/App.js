import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <Feed/>
      </Router>
    </div>
  );
}

export default App;
