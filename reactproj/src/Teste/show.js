import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

function Show() {
 
    const [json,setJson] = useState({})
    const { id } = useParams()

    // Código colocado no UseEffect é execucato após montagem deste componente
    useEffect( ()=>{

        async function consultar(){

            console.log(id)

            // Consulta a API
            const resposta = await axios.get(`http://localhost:4000/produto/${id}`)
            // Armazena resposta no useState
            setJson(resposta.data)
        }

        consultar();

    } , []  )

    return(
        <div>
            <p>{ `Retorno da API: ID: ${ json.id }, Nome: ${ json.nome }, Preco: ${ json.preco }` }</p>
            <Link to="/">Voltar</Link>
        </div>
    )
}
export default Show