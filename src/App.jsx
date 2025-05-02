import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import Favorites from './pages/Favorites/Favorites';
//import Juegos from './pages/Juegos/Juegos';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './i18n'; 

function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<h2 style={{ padding: '2rem' }}>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
