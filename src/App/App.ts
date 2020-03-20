import * as express from 'express';
import * as bp from 'body-parser';
import { routesToExpress } from '../Routes';
import { routeInterface } from '../Models/route.interface';

export class App{
    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
    }

    config(){
        this.app.use(bp.json());
        routesToExpress.forEach(( route: routeInterface) =>{
            (this.app as express.Application)[route.method]
            (route.url, async(req: express.Request, res: express.Response) =>{
                await (route.controller)[route.target](req, res)
            })
        });
    }
}