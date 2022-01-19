import './App.css';
import Home from './components/Home';
import About from './components/About';

import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Homepage</Link>
        <Link to="/about">About us</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
