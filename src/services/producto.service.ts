import { ProductoRepository } from "../Repositories/Productos.Repository";
import { Request } from "express";
import { Producto } from "../Models/Entities/Producto";

export class ProductoService {
    private productoRepository: ProductoRepository;

    constructor(){
        this.productoRepository = new ProductoRepository();
    }

    async saveProduct(req: Request){
        let product: Producto = new Producto();
        product.producto = req.body.producto;
        product.precio = req.body.precio;
        return await this.productoRepository.saveProduct(product);
    }

    async getProduct(productId: number){
        return await this.productoRepository.getProduct(productId);
    }
    
    // async getProducts(){
    //     return await this.productoRepository.getProducts();
    // }

    async deleteProduct(productId: number){
        return await this.productoRepository.deleteProduct(productId);
    }

    async updateProduct(req: Request, productId){
        let product: Producto = await this.getProduct(productId);
        product.producto = req.body.producto;
        product.precio = req.body.precio;
        return await this.productoRepository.saveProduct(product);
    }
}