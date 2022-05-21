import React, { useState, useEffect } from 'react';
import Upload from './Pages/Upload';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Delete from './Pages/Delete';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <title>QR Parsing Service</title>
        <BrowserRouter>
          <div>
            <Link className="App-link" to="/">Home</Link>
            <Link className="App-link" to="/upload">Upload</Link>
            <Link className="App-link" to="/search">Search</Link>
            <Link className="App-link" to="/delete">Delete</Link>
          </div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/search" element={<Search />} />
            <Route path="/delete" element={<Delete />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
