import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="btn btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/contacto" className="btn btn-dark">
            Contacto
          </Link>
          <Link to="/nosotros" className="btn btn-dark active">
            Nosotros
          </Link>
        </div>
        <hr/>
        <Routes >
          <Route path="/" 
            element={<Inicio/>}>
          </Route>

          <Route path="/contacto" 
            element={<Contacto/>}>
          </Route>

          <Route path="/nosotros" 
            element={<Nosotros/>}>
          </Route>
        </Routes>

    </div>
    </Router>

  );
}

export default App;
