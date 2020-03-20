import { App } from './App/App';

let server: App = new App();
const PORT=3000;
server.app.listen(PORT, ()=>{
    console.log("Servidor escuchando en puerto: ", PORT);
})