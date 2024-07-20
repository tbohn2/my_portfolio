import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Container from "./components/container";
import './styles/app.css';

function App() {
  return (
    <Router basename='/my_portfolio'>
      <Routes>
        <Route path="/" element={<Container />} />
      </Routes>
    </Router>
  )
}

export default App
