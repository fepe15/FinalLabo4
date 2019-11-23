<?php

class Rubro
{
    public $id_rubro;
    public $descripcion;

    public function GuardarRubro()
    {
                $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
				$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into rubros (descripcion)values(:descripcion)");
                $consulta->bindValue(':descripcion', $this->descripcion, PDO::PARAM_STR);
                $consulta->execute();
				return $objetoAccesoDato->RetornarUltimoIdInsertado();
                
    }

        public function ModificarRubro()
    {
                $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
				$consulta =$objetoAccesoDato->RetornarConsulta("UPDATE rubros set descripcion=:descripcion where id_rubro=:id_rubro");
                $consulta->bindValue(':descripcion', $this->descripcion, PDO::PARAM_STR);
                $consulta->execute();
                return $consulta->rowCount();
				
    }

            public function BorrarRubro()
    {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				DELETE 
				from rubros 				
				WHERE id_rubro=:id_rubro");	
				$consulta->bindValue(':id_rubro',$this->id_rubro, PDO::PARAM_INT);		
				$consulta->execute();
				return $consulta->rowCount();
    }

    public static function TraerTodosLosRubros()
    {
        $objetoAccesoDato = AccesoDatos::dameunObjetoAcceso();
        $consulta = $objetoAccesoDato->RetornarConsulta("SELECT * from rubros");
        $consulta->execute();
        return $consulta->fetchAll(PDO::FETCH_CLASS, "Rubro");
    }

}
?>