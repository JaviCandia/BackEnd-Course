import { routeInterface } from "../Models/route.interface";
import { pingRoutes } from "./ping.routes";
import * as _ from 'lodash';
import { Initializer } from "../Config/initializer";
import { productoRoutes } from "./producto.routes";
import { usuarioRoutes } from "./usuario.routes";

let init: Initializer = new Initializer();

const routesImported: Array<Array<routeInterface>> = [
    // agregar aquí el nuevo routes.ts
    pingRoutes,
    productoRoutes,
    usuarioRoutes
]

export const routesToExpress: Array<routeInterface> = 
_.flattenDepth(routesImported, 2).map((route: routeInterface) =>{
    route.controller = init.getController(route.controller.name)
    return route;
});