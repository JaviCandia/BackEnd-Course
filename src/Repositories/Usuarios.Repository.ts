import { Repository } from "typeorm";
import { Usuario } from "../Models/Entities/Usuario";
import { connect } from "../Config/Database.Connection";

export class UsuarioRepository {
    private repository: Repository<Usuario>;

    async getConnection() {
        if (!this.repository) {
            this.repository = (await connect()).getRepository(Usuario);
        }
    }

    async saveUser(user: Usuario) {
        await this.getConnection();
        return await this.repository.save(user);
    }

    async getUser(userId: number) {
        await this.getConnection();
        return await this.repository.findOne({ id: userId });
    }

    async deleteUser(userId: number) {
        await this.getConnection();
        return await this.repository.delete({ id: userId })
    }
}

// Acceso a datos