import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Errorpage from "./Pages/Errorpage";
import Register from "./Pages/password/Register";
import Login from "./Pages/password/Login";
import Change from "./Pages/password/Change";
import Reset from "./Pages/password/Reset";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/change" element={<Change />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;