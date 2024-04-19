import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import SinglePost from './pages/SinglePost';

function App() {
 
  return (
    <Router>
      <Header />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/blog" exact element={<Blog />} />
      <Route path="/blog/:id" element={<SinglePost />} />
    </Routes>
  </Router>
  )
}

export default App;
