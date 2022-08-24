/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Home(){
    return (
        <div className="jumbotron">
            <h1 className="display-3">
                <font style={{'verticalAlign': 'inherit'}}>
                <font style={{'verticalAlign': 'inherit'}}>Cadastro de Usuários</font></font>
            </h1>
            <p className="lead">
                    <font style={{'verticalAlign': 'inherit'}}>
                    <font style={{'verticalAlign': 'inherit'}}>App teste CRUD Usuários.</font></font>
            </p>            
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="/cadastro-usuarios" role={"button"}>
                    <font style={{'verticalAlign': 'inherit'}}>
                        <font style={{'verticalAlign': 'inherit'}}>Cadastrar</font>
                    </font>
                </a>
            </p>
        </div>
    );
}
export default Home;