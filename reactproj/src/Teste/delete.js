import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

function Delete() {
 
    const [status,setStatus] = useState({});
    const { id } = useParams();
    const [dados,setDados] = useState({id:0,nome:"", preco:0});

    // Código colocado no UseEffect é execucato após montagem deste componente
    useEffect( ()=>{

        async function consultar(){
            // Consulta a API
            const resposta = await axios.get(`http://localhost:4000/produto/${id}`)
            // Armazena resposta no useState
            setDados(resposta.data)
        }

        consultar();

    } , []  )

    return(
        <div>
            <form onSubmit={gravar} className='formulario'>
                <button type='submit'>Deletar</button>
            </form>
            <p>Nome: {dados.nome}</p>
            <p>Preço: {dados.preco}</p>
            <p>Retorno: {status.statusText}</p>
            <p>Texto retornado pela API: 
               Excluido: {status.data == null ? "" : status.data.excluido} || 
            </p>
            <Link to='/teste'>Voltar</Link>
        </div>
    )

    // Chamada a função da API
    async function gravar(e){
        e.preventDefault(); // cancela o submit
        try{
            // Chama função da API enviando o json com os dados do novo objeto
            const resposta = await axios.delete(`http://localhost:4000/produto/${id}`);
            setStatus(resposta);
            console.log(resposta); // pressione F12 e no console veja o que veio da API no backend
        } catch(erro) {
            setStatus(`Falha: ${erro}`);
        }
    }

}
export default Delete