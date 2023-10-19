import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

function Update() {
 
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
                Nome: <input value={dados.nome} type="text" required onChange={ (e)=>setDados({...dados,nome:e.target.value}) }/>
                Preço: <input value={dados.preco} type="text" required onChange={ (e)=>setDados({...dados,preco:e.target.value}) }/>
                <button type='submit'>Enviar</button>
            </form>
            <p>Nome: {dados.nome}</p>
            <p>Preço: {dados.preco}</p>
            <p>Retorno: {status.statusText}</p>
            <p>Texto retornado pela API: 
               Nome: {status.data == null ? "" : status.data.nome} || 
               Preço: {status.data == null ? "" : status.data.preco} 
            </p>
            <Link to='/teste'>Voltar</Link>
        </div>
    )

    // Chamada a função da API
    async function gravar(e){
        e.preventDefault(); // cancela o submit
        try{
            // Chama função da API enviando o json com os dados do novo objeto
            const resposta = await axios.put(`http://localhost:4000/produto/${id}`,dados);
            setStatus(resposta);
            console.log(resposta); // pressione F12 e no console veja o que veio da API no backend
        } catch(erro) {
            setStatus(`Falha: ${erro}`);
        }
    }

}
export default Update