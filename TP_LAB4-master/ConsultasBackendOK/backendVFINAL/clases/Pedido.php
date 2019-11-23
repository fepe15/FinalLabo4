<?php

class Pedido
{

public $id_pedido;
public $fecha;
public $id_cliente;
public $id_local;
public $id_estado;
public $tiempo_entrega;

public function GuardarPedido()
{
 
    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into pedidos (fecha, tiempo_entrega, id_cliente, id_local, id_estado)
	values(:fecha, :tiempo_entrega, :id_cliente, :id_local, :id_estado)");
	$consulta->bindValue(':fecha', $this->fecha, PDO::PARAM_STR);
	$consulta->bindValue(':tiempo_entrega', $this->tiempo_entrega, PDO::PARAM_INT);
    $consulta->bindValue(':id_cliente', $this->id_cliente, PDO::PARAM_INT);
	$consulta->bindValue(':id_local', $this->id_local, PDO::PARAM_INT);
	$consulta->bindValue(':id_estado', $this->id_estado, PDO::PARAM_INT);
    $consulta->execute();
	return $objetoAccesoDato->RetornarUltimoIdInsertado();
}


public function CancelarPedido()
    {
                $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
				$consulta =$objetoAccesoDato->RetornarConsulta("UPDATE pedidos set id_estado=5 where id_pedido=:id_pedido");
                $consulta->bindValue(':id_pedido', $this->id_pedido, PDO::PARAM_INT);
			    $consulta->execute();
                return $consulta->rowCount();
	}
	
	public function CambiarEstadoPedido($id_estado)
    {
                $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
				$consulta =$objetoAccesoDato->RetornarConsulta("UPDATE pedidos set id_estado=$id_estado where id_pedido=:id_pedido");
                $consulta->bindValue(':id_pedido', $this->id_pedido, PDO::PARAM_INT);
			    $consulta->execute();
                return $consulta->rowCount();
    }

public static function TraerUnPedido($id_pedido)
    {

        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
        $consulta = $objetoAccesoDato->RetornarConsulta("SELECT * from pedidos WHERE id_pedido=:id_pedido");
        $consulta->bindValue(':id_pedido', $id_pedido, PDO::PARAM_INT);
        $consulta->execute();
        $pedido=$consulta->fetchObject("Pedido");
        return $pedido;
    }


public static function TraerTodosLosPedidos() 
{
	$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	$consulta =$objetoAccesoDato->RetornarConsulta("SELECT pedidos.*, locales.nombre, locales.foto  from pedidos, locales 
	where pedidos.id_local = locales.id_local ");  
	$consulta->execute();
	$pedidos= $consulta->fetchAll(PDO::FETCH_CLASS, "Pedido");
            
    return $pedidos;									
}

public static function TraerTodosLosPedidosCliente($id_cliente) 
{
	$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	$consulta =$objetoAccesoDato->RetornarConsulta("SELECT pedidos.*, estados_pedidos.descripcion, locales.nombre, locales.foto, pagos.monto, pagos.metodo_pago, pagos.estado from pedidos, locales, pagos, estados_pedidos 
	where pedidos.id_cliente = $id_cliente and pedidos.id_local = locales.id_local and pedidos.id_pedido = pagos.id_pedido and pedidos.id_estado = estados_pedidos.id_estado");  
	$consulta->execute();
	$pedidos= $consulta->fetchAll(PDO::FETCH_CLASS, "Pedido");
            
    return $pedidos;									
}

public static function TraerTodosLosPedidosLocal($id_local) 
{
	$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	$consulta =$objetoAccesoDato->RetornarConsulta("SELECT pedidos.*, estados_pedidos.descripcion, pagos.monto, pagos.metodo_pago, pagos.estado from pedidos, pagos, estados_pedidos 
	where pedidos.id_local = $id_local and pedidos.id_pedido = pagos.id_pedido and pedidos.id_estado = estados_pedidos.id_estado");  
	$consulta->execute();
	$pedidos= $consulta->fetchAll(PDO::FETCH_CLASS, "Pedido");
            
    return $pedidos;									
}

public static function PedidosCancelados()
{
    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	$consulta =$objetoAccesoDato->RetornarConsulta("SELECT idPedido, producto, estado from pedidodetalle where estado='cancelado' ");  
	$consulta->execute();
	$pedidos= $consulta->fetchAll(PDO::FETCH_CLASS);
            
    return $pedidos;
}


public static function MasVendido()
{
    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	$consulta =$objetoAccesoDato->RetornarConsulta("SELECT producto FROM pedidodetalle GROUP BY producto HAVING COUNT(*) =(SELECT COUNT( producto ) tot FROM pedidodetalle GROUP BY producto ORDER BY tot DESC LIMIT 1)");  
	$consulta->execute();
	$pedidos= $consulta->fetchAll(PDO::FETCH_CLASS);
            
    return $pedidos;
}
public static function MenosVendido()
{
    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	$consulta =$objetoAccesoDato->RetornarConsulta("SELECT producto FROM pedidodetalle GROUP BY producto HAVING COUNT(*) =(SELECT COUNT( producto ) tot FROM pedidodetalle GROUP BY producto ORDER BY tot Asc LIMIT 1)");  
	$consulta->execute();
	$pedidos= $consulta->fetchAll(PDO::FETCH_CLASS);
            
    return $pedidos;
}

}



?>