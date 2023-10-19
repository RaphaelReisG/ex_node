// Importa componentes do express
import {Request, Response} from 'express';
// Controller
class TesteController{
    // Funções CRUD
    async index (req:Request,res:Response) {
        return res.status(200).json(
            {teste:"Função Index do TesteController acionada",dados:[{id:1,texto:"abc"},{id:2,texto:"xyz"}]}
            )
    }
    async show (req:Request,res:Response) {
        return res.status(200).json(
            {teste:`Função Show do TesteController acionada, id = ${req.params.id}`,dados:{id:1,texto:"abc"}}
        )
    }
    async store (req:Request,res:Response) {
        return res.status(200).json({teste:"Função Store do TesteController acionada",dados:req.body})
    }
    async update (req:Request,res:Response) {
        return res.status(200).json({teste:`Função Update do TesteController acionada`,dados:req.body})
    }
    async delete (req:Request,res:Response) {
        return res.status(200).json({teste:`Função Delete do TesteController acionada, id = ${req.params.id}`})
    }
}
export default TesteController