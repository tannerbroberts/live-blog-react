import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavigationLayout from './components/NavigationLayout'
import Home from './components/Home'
import About from './components/About'
import Article  from './components/Article'
import ArticlesList from './components/ArticlesList'

function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={ <NavigationLayout /> }>
              <Route index element={ <Home /> } ></Route>
              <Route path="about" element={ <About /> } exact />
              <Route path="article" element={ <Article /> } />
              <Route path="articles-list" element={ <ArticlesList /> } />
            </Route>
          </Routes>
        </div>
    </Router>

  );
}

export default App;
