<?php
include_once "Local.php";
include_once "Usuario.php";


class LocalApi{


    public function TraerTodos($request, $response, $args) {
        $todosLosLocales=Local::TraerTodosLosLocales();
       $newresponse = $response->withJson($todosLosLocales,200);
      return $newresponse;
  }

  public static function IngresarLocal($request, $response, $args) 
{
     
      $objDelaRespuesta= new stdclass();
      
      $ArrayDeParametros = $request->getParsedBody();

    
      $nombre=$ArrayDeParametros['nombre'];
      $razon_social=$ArrayDeParametros['razon_social'];
      $cuit=$ArrayDeParametros['cuit'];
      $telefono=$ArrayDeParametros['telefono'];
      $id_rubro=$ArrayDeParametros['id_rubro'];
      $foto=$ArrayDeParametros['foto'];
      $usuario=$ArrayDeParametros['email'];
      $clave=$ArrayDeParametros['clave'];
      $perfil=$ArrayDeParametros['perfil'];

        $destino="./fotos/";
        $archivos = $request->getUploadedFiles();
        $nombreAnterior=$archivos['file']->getClientFilename();
        $extension= explode(".", $nombreAnterior);
        $extension=array_reverse($extension);
        $nombrefoto = $nombre.'.'.$extension[0];
        $archivos['file']->moveTo($destino.$nombrefoto);


          $nuevoLocal= new Local();
          $nuevoLocal->nombre=$nombre;
          $nuevoLocal->razon_social=$razon_social;
          $nuevoLocal->cuit=$cuit;
          $nuevoLocal->telefono=$telefono;
          $nuevoLocal->id_rubro=$id_rubro;
          $nuevoLocal->foto="http://localhost/backendVFINAL/fotos/".$nombrefoto;
     
          $id_local=$nuevoLocal->GuardarLocal();

          $miUsuario= new Usuario();
          $miUsuario->usuario=$usuario;
          $miUsuario->clave=$clave;
          $miUsuario->perfil=$perfil;
          $miUsuario->id_local=$id_local;

          $ultimoId=$miUsuario->InsertarUsuarioLocal();    
          $objDelaRespuesta->ultimoIdGrabado=$ultimoId;   
         
      return $response->withJson($objDelaRespuesta, 200);
}


}
?>