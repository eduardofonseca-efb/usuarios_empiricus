/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Navbar(){
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/" >
                    <font style={{'verticalAlign': 'inherit'}}>
                        <font style={{'verticalAlign': 'inherit'}}>Edesoft & Empíricus</font>
                    </font>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="true" aria-label="Alternar de navegação">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse show" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <font style={{'verticalAlign': 'inherit'}}>
                            <font style={{'verticalAlign': 'inherit'}}>Home</font>
                        </font>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/cadastro-usuarios">
                        <font style={{'verticalAlign': 'inherit'}}><font style={{'verticalAlign': 'inherit'}}>Cadastrar</font></font>
                    </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/consulta-usuarios"><font style={{'verticalAlign': 'inherit'}}><font style={{'verticalAlign': 'inherit'}}>Consultar</font></font></a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    );
}
export default Navbar;