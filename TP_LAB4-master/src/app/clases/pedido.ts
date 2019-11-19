import { Producto } from "./producto";
import { Pago } from "./pago";


export class Pedido {
    id_pedido:number;
    fecha:Date;
    id_cliente:number;
    id_local:number;
    id_estado:number;
    tiempo_entrega:number;
    productos:Array<Producto>;
    pago:Pago;
}
