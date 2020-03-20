import { routeInterface } from "../Models/route.interface";
import { PingController } from "../Controllers/ping.controller";

export const pingRoutes: Array<routeInterface> = [
    {
        url: "/ping",
        method: "get",
        controller: PingController,
        target: "getPing" // el método sacado de ping.controller
    }
]