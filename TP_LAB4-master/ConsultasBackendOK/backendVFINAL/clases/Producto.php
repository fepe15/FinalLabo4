<?php

class Producto
{
    public $id;
    public $nombre;
    public $precio;
    public $responsable;
    public $id_tipo;
    public $cant_min;
    public $cant_max;
    public $cant_actual;
    public $punto_repo;
    public $tiempo_pre;
    public $foto;


    
public function GuardarProducto()
{
 
    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into productos (nombre, precio,responsable,id_tipo,cant_min,cant_max,cant_actual,punto_repo,tiempo_pre,foto)values(:nombre, :precio,:responsable,:id_tipo,:cant_min,:cant_max,:cant_actual,:punto_repo,:tiempo_pre,:foto)");
    $consulta->bindValue(':nombre', $this->nombre, PDO::PARAM_STR);
    $consulta->bindValue(':precio', $this->precio, PDO::PARAM_INT);
    $consulta->bindValue(':responsable', $this->responsable, PDO::PARAM_INT);
    $consulta->bindValue(':id_tipo', $this->id_tipo, PDO::PARAM_INT);
    $consulta->bindValue(':cant_min', $this->cant_min, PDO::PARAM_INT);
    $consulta->bindValue(':cant_max', $this->cant_max, PDO::PARAM_INT);
    $consulta->bindValue(':cant_actual', $this->cant_actual, PDO::PARAM_INT);
    $consulta->bindValue(':punto_repo', $this->punto_repo, PDO::PARAM_INT);
    $consulta->bindValue(':tiempo_pre', $this->tiempo_pre, PDO::PARAM_INT);
    $consulta->bindValue(':foto', $this->foto, PDO::PARAM_STR);
    $consulta->execute();
	return $objetoAccesoDato->RetornarUltimoIdInsertado();
}


public static function TraerTodosLosProductos() 
{
    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * from productos ");  
	$consulta->execute();
	$producto= $consulta->fetchAll(PDO::FETCH_CLASS, "Producto");
            
    return $producto;
									
}

public static function TraerProducto($nombre) 
{
    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
    $consulta =$objetoAccesoDato->RetornarConsulta("SELECT * from productos WHERE nombre= :nombre ");  
    $consulta->bindValue(':nombre', $nombre, PDO::PARAM_STR);
	$consulta->execute();
	$producto= $consulta->fetchObject('Producto');
            
    return $producto;
									
}
/*
public function BorrarProducto()
{
    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
    $consulta =$objetoAccesoDato->RetornarConsulta("
        delete 
        from productos 				
        WHERE nombre=:nombre");	
    $consulta->bindValue(':nombre',$this->nombre, PDO::PARAM_STR);		
    $consulta->execute();
    return $consulta->rowCount();
}


public function ModificarProducto()
{

    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
    $consulta =$objetoAccesoDato->RetornarConsulta("
           update productos 
           set precio='$this->precio'
           WHERE nombre='$this->nombre'");
           
    return $consulta->execute();

}

*/
}

?>