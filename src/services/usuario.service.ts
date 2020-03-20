import { UsuarioRepository } from "../Repositories/Usuarios.Repository";
import { Request } from "express";
import { Usuario } from "../Models/Entities/Usuario";

export class UsuarioService {
    private usuarioRepository: UsuarioRepository;

    constructor(){
        this.usuarioRepository = new UsuarioRepository();
    }

    async saveUser(req: Request){
        let user: Usuario = new Usuario();
        user.nombre = req.body.nombre;
        user.app = req.body.app;
        user.apm = req.body.apm;
        user.edad = req.body.edad;
        return await this.usuarioRepository.saveUser(user);
    }

    async getUser(userId: number){
        return await this.usuarioRepository.getUser(userId);
    }

    async deleteUser(userId: number){
        return await this.usuarioRepository.deleteUser(userId);
    }

    async updateUser(req: Request, userId){
        let user: Usuario = await this.getUser(userId);
        user.nombre = req.body.nombre;
        user.app = req.body.app;
        user.apm = req.body.apm;
        user.edad = req.body.edad;
        return await this.usuarioRepository.saveUser(user);
    }
}