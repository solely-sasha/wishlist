import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Anytime from "./pages/Anytime";
import Christmas from "./pages/Christmas";
import Birthday from "./pages/Birthday";
import Wedding from "./pages/Wedding";
import Nav from "./components/Nav";

import CategoryPage from "./pages/CategoryPage";
import Summer from "./pages/Summer";
import SearchResults from "./pages/SearchResults";
import Search from "./pages/Search";
import NewYear from "./pages/NewYear";
import "./App.css";

function App() {
  return (
  
      <div>
        <Nav />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/christmas" element={<Christmas />} />
            <Route path="/birthday" element={<Birthday />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/anytime" element={<Anytime />} />
            <Route path="/summer" element={<Summer />} />
            <Route path="/search" element={<Search />} />
            <Route path="/newyear" element={<NewYear />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/categories/:category" element={<CategoryPage />} />
          </Routes>
        </div>
      </div>
   
  );
}

export default App;
