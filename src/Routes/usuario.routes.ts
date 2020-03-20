import { routeInterface } from "../Models/route.interface";
import { usuarioController } from "../Controllers/usuario.controller";

export const usuarioRoutes: Array<routeInterface> = [
    {
        url: "/user",
        method: "post",
        controller: usuarioController,
        target: "saveUser"
    },
    {
        url: "/user/:userId",
        method: "get",
        controller: usuarioController,
        target: "getUser"
    },
    {
        url: "/user/:userId",
        method: "delete",
        controller: usuarioController,
        target: "deleteUser"
    },
    {
        url: "/user/:userId",
        method: "put",
        controller: usuarioController,
        target: "updateUser"
    }
]