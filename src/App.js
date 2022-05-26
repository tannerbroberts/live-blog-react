import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Article  from './pages/Articles'
import ArticlesList from './pages/ArticlesList'

function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/articles-list" component={ArticlesList} />
            <Route path="/article" component={Article} />
          </Routes>
        </div>
    </Router>

  );
}

export default App;
