import { Usuario } from "../Models/Entities/Usuario";
import { UsuarioService } from "../services/usuario.service";
import { Request, Response } from "express";

export class usuarioController {
    // notación lower Camel case
    private usuarioService: UsuarioService;

    constructor() {
        this.usuarioService = new UsuarioService();
    }

    async saveUser(req: Request, res: Response) {
        await this.usuarioService.saveUser(req);

        return res.status(201).send();
    }

    async getUser(req: Request, res: Response){
        let userId: number = +req.params.userId;
        let user: Usuario = await this.usuarioService.getUser(userId);

        return res.status(200).send(user);
    }

    async deleteUser(req: Request, res: Response){
        let userId: number = +req.params.userId;
        await this.usuarioService.deleteUser(userId);

        return res.status(200).send();
    }

    async updateUser(req: Request, res: Response){
        let userId: number = +req.params.userId;
        await this.usuarioService.updateUser(req, userId);

        return res.status(204).send();
    }
}