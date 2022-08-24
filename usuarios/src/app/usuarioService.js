import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';

export function ErroValidacao(errors){
    this.errors = errors;
}

export default class UsuarioService {
    
    obterUsuarios = () => {        
        let usuarios = localStorage.getItem('_USUARIOS');
        
        return JSON.parse(usuarios);
    }    
    
    validar =(usuario)=> {
        const erros = [];
        if ((!usuario.id) || (usuario.id < 1)){
            erros.push('Informe um Id!');
        }
        if (!usuario.username){
            erros.push('Informe o User Name!');
        }
        if (!usuario.name.firstname){
            erros.push('Informe o primeiro nome!');
        }
        if (!usuario.name.lastname){
            erros.push('Informe o ultimo nome!');
        }        

        if (erros.length>0){
            throw new ErroValidacao(erros);
        }

    }
    
    salvar = (usuario) => {
        
        this.validar(usuario);

        let usuarios = localStorage.getItem('_USUARIOS');
        
        if (!usuarios){
            usuarios = []
        }
        else{
            usuarios = JSON.parse(usuarios);
        }
        usuarios.push(usuario);        

        localStorage.setItem('_USUARIOS', JSON.stringify(usuarios));
        
        toast.success('Registro incluso com sucesso');        
    }

    pesquisa =(id) => {
        
    }
}