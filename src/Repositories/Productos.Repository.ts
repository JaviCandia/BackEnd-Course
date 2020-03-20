import { Repository } from "typeorm";
import { Producto } from '../Models/Entities/Producto';
import { connect } from "../Config/Database.Connection";

export class ProductoRepository {
    private repository: Repository<Producto>;

    async getConnection() {
        if (!this.repository) {
            this.repository = (await connect()).getRepository(Producto);
        }
    }

    async saveProduct(product: Producto) {
        await this.getConnection();
        return await this.repository.save(product);
    }

    async getProduct(productId: number) {
        await this.getConnection();
        return await this.repository.findOne({ id: productId });
    }

    // async getProducts(){
    //     await this.getConnection();
    //     return await this.repository.find();
    // }

    async deleteProduct(productId: number) {
        await this.getConnection();
        return await this.repository.delete({ id: productId })
    }
}

// Acceso a datos