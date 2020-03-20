import { routeInterface } from "../Models/route.interface";
import { productoController } from "../Controllers/producto.controller";

export const productoRoutes: Array<routeInterface> = [
    {
        url: "/products",
        method: "get",
        controller: productoController,
        target: "getProducts" // el método sacado de ping.controller
    },
    {
        url: "/product",
        method: "post",
        controller: productoController,
        target: "saveProduct"
    },
    {
        url: "/product/:productId",
        method: "get",
        controller: productoController,
        target: "getProduct"
    },
    {
        url: "/product/:productId",
        method: "delete",
        controller: productoController,
        target: "deleteProduct"
    },
    {
        url: "/product/:productId",
        method: "put",
        controller: productoController,
        target: "updateProduct"
    }
]