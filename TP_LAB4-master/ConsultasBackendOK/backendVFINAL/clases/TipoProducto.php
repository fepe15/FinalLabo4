<?php

class TipoProducto
{
    public $id_tipo;
    public $descripcion;

    public function GuardarTipo()
    {
                $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
				$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into tipo_producto (descripcion)values(:descripcion)");
                $consulta->bindValue(':descripcion', $this->descripcion, PDO::PARAM_STR);
                $consulta->execute();
				return $objetoAccesoDato->RetornarUltimoIdInsertado();
                
    }

        public function ModificarTipo()
    {
                $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
				$consulta =$objetoAccesoDato->RetornarConsulta("UPDATE tipo_producto set descripcion=:descripcion where id_tipo=:id_tipo");
                $consulta->bindValue(':descripcion', $this->descripcion, PDO::PARAM_STR);
                $consulta->execute();
                return $consulta->rowCount();
				
    }

            public function BorrarTipo()
    {
        
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				DELETE 
				from tipo_producto 				
				WHERE id_tipo=:id_tipo");	
				$consulta->bindValue(':id_tipo',$this->id_tipo, PDO::PARAM_INT);		
				$consulta->execute();
				return $consulta->rowCount();
    }

    public static function TraerTodosLosTipos()
    {
        $objetoAccesoDato = AccesoDatos::dameunObjetoAcceso();
        $consulta = $objetoAccesoDato->RetornarConsulta("SELECT * from tipo_producto");
        $consulta->execute();
        return $consulta->fetchAll(PDO::FETCH_CLASS, "TipoProducto");
    }

}
?>