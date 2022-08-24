import React from "react";
import { BrowserRouter as Router,  Route,  Routes } from 'react-router-dom';
import Home from "./views/Home.js";
import CadastroUsuarios from "./views/cadastroUsuarios.js";
import ConsultaUsuarios from "./views/consultaUsuarios.js";

export default () => {
    return (
        <Router>
            <Routes>                
                <Route  path="/cadastro-usuarios" element={<CadastroUsuarios/>}/>                
                <Route  path="/consulta-usuarios" element={<ConsultaUsuarios/>}/>
                <Route  path="/" element ={<Home/>}/>
            </Routes>    
        </Router>
    );
}