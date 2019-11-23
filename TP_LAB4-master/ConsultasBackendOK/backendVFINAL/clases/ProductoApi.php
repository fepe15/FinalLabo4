<?php
include_once "Producto.php";

class ProductoApi{
    
  public function TraerProducto($request, $response, $args) {
      $nombre= $args['nombre'];
      $producto = new Producto();
     $producto= Producto::TraerProducto($nombre);
     $newresponse = $response->withJson($producto, 200);  
    return $newresponse;
  }
  public function TraerTodos($request, $response, $args) {
      $todosLosProductos=Producto::TraerTodosLosProductos();
     $newresponse = $response->withJson($todosLosProductos,200);  
    
    return $newresponse;
   
}
public static function IngresarProducto($request, $response, $args) 
{
     
      $objDelaRespuesta= new stdclass();
      
      $ArrayDeParametros = $request->getParsedBody();
    
      $nombre= $ArrayDeParametros['nombre'];
      $precio= $ArrayDeParametros['precio'];
      $responsable= $ArrayDeParametros['responsable'];
      $id_tipo= $ArrayDeParametros['id_tipo'];
      $cant_min= $ArrayDeParametros['cant_min'];
      $cant_max= $ArrayDeParametros['cant_max'];
      $cant_actual= $ArrayDeParametros['cant_actual'];
      $punto_repo= $ArrayDeParametros['punto_repo'];
      $tiempo_pre= $ArrayDeParametros['tiempo_pre'];
      $foto= $ArrayDeParametros['foto'];
          $nuevoProducto= new Producto();
          $nuevoProducto->nombre=$nombre;
          $nuevoProducto->precio=$precio;
          $nuevoProducto->responsable=$responsable;
          $nuevoProducto->id_tipo=$id_tipo;
          $nuevoProducto->cant_min=$cant_min;
          $nuevoProducto->cant_max=$cant_max;
          $nuevoProducto->cant_actual=$cant_actual;
          $nuevoProducto->punto_repo=$punto_repo;
          $nuevoProducto->tiempo_pre=$tiempo_pre;
          $nuevoProducto->foto="./fotos/".$foto;   
          $idPedido=$nuevoProducto->GuardarProducto();
         
      $objDelaRespuesta->idPedido=$idPedido;
         
         
      return $response->withJson($objDelaRespuesta, 200);
      
}
}
?>