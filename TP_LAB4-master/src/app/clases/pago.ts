
export class Pago{
    id_pago:number;
    id_pedido:number;
    id_local:number;
    id_cliente:number;
    fecha:Date;
    monto:number;
    metodo_pago:string;
    estado:string;
}