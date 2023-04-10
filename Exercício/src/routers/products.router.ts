import { Request, Response, Router } from 'express';
import ProductsService from '../services/products.service';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const products = await ProductsService.getAll();
    res.status(200).send(products);
});

router.get('/:id', async (req: Request, res: Response) => {
    const product = await ProductsService.getById(parseInt(req.params.id));
    if(!product) {
        return res.status(400).send({message: 'Produto não encontrado!'})
    }
    res.status(200).send(product);
});

router.post('/', async (req: Request, res: Response) => {
    const product = await ProductsService.getById(req.body.id);
    if(product) {
        return res.status(400).send({message: 'Id já cadastrado!'})
    }
    await ProductsService.create(req.body);
    res.status(201).send({message: 'Produto cadastrado com sucesso!'});  
});

router.delete('/remove/:id', async (req: Request, res: Response) => {
    const product = await ProductsService.getById(parseInt(req.params.id));
    if(!product) {
        return res.status(400).send({message: 'Produto não encontrado!'})
    }
    await ProductsService.remove(parseInt(req.params.id));
    res.status(200).send({message: 'Produto removido com sucesso!'});      
});

router.put('/:id', async (req: Request, res: Response) => {
    const product = await ProductsService.getById(parseInt(req.params.id));
    if(!product) {
        return res.status(400).send({message: 'Produto não encontrado!'})
    }
    await ProductsService.update(parseInt(req.params.id), req.body);
    res.status(200).send({message: 'Produto atualizado com sucesso!'});       
});

export default router;