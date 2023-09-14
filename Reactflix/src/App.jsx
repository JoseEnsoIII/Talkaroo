import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import Home from "./pages/Home";
import Movie from "./pages/playing"

import Term from './pages/term'
import Contact from './pages/contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/term" element={<Term />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/playing" element={<Movie />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
