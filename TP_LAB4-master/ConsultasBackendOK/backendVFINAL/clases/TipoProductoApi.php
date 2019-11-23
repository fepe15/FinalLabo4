<?php
include_once "TipoProducto.php";

class TipoProductoApi{


    public function TraerTodos($request, $response, $args) {
        $todosLosTipos=TipoProducto::TraerTodosLosTipos();
       $newresponse = $response->withJson($todosLosTipos,200);
      return $newresponse;
  }
}
?>