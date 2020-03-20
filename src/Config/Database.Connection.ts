import { ConnectionOptions, Connection, createConnection } from "typeorm";
import { Usuario } from "../Models/Entities/Usuario";
import { Producto } from "../Models/Entities/Producto";

const parametros: ConnectionOptions = {
    type: "mysql",
    database: "javi",
    host: 'localhost',
    username: 'root',
    // host: "sumagro-dev.c3xbluk1m0qi.us-east-1.rds.amazonaws.com",
    // username: "sumagroMaster",
    // password: "Dist2019",
    port: 3306,
    synchronize: true,
    entities: [
        Usuario,
        Producto
    ]
}

let connection: Connection = null;
export const connect = async () => {
    if(connection == null){
        connection = await createConnection(parametros);
        return connection
    }else{
        return connection
    }
}