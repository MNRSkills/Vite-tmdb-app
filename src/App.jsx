import { useState } from "react";
import { useSearchMoviesMutation } from "./features/api/apiSlice";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/nav";
import Home from "./Components/Home";
import Popular from "./Components/TMDBAPI/popular";
import TopRated from "./Components/TMDBAPI/topRated";
import SignUp from "./Components/Header/Users/signUp";
import Login from "./Components/Header/Users/login";

const [searchMovies, response] = useSearchMoviesMutation();
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* {response &&
          response.data &&
          response.data.results.map((movie) => (
            <Route
              path={`/movie/${movie.id}`}
              element={<div>{movie.title}</div>}
            />
          ))} */}
      </Routes>
    </Router>
  );
}

export default App;
