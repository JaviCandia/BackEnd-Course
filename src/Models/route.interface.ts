export interface routeInterface{
    url: string; // la ruta a apuntar en el navegador
    method: string; // el tipo de método http a utilizar para consumir
    controller: any; // a donde se apunta al ingresar a esa url // controlador de métodos
    target: string; // método en específico de ese controlador al que tu apuntarás al ingresar a esa url
}