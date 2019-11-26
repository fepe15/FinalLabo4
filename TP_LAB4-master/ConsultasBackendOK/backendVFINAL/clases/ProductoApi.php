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
      $id_local= $ArrayDeParametros['id_local'];
      $cant_min= $ArrayDeParametros['cant_min'];
      $cant_max= $ArrayDeParametros['cant_max'];
      $cant_actual= $ArrayDeParametros['cant_actual'];
      $punto_repo= $ArrayDeParametros['punto_repo'];
      $tiempo_prep= $ArrayDeParametros['tiempo_prep'];
      $foto= $ArrayDeParametros['foto'];

      $destino="./fotos/";
      $archivos = $request->getUploadedFiles();
      $nombreAnterior=$archivos['file']->getClientFilename();
      $extension= explode(".", $nombreAnterior);
      $extension=array_reverse($extension);
      $nombrefoto = $nombre.'.'.$extension[0];
      $archivos['file']->moveTo($destino.$nombrefoto);


          $nuevoProducto= new Producto();
          $nuevoProducto->nombre=$nombre;
          $nuevoProducto->precio=$precio;
          $nuevoProducto->responsable=$responsable;
          $nuevoProducto->id_tipo=$id_tipo;
          $nuevoProducto->id_local=$id_local;
          $nuevoProducto->cant_min=$cant_min;
          $nuevoProducto->cant_max=$cant_max;
          $nuevoProducto->cant_actual=$cant_actual;
          $nuevoProducto->punto_repo=$punto_repo;
          $nuevoProducto->tiempo_prep=$tiempo_prep;

          $nuevoProducto->foto="http://localhost/backendVFINAL/fotos/".$nombrefoto;   

          $idPedido=$nuevoProducto->GuardarProducto();
         
      $objDelaRespuesta->idPedido=$idPedido;
         
         
      return $response->withJson($objDelaRespuesta, 200);
      
}

public static function ModificarStockProducto($request, $response, $args) 
{
     
      $objDelaRespuesta= new stdclass();
      
      $ArrayDeParametros = $request->getParsedBody();
    
     
      $id= $ArrayDeParametros['id'];
      $cant_min= $ArrayDeParametros['cant_min'];
      $cant_max= $ArrayDeParametros['cant_max'];
      $cant_actual= $ArrayDeParametros['cant_actual'];
      $punto_repo= $ArrayDeParametros['punto_repo'];
      
          $nuevoProducto= new Producto();
          $nuevoProducto->id=$id;
          $nuevoProducto->cant_min=$cant_min;
          $nuevoProducto->cant_max=$cant_max;
          $nuevoProducto->cant_actual=$cant_actual;
          $nuevoProducto->punto_repo=$punto_repo;
        

          $idPedido=$nuevoProducto->ModificarStockProducto();
         
      $objDelaRespuesta->idPedido=$idPedido;
         
         
      return $response->withJson($objDelaRespuesta, 200);
      
}
}
?>