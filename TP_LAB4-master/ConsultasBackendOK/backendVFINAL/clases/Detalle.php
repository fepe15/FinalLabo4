<?php


class Detalle{

public $id_detalle;
public $id_pedido;
public $id_producto;
public $id_estado;
public $cantidad;
public $tiempo_preparacion;



public function GuardarDetalle()
{
 
                $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
				$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into pedidodetalle (id_pedido, id_producto, id_estado)values(:id_pedido, :id_producto, :id_estado)");
                $consulta->bindValue(':id_pedido', $this->id_pedido, PDO::PARAM_INT);
                $consulta->bindValue(':id_producto', $this->id_producto, PDO::PARAM_INT);
                $consulta->bindValue(':id_estado', $this->id_estado, PDO::PARAM_INT);
                // $consulta->bindValue(':cantidad', $this->cantidad, PDO::PARAM_STR);
                // $consulta->bindValue(':tiempo_preparacion', $this->tiempo_preparacion, PDO::PARAM_STR);
                $consulta->execute();
				return $objetoAccesoDato->RetornarUltimoIdInsertado();
}


public static function TraerTodosLosDetalles($id_pedido) 
{
    
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("SELECT prod.foto, prod.nombre, prod.precio, tipo.descripcion as categoria 
            from pedidodetalle as det, productos as prod, tipo_producto as tipo 
            where id_pedido= $id_pedido and det.id_producto = prod.id and prod.id_tipo = tipo.id_tipo");  
			$consulta->execute();
			$detalle= $consulta->fetchAll(PDO::FETCH_CLASS, "Detalle");
            
            return $detalle;
							
			
}

// public static function TraerUnDetalle($idDetalle) 
// {
// 			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
//             $consulta =$objetoAccesoDato->RetornarConsulta("SELECT * from pedidodetalle WHERE idDetalle=:idDetalle");  
//             $consulta->bindValue(':idDetalle', $idDetalle, PDO::PARAM_INT);
// 			$consulta->execute();
// 			$detalle= $consulta->fetchAll(PDO::FETCH_CLASS, "Detalle");
            
//             return $detalle;
							
			
// }

// public static function TraerPendientes($id)
// {
//     if( $id == 1)
//     {
//         $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
//         $consulta =$objetoAccesoDato->RetornarConsulta("SELECT * from pedidodetalle as pd where pd.estado<>'facturado'");  
//        // $consulta->bindValue(':estado', "pendiente", PDO::PARAM_STR);
//        // $consulta->bindValue(':id', $idEmpleado, PDO::PARAM_INT);
//         $consulta->execute();
//         $pedidos= $consulta->fetchAll(PDO::FETCH_CLASS, "Detalle");
//     }
//     else
//     {
//         $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
//         $consulta =$objetoAccesoDato->RetornarConsulta("SELECT * from pedidodetalle as pd where pd.sector in(SELECT e.perfil from usuarios as e where e.id=$id) and (pd.estado='pendiente' or pd.estado='en preparacion')");  
//        // $consulta->bindValue(':estado', "pendiente", PDO::PARAM_STR);
//        // $consulta->bindValue(':id', $idEmpleado, PDO::PARAM_INT);
//         $consulta->execute();
//         $pedidos= $consulta->fetchAll(PDO::FETCH_CLASS, "Detalle");
//     }
  
    
//    // $consulta =$objetoAccesoDato->RetornarConsulta("SELECT * from pedidodetalle as pd where pd.sector in (select e.sector from empleados as e where e.id=$idEmpleado) and pd.estado=:estado or pd.estado= $idEmpleado");
//     return $pedidos;
// }

// public function ModificarDetalle()
// {
//     $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
//         $consulta =$objetoAccesoDato->RetornarConsulta("update pedidodetalle set idPedido=:idPedido, producto=:producto, tiempoPreparacion=:tiempoPreparacion, idEmpleado=:idEmpleado, estado=:estado, sector=:sector, tiempoEntrega= :tiempoEntrega WHERE idDetalle=:id");
//         $consulta->bindValue(':idPedido',$this->idPedido, PDO::PARAM_INT);
//         $consulta->bindValue(':producto',$this->producto, PDO::PARAM_STR);
//         $consulta->bindValue(':tiempoPreparacion',$this->tiempoPreparacion, PDO::PARAM_STR);
//         $consulta->bindValue(':idEmpleado',$this->idEmpleado, PDO::PARAM_INT);
//         $consulta->bindValue(':estado',$this->estado, PDO::PARAM_STR);
//         $consulta->bindValue(':sector',$this->sector, PDO::PARAM_STR);
//         $consulta->bindValue(':tiempoEntrega',$this->tiempoEntrega, PDO::PARAM_STR);
//         $consulta->bindValue(':id',$this->idDetalle, PDO::PARAM_INT);
//        return $consulta->execute();

// }

// public function PrepararDetalle()
// {
//     $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
//         $consulta =$objetoAccesoDato->RetornarConsulta("update pedidodetalle set tiempoPreparacion=:tiempoPreparacion, idEmpleado=:idEmpleado, estado=:estado WHERE idDetalle=:id");
//         $consulta->bindValue(':tiempoPreparacion',$this->tiempoPreparacion, PDO::PARAM_STR);
//         $consulta->bindValue(':idEmpleado',$this->idEmpleado, PDO::PARAM_INT);
//         $consulta->bindValue(':estado',$this->estado, PDO::PARAM_STR);
//         $consulta->bindValue(':id',$this->idDetalle, PDO::PARAM_INT);
//        return $consulta->execute();

// }

// public function ServirDetalle()
// {
//     $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
//         $consulta =$objetoAccesoDato->RetornarConsulta("update pedidodetalle set tiempoServido=:tiempoServido, estado=:estado WHERE idDetalle=:id");
//         $consulta->bindValue(':tiempoServido',$this->tiempoServido, PDO::PARAM_STR);
//         $consulta->bindValue(':estado',"listo para servir", PDO::PARAM_STR);
//         $consulta->bindValue(':id',$this->idDetalle, PDO::PARAM_INT);
//        return $consulta->execute();

// }

// public static function TiempoRestante($idMesa, $idPedido)
// {
//     $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
//     $consulta =$objetoAccesoDato->RetornarConsulta("SELECT tiempoPreparacion from pedidodetalle WHERE idpedido=$idPedido");  
//     $consulta->execute();

//     return $consulta->fetch();
   
// }


// public static function TraerDetalleDelPedido($idPedido) 
// {
// 			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
// 			$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * from pedidodetalle where idPedido=$idPedido");  
// 			$consulta->execute();
// 			$detalles= $consulta->fetchAll(PDO::FETCH_CLASS, "Detalle");
            
//             return $detalles;
							
			
// }

// public static function Cerrar($idMesa){

//     $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
// 			$consulta =$objetoAccesoDato->RetornarConsulta("UPDATE `pedidodetalle` as pd SET pd.estado ='facturado' WHERE pd.idPedido IN (SELECT p.id from pedidos as p where p.idMesa=$idMesa)");  
//             $consulta->execute();
//            return $consulta->fetch();
// }

// public static function CancelarDetalles($idPedido)
// {
    
//             $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
// 			$consulta =$objetoAccesoDato->RetornarConsulta("UPDATE `pedidodetalle` as pd SET `estado`='cancelado' WHERE pd.idPedido = $idPedido");  
//             $consulta->execute();
//            return $consulta->fetch();
// }


}

?>