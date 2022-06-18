import React from "react";
import Signup from "./Component/Signup";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
