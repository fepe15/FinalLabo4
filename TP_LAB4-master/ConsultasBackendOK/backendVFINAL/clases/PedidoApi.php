<?php
include_once "Pedido.php";
include_once "Detalle.php";
include_once "Pago.php";
include_once "Producto.php";



class PedidoApi   {


  public static function IngresarPedido($request, $response, $args) 
{
    $objDelaRespuesta= new stdclass();
    $ArrayDeParametros = $request->getParsedBody();

    $productos= $ArrayDeParametros['productos'];
    $pagoPedido= $ArrayDeParametros['pago'];

    $fecha= date('Y/m/d G:i,s');
    $tiempo_entrega= $ArrayDeParametros['tiempo_entrega'];
    $id_cliente= $ArrayDeParametros['id_cliente'];
    $id_local= $ArrayDeParametros['id_local'];
    $id_estado= $ArrayDeParametros['id_estado'];
        
            $nuevoPedido= new Pedido();
            $nuevoPedido->fecha=$fecha;
            $nuevoPedido->id_cliente=$id_cliente;
            $nuevoPedido->id_local=$id_local;
            $nuevoPedido->id_estado=$id_estado;
            $nuevoPedido->tiempo_entrega=50;
            $id_pedido=$nuevoPedido->GuardarPedido();

            $arrayProductos=$productos;    
    
        $objDelaRespuesta->id_pedido=$id_pedido;

        for($i=0 ; $i < count($arrayProductos) ; $i++)
        {
            
         $producto=Producto::ModificarStock($arrayProductos[$i]['id']); 
         $detallePedido=new Detalle();
         $detallePedido->id_pedido=$id_pedido;
         $detallePedido->id_producto=$arrayProductos[$i]['id'];
         $detallePedido->id_estado=$id_estado;             
             
        $detallePedido->GuardarDetalle();

        }

      $arrayPago=$pagoPedido;

      $pago=new Pago();
      $pago->id_local=$arrayPago['id_local'];
      $pago->id_cliente=$arrayPago['id_cliente'];
      $pago->id_pedido=$id_pedido; 
      $pago->fecha=$fecha;
      $pago->monto=$arrayPago['monto'];
      $pago->metodo_pago=$arrayPago['metodo_pago'];
      $pago->estado=$arrayPago['estado'];
      $pago->GuardarPago();

        return $response->withJson($objDelaRespuesta, 200);  
}


// public static function IngresarPago($request, $response, $args) 
// {
//     $objDelaRespuesta= new stdclass();
//     $ArrayDeParametros = $request->getParsedBody();

//     // $pagoPedido= $ArrayDeParametros['pago'];

//     $fecha= date('Y/m/d G:i,s');

//       // $arrayPago=$pagoPedido;

//       $pago=new Pago();
//       $pago->id_local=$ArrayDeParametros['id_local'];
//       $pago->id_cliente=$ArrayDeParametros['id_cliente'];
//       $pago->id_pedido=$ArrayDeParametros['id_pedido']; 
//       $pago->fecha=$fecha;
//       $pago->monto=$ArrayDeParametros['monto'];
//       $pago->metodo_pago=$ArrayDeParametros['metodo_pago'];
//       $pago->estado=$ArrayDeParametros['estado'];
//       $pago->GuardarPago();

//         return $response->withJson($objDelaRespuesta, 200);  
// }




public function TraerTodos($request, $response, $args) {
    $todosLosPedidos=Pedido::TraerTodosLosPedidos();
   $newresponse = $response->withJson($todosLosPedidos,200);
  return $newresponse;
}

public function TraerPedidosCliente($request, $response, $args) {
  $id=$args['id'];
  $todosLosPedidos=Pedido::TraerTodosLosPedidosCliente($id);
 $newresponse = $response->withJson($todosLosPedidos,200);
return $newresponse;
}

public function TraerPedidosLocal($request, $response, $args) {
  $id=$args['id'];
  $todosLosPedidos=Pedido::TraerTodosLosPedidosLocal($id);
 $newresponse = $response->withJson($todosLosPedidos,200);
return $newresponse;
}

public static function CancelarPedido($request, $response, $args)
{
    $respuesta=new stdclass();
    $ArrayDeParametros = $request->getParsedBody();
    $id_pedido=$ArrayDeParametros['id_pedido'];
    $pedido= Pedido::TraerUnPedido($id_pedido);
    $respuesta=$pedido->CancelarPedido();

    return $response->withJson($respuesta,200);

}

public static function CambiarEstadoPedido($request, $response, $args)
{
    $respuesta=new stdclass();
    $ArrayDeParametros = $request->getParsedBody();
    $id_pedido=$ArrayDeParametros['id_pedido'];
    $id_estado=$ArrayDeParametros['id_estado'];
    $pedido= Pedido::TraerUnPedido($id_pedido);
    $respuesta=$pedido->CambiarEstadoPedido($id_estado);

    return $response->withJson($respuesta,200);

}


public function TraerTodosLosDetalles($request, $response, $args) {
  $id=$args['id'];
  $todosLosDetalles=Detalle::TraerTodosLosDetalles($id);
  $newresponse = $response->withJson($todosLosDetalles,200);
  return $newresponse;
}



// public static function TraerPendientesEmpleado($request, $response, $args)
// {
//     $objDelaRespuesta=new stdclass();

//     $ArrayDeParametros = $request->getParsedBody();
//     $token=$ArrayDeParametros['token'];
//     $payload=AutentificadorJWT::ObtenerData($token);
//     $idEmpleado=$payload->idUsuario;
    
//    $objDelaRespuesta=Detalle::TraerPendientes($idEmpleado);
//   //$objDelaRespuesta=$payload;

//     return $response->withJson($objDelaRespuesta, 200);

// }


// public static function PrepararPedido($request, $response, $args)
// {
//     $respuesta=new stdclass();
//     $ArrayDeParametros = $request->getParsedBody();
//     $token=$ArrayDeParametros['token'];
//     $payload=AutentificadorJWT::ObtenerData($token);
//     $idEmpleado=$payload->idEmpleado;
//     $idDetalle=$ArrayDeParametros['idDetalle'];
//     $tiempoPreparacion=$ArrayDeParametros['tiempoPreparacion'];
//     $tiempoPreparacion=$tiempoPreparacion;
//     $ahora=date('Y/m/d G:i'); 
//     $tiempo=strtotime($ahora. ' + '. $tiempoPreparacion . 'minutes');
//     $miDetalle=new Detalle();
//     $miDetalle->idDetalle=$idDetalle;
//    $miDetalle->tiempoPreparacion=date('Y/m/d G:i',$tiempo);
//    $miDetalle->idEmpleado=$idEmpleado;
//    $miDetalle->estado="en preparacion";
//    $respuesta=$miDetalle->PrepararDetalle();

   
//     return $response->withJson($respuesta,200);

// }

// public static function ServirPedido($request, $response, $args)
// {
//     $respuesta=new stdclass();
//     $ArrayDeParametros = $request->getParsedBody();
//     $idDetalle=$ArrayDeParametros['idDetalle'];
//     $tiempoServido=date('Y/m/d G:i');
//     $miDetalle=new Detalle();
//     $miDetalle->idDetalle=$idDetalle;
//    $miDetalle->tiempoServido=$tiempoServido;
//    $respuesta=$miDetalle->ServirDetalle();
   
//     return $response->withJson($respuesta,200);

// }

// public static function TiempoRestante($request, $response, $args)
// {
//     $respuesta=new stdclass();
//     $ArrayDeParametros = $request->getParsedBody();
//     // $idMesa=$ArrayDeParametros['idMesa'];
//     $idPedido=$ArrayDeParametros['idPedido'];
//     $detalles=Detalle::TraerDetalleDelPedido($idPedido);

//     $ahora=date('Y/m/d G:i'); 

//     $arrayRespuesta=array();

//     foreach($detalles as $d)
//     {
//     if($d->estado=="en preparacion")
//     {
//         $detallesRespuesta= new stdclass();
//     $tp=strtotime($d->tiempoPreparacion);
//     $now=strtotime($ahora);
//     $tiempoRestante=$tp-$now;
//     if($tiempoRestante <= 0)
//         {
//             $tiempoRestante=0;
//         }
//     $detallesRespuesta->idDetalle=$d->idDetalle;
//     $detallesRespuesta->producto=$d->producto;
    
//     $detallesRespuesta->tiempoRestante=date('i:s',$tiempoRestante);

//     array_push($arrayRespuesta,$detallesRespuesta);
//     }
//     }
   
    
//     $respuesta->pedido=$idPedido;
//     $respuesta->detalles=$arrayRespuesta;

   
//     return $response->withJson($respuesta,200);
// }

// public static function CancelarPedido($request, $response, $args)
// {
//     $respuesta=new stdclass();
//     $ArrayDeParametros = $request->getParsedBody();
//     $idPedido=$ArrayDeParametros['idPedido'];
//     $respuesta= Detalle::CancelarDetalles($idPedido);
   
//     return $response->withJson($respuesta,200);
// }

// public static function TraerCancelados($request, $response, $args)
// {
//     $respuesta=new stdclass();
//     $respuesta= Pedido::PedidosCancelados();
   
//     return $response->withJson($respuesta,200);
// }



// public static function TraerMasVendido($request, $response, $args)
// {
//     $respuesta=new stdclass();
//     $respuesta= Pedido::MasVendido();
   
//     return $response->withJson($respuesta,200);
// }


// public static function TraerMenosVendido($request, $response, $args)
// {
//     $respuesta=new stdclass();
//     $respuesta= Pedido::MenosVendido();
   
//     return $response->withJson($respuesta,200);
// }


// public static function NoEntregadosATiempo($request, $response, $args)
// {
//     $respuesta=array();
//     $detalles= Detalle::TraerTodosLosDetalles();
//     foreach($detalles as $d)
//     {
//         if(strtotime($d->tiempoServido) > strtotime($d->tiempoPreparacion))
//         {
//             array_push($respuesta, $d);
//         }
//     }

   
//     return $response->withJson($respuesta,200);
// }

}

?>