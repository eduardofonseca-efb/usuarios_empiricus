import React from "react";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import UsuarioService from "../app/usuarioService";

const estadoInicial ={
    id: 0,
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: ""
    },
    phone: ""
};

class CadastroUsuarios extends React.Component{
       
    state =estadoInicial;

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    onChange = (event) =>{
        const valor = event.target.value;
        var nomeField = event.target.name;        
        if (nomeField.includes('.'))
        {
            var fieldName = {...this.state.name};                       
            const campos = nomeField.split('.');
            console.log(campos[0]);
            if (campos[1]==='firstname')
            {
                fieldName.firstname = valor;
            }
            else if (campos[1]==='lastname')
            {                
                fieldName.lastname = valor;
            }
                                   
            this.setState({name:fieldName});                
        }        
        else
        {
            this.setState({[nomeField]: valor});
        }
    }

    onSubimit = (event) => {
        const usuario = {
            id: this.state.id,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            name: {
              firstname: this.state.name.firstname,
              lastname: this.state.name.lastname
            },
            phone: this.state.phone        
        }
        try{
            this.service.salvar(usuario); 
            this.limpaCampo();
            this.setState({sucesso:true});
        }catch (erro){
            const errors = erro.errors;
            errors.map(msg=>{
                toast.error(msg);
            });            
        }               
    }

    limpaCampo = () => {
        this.setState(estadoInicial);
    }
    
    render(){
        return(
            <div className="card">                
                <div className="card-header">
                    Cadastro Usuários
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2">
                            <label>Id*</label>
                            <input type={"text"} name = "id" value ={this.state.id} className = "form-control" onChange = {this.onChange}/>
                        </div>
                        <div className="col-md-8">
                            <label>User Name*</label>
                            <input type={"text"}  name = "username" value = {this.state.username} className = "form-control" onChange = {this.onChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <label>Primeiro Nome</label>
                            <input type={"text"} name = "name.firstname" value = {this.state.name.firstname} className = "form-control" onChange = {this.onChange}/>                            
                        </div>
                        <div className="col-md-6">
                        <label>Segundo Nome</label>
                            <input type={"text"} name = "name.lastname" value = {this.state.name.lastname} className = "form-control" onChange = {this.onChange}/>                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label>E-Mail</label>
                            <input type={"text"} name = "email" value = {this.state.email} className = "form-control" onChange = {this.onChange}/>                            
                        </div>
                        <div className="col-md-6">
                            <label>Senha</label>
                            <input type={"password"} name = "password" value = {this.state.password} className = "form-control" onChange = {this.onChange}/>                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label>Telefone</label>
                            <InputMask mask="+55(99)9999-9999" name = "phone" value = {this.state.phone} className = "form-control" onChange = {this.onChange}/>                            
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-1">
                            <button onClick={this.onSubimit} className="btn btn-success">Salvar</button>
                        </div>
                        <div className="col-md-1">
                            <button onClick={this.limpaCampo}  className="btn btn-primary">Limpar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CadastroUsuarios;
