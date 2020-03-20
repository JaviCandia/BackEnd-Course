import { Producto } from '../Models/Entities/Producto';
import { Request, Response } from 'express';
import { ProductoService } from '../services/producto.service';

export class productoController {
    // notación lower Camel case
    private productoService: ProductoService;

    constructor() {
        this.productoService = new ProductoService();
    }

    async saveProduct(req: Request, res: Response) {
        await this.productoService.saveProduct(req);

        return res.status(201).send();
    }

    async getProduct(req: Request, res: Response){
        let productId: number = +req.params.productId;
        let product: Producto = await this.productoService.getProduct(productId);

        return res.status(200).send(product);
    }

    // async getProducts(req: Request, res: Response){
    //     await this.productoService.getProducts();

    //     return res.status(200);
    // }

    async deleteProduct(req: Request, res: Response){
        let productId: number = +req.params.productId;
        await this.productoService.deleteProduct(productId);

        return res.status(200).send();
    }

    async updateProduct(req: Request, res: Response){
        let productId: number = +req.params.productId;
        await this.productoService.updateProduct(req, productId);

        return res.status(204).send();
    }
}

/*
    UN BANCKEND SE COMPONE DE 3 CAPAS:

    capa de datos. // se encarga de conectar a la bd y hace persistir la información
    capa de servicios. // validación de negocios.
    capa de controladores. // reciben solicitudes y mandan respuestas.
*/


    // async getProductos(req: Request, res: Response) {
    //     return res.status(200).send(await this.productoService.getProducts());
    // }