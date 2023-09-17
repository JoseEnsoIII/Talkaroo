import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import Home from "./pages/Home";
import Movie from "./pages/playing"

import Term from './pages/term'
import Contact from './pages/contact'

import Login from './Modal/login'
import Register from './Modal/reg'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/term" element={<Term />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/playing" element={<Movie />} />

        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Register />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
