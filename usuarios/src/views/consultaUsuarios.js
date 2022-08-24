import React from "react";
import UsuarioService from "../app/usuarioService";
import { useNavigate } from "react-router-dom";

export default class ConsultaUsuarios extends React.Component{
    state = {
        usuarios: []
    }

    constructor() {
        super();
        this.service = new UsuarioService();
    }

    componentDidMount(){
        const  usuarios = this.service.obterUsuarios();
        this.setState({usuarios});        
    }  
    
    preparaEditar = (id) => {  
        let navigate = useNavigate();
        React.useEffect(() => {            
              navigate('/');            
          });
              
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Consulta Usuários
                </div>
                <div className="card-body">
                    <table className ="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>User Name</th>
                                <th>Primeiro Nome</th>
                                <th>Segundo Name</th>
                                <th>E-mail</th>                        
                                <th>Telefone</th>                        
                                <th></th>
                            </tr>
                        </thead>    
                        <tbody>
                            {
                                this.state.usuarios.map((usuario, index)=> {
                                    return(
                                        <tr key={index}>
                                            <th>{usuario.id}</th>
                                            <th>{usuario.username}</th>
                                            <th>{usuario.name.firstname}</th>
                                            <th>{usuario.name.lastname}</th>
                                            <th>{usuario.email}</th>                                        
                                            <th>{usuario.phone}</th>
                                            <th>
                                                <button onClick={()=>{  
                                                                 let navigate = useNavigate();
                                                                  React.useEffect(() => {            
                                                                        navigate('/');            
                                                                    });
              
    }} className="btn btn-primary">Editar</button>
                                                <button className="btn btn-danger">Remover</button>
                                            </th>
                                        </tr>
                                    )        
                                })
                            }
                        </tbody>                
                    </table>
                </div>
            </div>
        );
    }
}