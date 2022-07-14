import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";

const App = () => {
  return (
    <div>
      <p>Hello</p>
      <Link to='home'>Home</Link>
      <Link to='other'>Other</Link>
      <Link to='other2'>Other2</Link>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='other' element={<div>Other Places</div>} />
        <Route path='other2' element={<div>Second Place under Other2 route</div>} />
      </Routes>
    </div>
  );
};

export default App;
