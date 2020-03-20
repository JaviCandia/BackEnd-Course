import { PingController } from "../Controllers/ping.controller";
import { productoController } from "../Controllers/producto.controller";
import { usuarioController } from "../Controllers/usuario.controller";

export class Initializer {
    // instanciar el nuevo controller, inicializarlo en el constructor y usarlo en el switch
    private pingController: PingController;
    private productoController: productoController; 
    private usuarioController: usuarioController;

    // Se crea una copia en memoria, para que no se estén creando varias veces.
    constructor() {
        this.pingController = new PingController();
        this.productoController = new productoController();
        this.usuarioController = new usuarioController();
    }

    getController(prototype: string) {
        switch (prototype) {
            case PingController.name: // prototipo, de ahí se saca el name de la clase.
                return this.pingController;
                break;
            case productoController.name:
                return this.productoController;
                break;
            case usuarioController.name:
                return this.usuarioController;
                break;
            default:
                break;
        }
    }
}