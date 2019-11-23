<?php

class Pago
{

public $id_local;
public $id_cliente;
public $id_pedido;
public $fecha;
public $monto;
public $metodo_pago;
public $estado;


        public function GuardarPago()
        {
        
                        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
                        $consulta =$objetoAccesoDato->RetornarConsulta("INSERT into pagos (id_local, id_cliente, id_pedido, fecha, monto, metodo_pago, estado)
                        values(:id_local, :id_cliente, :id_pedido, :fecha, :monto, :metodo_pago, :estado)");
                        $consulta->bindValue(':id_local', $this->id_local, PDO::PARAM_INT);
                        $consulta->bindValue(':id_cliente', $this->id_cliente, PDO::PARAM_INT);
                        $consulta->bindValue(':id_pedido', $this->id_pedido, PDO::PARAM_INT);
                        $consulta->bindValue(':fecha', $this->fecha, PDO::PARAM_STR);
                        $consulta->bindValue(':monto', $this->monto, PDO::PARAM_INT);
                        $consulta->bindValue(':metodo_pago', $this->metodo_pago, PDO::PARAM_STR);
                        $consulta->bindValue(':estado', $this->estado, PDO::PARAM_STR);
                        $consulta->execute();
                        return $objetoAccesoDato->RetornarUltimoIdInsertado();
        }
}



?>