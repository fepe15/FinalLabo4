<?php
include_once "Rubro.php";

class RubroApi{


    public function TraerTodos($request, $response, $args) {
        $todosLosRubros=Rubro::TraerTodosLosRubros();
       $newresponse = $response->withJson($todosLosRubros,200);
      return $newresponse;
  }
}
?>