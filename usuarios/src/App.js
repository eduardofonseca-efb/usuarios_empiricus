/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from './components/Navbar.js';

import {ToastContainer} from 'react-toastify';

import Rotas from "./rotas.js";

function App() {
  return (
    <>
      <div className="continer">
        <Navbar />             
        <ToastContainer autoClose={6000} />
        <Rotas/>
      </div>
    </>
  );
}

export default App;
