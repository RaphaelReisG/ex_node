import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

class ProdutoController {
  async index(req: Request, res: Response) {
    const prisma = new PrismaClient();
    const produtos = await prisma.produto.findMany(
      // recupera todos os produto
      {
        orderBy: { nome: "asc" },
        select: {
          id: true,
          nome: true, // seleciona as propriedade desejadas de Produto
          preco: true
        },
      }
    );
    res.status(200).json(produtos);
  }

  async show(req: Request, res: Response) {
    const prisma = new PrismaClient();
    const produto = await prisma.produto.findUnique(
      // busca produto conforme where
      {
        where: { id: Number(req.params.id) },
        select: {
          id: true, // seleciona as propriedade desejadas de Produto
          nome: true,
          preco: true
        },
      }
    );
    res.status(200).json(produto);
  }

  async store(req: Request, res: Response) {
    const prisma = new PrismaClient();
    //obtém json vindo do cliente. Exemplo Formato: {nome: "Prego", preco:2.3, categoriaId:1}
    const { nome, preco, categoriaId } = req.body;
    const novoPoduto = await prisma.produto.create({
      data: {
        nome: nome,
        preco: preco
      },
      select: {
        id: true,
        nome: true,
        preco: true
      },
    });
    res.status(200).json(novoPoduto);
  }

  async update(req: Request, res: Response) {
    const prisma = new PrismaClient();
    const { nome, preco } = req.body;
    const produtoAlterado = await prisma.produto.update({
      where: { id: Number(req.params.id) },
      data: {
        nome: nome,
        preco: preco
      },
      select: {
        id: true,
        nome: true,
        preco: true
      },
    });
    res.status(200).json(produtoAlterado);
  }

  async delete(req: Request, res: Response) {
    const prisma = new PrismaClient();
    await prisma.produto.delete({
      where: { id: Number(req.params.id) },
    });
    res.status(200).json({ excluido: true });
  }
}
export default ProdutoController;