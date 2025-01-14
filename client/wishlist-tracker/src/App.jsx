import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Anytime from "./pages/Anytime";
import Christmas from "./pages/Christmas";
import Birthday from "./pages/Birthday";
import Wedding from "./pages/Wedding";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/christmas" element={<Christmas />} />
            <Route path="/birthday" element={<Birthday />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/anytime" element={<Anytime />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
