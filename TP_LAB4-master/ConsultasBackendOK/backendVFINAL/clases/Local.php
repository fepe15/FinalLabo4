<?php

class Local
{
    public $id_local;
    public $nombre;
    public $razon_social;
    public $cuit;
    public $telefono;
    public $id_rubro;
    public $foto;

    public function GuardarLocal()
    {
                $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
				$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into locales (nombre, razon_social, cuit, telefono, id_rubro, foto)
                values(:nombre, :razon_social, :cuit, :telefono, :id_rubro, :foto)");
                $consulta->bindValue(':nombre', $this->nombre, PDO::PARAM_STR);
                $consulta->bindValue(':razon_social', $this->razon_social, PDO::PARAM_STR);
                $consulta->bindValue(':cuit', $this->cuit, PDO::PARAM_INT);
                $consulta->bindValue(':telefono', $this->telefono, PDO::PARAM_INT);
                $consulta->bindValue(':id_rubro', $this->id_rubro, PDO::PARAM_INT);
                $consulta->bindValue(':foto', $this->foto, PDO::PARAM_STR);
                $consulta->execute();
				return $objetoAccesoDato->RetornarUltimoIdInsertado();
    }

        public function ModificarLocal()
    {
                $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
				$consulta =$objetoAccesoDato->RetornarConsulta("UPDATE locales set nombre=:nombre, razon_social=:razon_social, cuit=:cuit, telefono=:telefono, contraseña=:contraseña,  id_rubro=:id_rubro where id_local=:id_local");
                $consulta->bindValue(':nombre', $this->nombre, PDO::PARAM_STR);
                $consulta->bindValue(':razon_social', $this->razon_social, PDO::PARAM_STR);
                $consulta->bindValue(':cuit', $this->cuit, PDO::PARAM_STR);
                $consulta->bindValue(':telefono', $this->telefono, PDO::PARAM_STR);
                $consulta->bindValue(':contraseña', $this->contraseña, PDO::PARAM_STR);
                $consulta->bindValue(':id_rubro', $this->id_rubro, PDO::PARAM_STR);
                $consulta->execute();
                return $consulta->rowCount();
				
    }

            public function BorrarLocal()
    {
        
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				DELETE 
				from locales 				
				WHERE id_local=:id_local");	
				$consulta->bindValue(':id_local',$this->id_local, PDO::PARAM_INT);		
				$consulta->execute();
				return $consulta->rowCount();
    }

    public static function TraerTodosLosLocales()
    {
        $objetoAccesoDato = AccesoDatos::dameunObjetoAcceso();
        $consulta = $objetoAccesoDato->RetornarConsulta("SELECT * from locales");
        $consulta->execute();
        return $consulta->fetchAll(PDO::FETCH_CLASS, "Local");
    }

    public static function TraerUnLocal($id)
    {
        $objetoAccesoDato = AccesoDatos::dameunObjetoAcceso();
        $consulta = $objetoAccesoDato->RetornarConsulta("SELECT * from locales Where id_local=:id");
        $consulta->execute();
        return $consulta->fetchAll(PDO::FETCH_CLASS, "Local");
    }

}
?>