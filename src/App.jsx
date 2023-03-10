import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Header/nav";
import Home from "./Components/Home";
import Popular from "./Components/TMDBAPI/popular";
import TopRated from "./Components/TMDBAPI/topRated";
import SignUp from "./Components/Header/Users/signUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
