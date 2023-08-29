
import Nav from "./components/Nav";

import Footer from "./components/Footer";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Books from "./pages/Books"; 
import Book from './UI/Book'

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home}/>
      <Route path="/Books" component={Books}/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
