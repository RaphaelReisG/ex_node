import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import './style.css'

function Teste() {
 
    const [json,setJson] = useState({})

    // Código colocado no UseEffect é execucato após montagem deste componente
    useEffect( ()=>{

        async function consultar(){
            // Consulta a API
            const resposta = await axios.get("http://localhost:4000/produto")
            // Armazena resposta no useState
            setJson(resposta)
            console.log(resposta.data) // pressione F12 e no console veja o que veio da API no backend
        }

        consultar();

    } , []  )

    return(
        <div className='corpo'>
            <Link to='/testeCreate'>Criar Novo</Link>
            <p>{ `Retorno da API: ${ json.statusText }` }</p>
            <table>
                <thead><tr><th>Texto</th></tr></thead>
                <tbody>
                    {json.data==null ? null : json.data.map( 
                        (x) => <tr key={x.id}><td>{x.id}</td><td>{x.nome}</td><td>{x.preco}</td>
                        <td><Link to={"/testeUpdate/" + x.id}>Alterar</Link></td>
                        <td><Link to={"/testeDelete/" + x.id}>Deletar</Link></td></tr> 
                        )
                        
                    }
                </tbody>
            </table>
            <Link to="/">Voltar</Link>
        </div>
    )
}
export default Teste