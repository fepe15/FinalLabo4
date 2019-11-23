-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2019 a las 15:32:05
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lacomandav2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id_cliente` int(10) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `apellido` varchar(15) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `contraseña` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id_cliente`, `nombre`, `apellido`, `correo`, `contraseña`) VALUES
(1, 'federico', 'peralta', 'fede@fede.com', '1234'),
(2, 'jose', 'lopez', 'fede@fede.com', '1234');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `usuario` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `clave` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `sector` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `estado` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `perfil` varchar(50) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `usuario`, `clave`, `sector`, `estado`, `perfil`) VALUES
(1, 'amorelli@gmail.com', '1234', 'Dueño', 'Activo', 'admin'),
(9, 'elbarman1', '1234', 'barra', 'suspendido', 'empleado'),
(10, 'candyman', '1234', 'candy bar', 'Activo', 'empleado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados_pedidos`
--

CREATE TABLE `estados_pedidos` (
  `id_estado` int(10) NOT NULL,
  `descripcion` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `estados_pedidos`
--

INSERT INTO `estados_pedidos` (`id_estado`, `descripcion`) VALUES
(1, 'comandado'),
(2, 'preparando'),
(3, 'finalizado'),
(4, 'entregado'),
(5, 'cancelado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `numero` int(8) UNSIGNED ZEROFILL NOT NULL,
  `mesa` int(5) UNSIGNED ZEROFILL NOT NULL,
  `importe` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `facturas`
--

INSERT INTO `facturas` (`numero`, `mesa`, `importe`, `fecha`) VALUES
(00000001, 00001, 310, '2018-05-03'),
(00000002, 00002, 570, '2018-06-01'),
(00000003, 00002, 410, '2018-06-05'),
(00000004, 00003, 390, '2018-07-10'),
(00000005, 00001, 80, '2018-11-15'),
(00000006, 00002, 80, '2018-11-15'),
(00000007, 00004, 0, '2018-11-15'),
(00000008, 00002, 0, '2018-11-15'),
(00000009, 00001, 0, '2018-11-15'),
(00000010, 00003, 80, '2018-11-15'),
(00000011, 00004, 0, '2018-11-15'),
(00000012, 00005, 0, '2018-11-15'),
(00000013, 00006, 0, '2018-11-15'),
(00000014, 00001, 70, '2018-11-15'),
(00000015, 00002, 70, '2018-11-15'),
(00000016, 00003, 0, '2018-11-15'),
(00000017, 00003, 70, '2018-11-15'),
(00000018, 00003, 0, '2018-11-19'),
(00000019, 00002, 0, '2018-11-19'),
(00000020, 00001, 540, '2018-11-19'),
(00000021, 00002, 520, '2018-11-19'),
(00000022, 00001, 0, '2019-02-15'),
(00000023, 00002, 80, '2019-02-15'),
(00000024, 00003, 0, '2019-02-15'),
(00000025, 00004, 70, '2019-02-15'),
(00000026, 00005, 70, '2019-02-15'),
(00000027, 00006, 0, '2019-02-15'),
(00000028, 00001, 0, '2019-02-15'),
(00000029, 00001, 0, '2019-02-15'),
(00000030, 00001, 773, '2019-02-19'),
(00000031, 00001, 0, '2019-02-19'),
(00000032, 00001, 0, '2019-02-19'),
(00000033, 00006, 0, '2019-02-19'),
(00000034, 00002, 240, '2019-02-19'),
(00000035, 00001, 410, '2019-02-20'),
(00000036, 00001, 320, '2019-02-21'),
(00000037, 00001, 0, '2019-02-26'),
(00000038, 00001, 320, '2019-02-26'),
(00000039, 00001, 170, '2019-02-26'),
(00000040, 00001, 0, '2019-02-26'),
(00000041, 00001, 0, '2019-02-26'),
(00000042, 00002, 0, '2019-02-26'),
(00000043, 00003, 0, '2019-02-26'),
(00000044, 00001, 0, '2019-02-26'),
(00000045, 00001, 0, '2019-02-26'),
(00000046, 00001, 0, '2019-02-26'),
(00000047, 00001, 0, '2019-02-26'),
(00000048, 00001, 0, '2019-02-26'),
(00000049, 00001, 0, '2019-02-26'),
(00000050, 00001, 0, '2019-02-26'),
(00000051, 00001, 0, '2019-02-26'),
(00000052, 00001, 0, '2019-02-26'),
(00000053, 00001, 0, '2019-02-26'),
(00000054, 00001, 0, '2019-02-26'),
(00000055, 00001, 0, '2019-02-26'),
(00000056, 00001, 0, '2019-02-26'),
(00000057, 00002, 0, '2019-02-26'),
(00000058, 00003, 0, '2019-02-26'),
(00000059, 00004, 0, '2019-02-26'),
(00000060, 00005, 0, '2019-02-26'),
(00000061, 00006, 0, '2019-02-26'),
(00000062, 00001, 0, '2019-02-26'),
(00000063, 00001, 0, '2019-02-26'),
(00000064, 00001, 0, '2019-02-26'),
(00000065, 00001, 0, '2019-02-26'),
(00000066, 00001, 0, '2019-02-26'),
(00000067, 00001, 0, '2019-02-26'),
(00000068, 00001, 0, '2019-02-26'),
(00000069, 00001, 0, '2019-02-26'),
(00000070, 00001, 0, '2019-02-26'),
(00000071, 00001, 0, '2019-02-26'),
(00000072, 00001, 0, '2019-02-26'),
(00000073, 00001, 0, '2019-02-26'),
(00000074, 00001, 0, '2019-02-26'),
(00000075, 00001, 0, '2019-02-26'),
(00000076, 00001, 0, '2019-02-26'),
(00000077, 00001, 0, '2019-02-26'),
(00000078, 00001, 0, '2019-02-26'),
(00000079, 00001, 0, '2019-02-26'),
(00000080, 00001, 0, '2019-02-26'),
(00000081, 00001, 0, '2019-02-26'),
(00000082, 00001, 0, '2019-02-26'),
(00000083, 00001, 0, '2019-02-26'),
(00000084, 00001, 0, '2019-02-26'),
(00000085, 00001, 0, '2019-02-26'),
(00000086, 00001, 0, '2019-02-26'),
(00000087, 00001, 0, '2019-02-26'),
(00000088, 00001, 0, '2019-02-26'),
(00000089, 00001, 0, '2019-02-26'),
(00000090, 00001, 0, '2019-02-26'),
(00000091, 00001, 0, '2019-02-26'),
(00000092, 00001, 0, '2019-02-26'),
(00000093, 00001, 0, '2019-02-26'),
(00000094, 00001, 0, '2019-02-26'),
(00000095, 00001, 0, '2019-02-26'),
(00000096, 00001, 0, '2019-02-26'),
(00000097, 00001, 0, '2019-02-26'),
(00000098, 00001, 0, '2019-02-26'),
(00000099, 00001, 0, '2019-02-26'),
(00000100, 00001, 0, '2019-02-26'),
(00000101, 00001, 0, '2019-02-26'),
(00000102, 00001, 0, '2019-02-26'),
(00000103, 00001, 0, '2019-02-26'),
(00000104, 00001, 0, '2019-02-26'),
(00000105, 00001, 0, '2019-02-26'),
(00000106, 00001, 0, '2019-02-26'),
(00000107, 00001, 0, '2019-02-26'),
(00000108, 00001, 0, '2019-02-26'),
(00000109, 00001, 0, '2019-02-26'),
(00000110, 00001, 0, '2019-02-26'),
(00000111, 00001, 0, '2019-02-26'),
(00000112, 00001, 0, '2019-02-26'),
(00000113, 00002, 0, '2019-02-26'),
(00000114, 00003, 0, '2019-02-26'),
(00000115, 00004, 0, '2019-02-26'),
(00000116, 00005, 0, '2019-02-26'),
(00000117, 00006, 0, '2019-02-26'),
(00000118, 00005, 0, '2019-02-26'),
(00000119, 00001, 0, '2019-02-26'),
(00000120, 00001, 0, '2019-02-26'),
(00000121, 00002, 0, '2019-02-26'),
(00000122, 00003, 0, '2019-02-26'),
(00000123, 00004, 0, '2019-02-26'),
(00000124, 00005, 0, '2019-02-26'),
(00000125, 00006, 0, '2019-02-26'),
(00000126, 00001, 0, '2019-02-26'),
(00000127, 00002, 0, '2019-02-26'),
(00000128, 00003, 0, '2019-02-26'),
(00000129, 00004, 0, '2019-02-26'),
(00000130, 00005, 0, '2019-02-26'),
(00000131, 00006, 0, '2019-02-26'),
(00000132, 00001, 0, '2019-02-26'),
(00000133, 00001, 0, '2019-02-26'),
(00000134, 00001, 0, '2019-02-26'),
(00000135, 00002, 0, '2019-02-26'),
(00000136, 00003, 0, '2019-02-26'),
(00000137, 00004, 0, '2019-02-26'),
(00000138, 00001, 0, '2019-02-26'),
(00000139, 00001, 0, '2019-02-26'),
(00000140, 00001, 0, '2019-02-26'),
(00000141, 00001, 0, '2019-02-26'),
(00000142, 00001, 0, '2019-02-26'),
(00000143, 00001, 0, '2019-02-26'),
(00000144, 00001, 0, '2019-02-26'),
(00000145, 00001, 0, '2019-02-26'),
(00000146, 00001, 0, '2019-02-26'),
(00000147, 00002, 0, '2019-02-26'),
(00000148, 00003, 0, '2019-02-26'),
(00000149, 00004, 0, '2019-02-26'),
(00000150, 00005, 0, '2019-02-26'),
(00000151, 00006, 0, '2019-02-26'),
(00000152, 00001, 0, '2019-02-26'),
(00000153, 00001, 0, '2019-02-26'),
(00000154, 00002, 0, '2019-02-26'),
(00000155, 00003, 0, '2019-02-26'),
(00000156, 00004, 0, '2019-02-26'),
(00000157, 00005, 0, '2019-02-26'),
(00000158, 00006, 0, '2019-02-26'),
(00000159, 00001, 0, '2019-02-27'),
(00000160, 00001, 0, '2019-02-27'),
(00000161, 00001, 0, '2019-02-27'),
(00000162, 00001, 0, '2019-02-27'),
(00000163, 00001, 0, '2019-02-27'),
(00000164, 00001, 0, '2019-02-27'),
(00000165, 00001, 0, '2019-02-27'),
(00000166, 00001, 0, '2019-02-27'),
(00000167, 00001, 0, '2019-02-27'),
(00000168, 00001, 0, '2019-02-27'),
(00000169, 00001, 0, '2019-02-27'),
(00000170, 00001, 0, '2019-02-27'),
(00000171, 00001, 0, '2019-02-27'),
(00000172, 00001, 320, '2019-02-27'),
(00000173, 00001, 0, '2019-02-27'),
(00000174, 00001, 0, '2019-02-27'),
(00000175, 00001, 0, '2019-02-27'),
(00000176, 00001, 0, '2019-02-27'),
(00000177, 00001, 0, '2019-02-27'),
(00000178, 00001, 0, '2019-02-27'),
(00000179, 00002, 0, '2019-02-27'),
(00000180, 00003, 0, '2019-02-27'),
(00000181, 00004, 0, '2019-02-27'),
(00000182, 00005, 0, '2019-02-27'),
(00000183, 00006, 0, '2019-02-27'),
(00000184, 00001, 490, '2019-02-28'),
(00000185, 00002, 320, '2019-02-28'),
(00000186, 00003, 170, '2019-02-28'),
(00000187, 00004, 80, '2019-02-28'),
(00000188, 00005, 150, '2019-02-28'),
(00000189, 00006, 320, '2019-02-28'),
(00000190, 00001, 0, '2019-02-28'),
(00000191, 00001, 0, '2019-02-28'),
(00000192, 00001, 0, '2019-02-28'),
(00000193, 00001, 0, '2019-02-28'),
(00000194, 00001, 0, '2019-02-28'),
(00000195, 00001, 0, '2019-02-28'),
(00000196, 00001, 0, '2019-02-28'),
(00000197, 00002, 0, '2019-02-28'),
(00000198, 00002, 0, '2019-02-28'),
(00000199, 00002, 0, '2019-02-28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `locales`
--

CREATE TABLE `locales` (
  `id_local` int(10) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `razon_social` varchar(30) NOT NULL,
  `cuit` int(20) NOT NULL,
  `telefono` int(20) NOT NULL,
  `id_rubro` int(10) NOT NULL,
  `foto` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `locales`
--

INSERT INTO `locales` (`id_local`, `nombre`, `razon_social`, `cuit`, `telefono`, `id_rubro`, `foto`) VALUES
(1, 'Burger King', 'Burguer King SA', 2147483647, 33333333, 3, '../../assets/IconosLocales/burguer.jpg'),
(2, 'El Tano', 'El Tano SRL', 2147483647, 2222222, 2, '../../assets/IconosLocales/eltano.jpg'),
(3, 'Tostado', 'Tostado SA', 2147483647, 999999, 4, '../../assets/IconosLocales/tostado.jpg'),
(4, 'Fuerza Natural', 'Fuerza Natural SRL', 78798798, 7777777, 5, '../../assets/IconosLocales/fuerzanatural.jpg'),
(5, 'Kentucky', 'Kentucky SA', 2147483647, 33333333, 7, '../../assets/IconosLocales/kentucky.jpg'),
(6, 'La Quintana', 'La Quintana SA', 2147483647, 33333333, 6, '../../assets/IconosLocales/laquintana.jpg'),
(7, 'Mostaza', 'Mostaza SA', 2147483647, 33333333, 3, '../../assets/IconosLocales/mostaza.jpg'),
(8, 'Cafe Martinez', 'Cafe Martinez SA', 2147483647, 33333333, 4, '../../assets/IconosLocales/cafemartinez.jpg'),
(9, 'El Club de la Milanesa', 'El Club de la Milanesa SA', 2147483647, 33333333, 6, '../../assets/IconosLocales/elclubdelamilanesa.jpg'),
(10, 'Las Cuartetas', 'Las Cuartetas SRL', 2147483647, 33333333, 7, '../../assets/IconosLocales/lascuartetas.jpg'),
(11, 'La Cabrera', 'La Cabrera', 2147483647, 22222222, 2, '../../assets/IconosLocales/lacabrera.jpg'),
(12, 'Milanga', 'milanga srl', 123, 123, 6, './fotos/adadsadds'),
(13, 'pepito', 'pepito srl', 123, 123, 2, './fotos/adadsadds'),
(14, 'fede', 'fede', 123, 123, 2, './fotos/adadsadds');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mesas`
--

CREATE TABLE `mesas` (
  `idMesa` int(5) UNSIGNED ZEROFILL NOT NULL,
  `estado` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `canUsos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `mesas`
--

INSERT INTO `mesas` (`idMesa`, `estado`, `canUsos`) VALUES
(00001, 'con cliente esperando pedido', 55),
(00002, 'Cerrada', 93),
(00003, 'con cliente esperando pedido', 21),
(00004, 'Cerrada', 9),
(00005, 'Cerrada', 13),
(00006, 'Cerrada', 34);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `id_pago` int(10) NOT NULL,
  `id_local` int(10) NOT NULL,
  `id_cliente` int(10) NOT NULL,
  `id_pedido` int(10) NOT NULL,
  `fecha` date NOT NULL,
  `monto` int(15) NOT NULL,
  `metodo_pago` varchar(15) NOT NULL,
  `estado` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pagos`
--

INSERT INTO `pagos` (`id_pago`, `id_local`, `id_cliente`, `id_pedido`, `fecha`, `monto`, `metodo_pago`, `estado`) VALUES
(3, 7, 2, 208, '2019-11-17', 240, 'efectivo', 'pendiente'),
(4, 1, 1, 209, '2019-11-17', 620, 'efectivo', 'pendiente'),
(6, 1, 1, 211, '2019-11-18', 80, 'efectivo', 'pendiente'),
(7, 1, 1, 212, '2019-11-18', 400, 'efectivo', 'pendiente'),
(10, 1, 2, 225, '2019-11-20', 240, 'efectivo', 'pendiente'),
(11, 1, 2, 226, '2019-11-20', 380, 'efectivo', 'pendiente'),
(12, 1, 2, 227, '2019-11-20', 580, 'efectivo', 'pendiente'),
(13, 12, 2, 228, '2019-11-20', 340, 'efectivo', 'pendiente'),
(14, 1, 2, 229, '2019-11-20', 250, 'efectivo', 'pendiente'),
(15, 12, 2, 230, '2019-11-20', 160, 'efectivo', 'pendiente'),
(16, 13, 2, 231, '2019-11-20', 390, 'efectivo', 'pendiente'),
(17, 1, 13, 233, '2019-11-22', 320, 'efectivo', 'pendiente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidodetalle`
--

CREATE TABLE `pedidodetalle` (
  `id_detalle` int(10) NOT NULL,
  `id_pedido` int(10) NOT NULL,
  `id_producto` int(10) NOT NULL,
  `id_estado` int(10) NOT NULL,
  `cantidad` int(5) DEFAULT NULL,
  `tiempo_preparacion` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pedidodetalle`
--

INSERT INTO `pedidodetalle` (`id_detalle`, `id_pedido`, `id_producto`, `id_estado`, `cantidad`, `tiempo_preparacion`) VALUES
(48, 208, 1, 1, NULL, NULL),
(49, 208, 1, 1, NULL, NULL),
(50, 208, 1, 1, NULL, NULL),
(51, 209, 2, 1, NULL, NULL),
(52, 209, 2, 1, NULL, NULL),
(53, 209, 2, 1, NULL, NULL),
(54, 209, 6, 1, NULL, NULL),
(55, 209, 6, 1, NULL, NULL),
(56, 209, 2, 1, NULL, NULL),
(61, 211, 1, 1, NULL, NULL),
(62, 212, 1, 1, NULL, NULL),
(63, 212, 2, 1, NULL, NULL),
(64, 212, 6, 1, NULL, NULL),
(65, 212, 10, 1, NULL, NULL),
(66, 213, 5, 1, NULL, NULL),
(67, 213, 5, 1, NULL, NULL),
(68, 213, 6, 1, NULL, NULL),
(69, 213, 6, 1, NULL, NULL),
(70, 213, 2, 1, NULL, NULL),
(71, 214, 1, 1, NULL, NULL),
(72, 214, 1, 1, NULL, NULL),
(73, 214, 1, 1, NULL, NULL),
(74, 214, 1, 1, NULL, NULL),
(75, 214, 1, 1, NULL, NULL),
(76, 215, 1, 1, NULL, NULL),
(77, 215, 1, 1, NULL, NULL),
(78, 215, 6, 1, NULL, NULL),
(79, 215, 11, 1, NULL, NULL),
(80, 216, 1, 1, NULL, NULL),
(81, 216, 1, 1, NULL, NULL),
(82, 216, 1, 1, NULL, NULL),
(83, 219, 1, 1, NULL, NULL),
(84, 219, 1, 1, NULL, NULL),
(85, 219, 1, 1, NULL, NULL),
(86, 220, 1, 1, NULL, NULL),
(87, 220, 1, 1, NULL, NULL),
(88, 220, 1, 1, NULL, NULL),
(89, 220, 1, 1, NULL, NULL),
(90, 221, 1, 1, NULL, NULL),
(91, 221, 1, 1, NULL, NULL),
(92, 221, 1, 1, NULL, NULL),
(93, 222, 1, 1, NULL, NULL),
(94, 222, 1, 1, NULL, NULL),
(95, 222, 1, 1, NULL, NULL),
(96, 222, 1, 1, NULL, NULL),
(97, 223, 2, 1, NULL, NULL),
(98, 223, 2, 1, NULL, NULL),
(99, 224, 1, 1, NULL, NULL),
(100, 224, 2, 1, NULL, NULL),
(101, 225, 1, 1, NULL, NULL),
(102, 225, 1, 1, NULL, NULL),
(103, 225, 1, 1, NULL, NULL),
(104, 226, 1, 1, NULL, NULL),
(105, 226, 4, 1, NULL, NULL),
(106, 226, 6, 1, NULL, NULL),
(107, 226, 9, 1, NULL, NULL),
(108, 227, 1, 1, NULL, NULL),
(109, 227, 1, 1, NULL, NULL),
(110, 227, 1, 1, NULL, NULL),
(111, 227, 7, 1, NULL, NULL),
(112, 227, 10, 1, NULL, NULL),
(113, 228, 7, 1, NULL, NULL),
(114, 228, 5, 1, NULL, NULL),
(115, 229, 1, 1, NULL, NULL),
(116, 229, 6, 1, NULL, NULL),
(117, 230, 1, 1, NULL, NULL),
(118, 230, 1, 1, NULL, NULL),
(119, 231, 1, 1, NULL, NULL),
(120, 231, 7, 1, NULL, NULL),
(121, 231, 9, 1, NULL, NULL),
(122, 233, 1, 1, NULL, NULL),
(123, 233, 1, 1, NULL, NULL),
(124, 233, 1, 1, NULL, NULL),
(125, 233, 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedido` int(10) NOT NULL,
  `fecha` date NOT NULL,
  `tiempo_entrega` int(11) NOT NULL,
  `id_cliente` int(10) DEFAULT NULL,
  `id_local` int(10) DEFAULT NULL,
  `id_estado` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id_pedido`, `fecha`, `tiempo_entrega`, `id_cliente`, `id_local`, `id_estado`) VALUES
(208, '2019-11-17', 50, 13, 7, 5),
(209, '2019-11-17', 50, 13, 1, 4),
(211, '2019-11-18', 50, 13, 1, 4),
(212, '2019-11-18', 50, 13, 1, 4),
(213, '2019-11-18', 50, 13, 1, 1),
(214, '2019-11-19', 50, 13, 1, 1),
(215, '2019-11-19', 50, 13, 1, 1),
(216, '2019-11-19', 50, 13, 1, 1),
(219, '2019-11-19', 50, 13, 5, 1),
(220, '2019-11-19', 50, 13, 1, 1),
(221, '2019-11-19', 50, 19, 1, 1),
(222, '2019-11-20', 50, 19, 1, 1),
(223, '2019-11-20', 50, 19, 1, 1),
(224, '2019-11-20', 50, 19, 1, 1),
(225, '2019-11-20', 50, 19, 1, 5),
(226, '2019-11-20', 50, 19, 1, 2),
(227, '2019-11-20', 50, 19, 1, 5),
(228, '2019-11-20', 50, 19, 12, 5),
(229, '2019-11-20', 50, 19, 1, 5),
(230, '2019-11-20', 50, 19, 12, 5),
(231, '2019-11-20', 50, 19, 13, 4),
(232, '2019-11-22', 50, 13, 1, 1),
(233, '2019-11-22', 50, 13, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(10) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `precio` float NOT NULL,
  `responsable` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `id_tipo` int(11) DEFAULT NULL,
  `cant_min` int(11) NOT NULL,
  `cant_max` int(11) NOT NULL,
  `cant_actual` int(11) NOT NULL,
  `punto_repo` int(11) NOT NULL,
  `tiempo_prep` int(11) NOT NULL,
  `foto` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `id_local` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `responsable`, `id_tipo`, `cant_min`, `cant_max`, `cant_actual`, `punto_repo`, `tiempo_prep`, `foto`, `id_local`) VALUES
(1, 'Coca-cola', 80, 'barra', 2, 0, 0, 4, 0, 0, '../../assets/IconosProductos/coca.jpg', NULL),
(2, 'Cerveza', 70, 'chopera', 2, 0, 0, 0, 0, 0, '../../assets/IconosProductos/coca.jpg', NULL),
(3, 'Trago', 90, 'barra', 2, 0, 0, 0, 0, 0, '../../assets/IconosProductos/coca.jpg', NULL),
(4, 'Sprite', 80, 'barra', 2, 0, 0, 0, 0, 0, '../../assets/IconosProductos/coca.jpg', NULL),
(5, 'Fanta', 80, 'barra', 2, 0, 0, 0, 0, 0, '../../assets/IconosProductos/coca.jpg', NULL),
(6, 'Pizza', 170, 'cocina', 4, 0, 0, 0, 0, 0, '../../assets/IconosProductos/coca.jpg', NULL),
(7, 'Milanesa con papas', 260, 'cocina', 4, 0, 0, 0, 0, 0, '../../assets/IconosProductos/coca.jpg', NULL),
(8, 'Empanadas', 33, 'cocina', 4, 0, 0, 0, 0, 0, '../../assets/IconosProductos/coca.jpg', NULL),
(9, 'Flan', 50, 'candy', 3, 0, 0, 0, 0, 0, '../../assets/IconosProductos/coca.jpg', NULL),
(10, 'Helado', 80, 'candy', 3, 0, 0, 0, 0, 0, '../../assets/IconosProductos/coca.jpg', NULL),
(11, 'Torta de chocolate', 120, 'candy', 3, 0, 0, 0, 0, 0, '../../assets/IconosProductos/coca.jpg', NULL),
(12, 'Frutillas con crema', 50, 'candy', 3, 0, 0, 0, 0, 0, '../../assets/IconosProductos/coca.jpg', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rubros`
--

CREATE TABLE `rubros` (
  `id_rubro` int(11) NOT NULL,
  `descripcion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `rubros`
--

INSERT INTO `rubros` (`id_rubro`, `descripcion`) VALUES
(1, 'Todos'),
(2, 'Parrillas'),
(3, 'Fast Food'),
(4, 'Cafeterias'),
(5, 'Veganos'),
(6, 'Restaurantes'),
(7, 'Pizzerias');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sesiones`
--

CREATE TABLE `sesiones` (
  `id` int(11) NOT NULL,
  `idEmpleado` int(11) NOT NULL,
  `horaInicio` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `horaFinal` varchar(20) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `sesiones`
--

INSERT INTO `sesiones` (`id`, `idEmpleado`, `horaInicio`, `horaFinal`) VALUES
(1, 1, '2018/11/04 4:12,08', ''),
(2, 1, '2018/11/04 4:12,43', ''),
(3, 1, '2018/11/04 4:13,00', ''),
(4, 1, '2018/11/04 18:52,51', ''),
(5, 1, '2018/11/04 19:17,02', ''),
(6, 1, '2018/11/04 19:40,39', ''),
(7, 2, '2018/11/04 21:21,34', ''),
(8, 2, '2018/11/04 21:22,50', '2018/11/04 21:22,53'),
(9, 2, '2018/11/04 21:30,12', '2018/11/04 21:30,41'),
(10, 1, '2018/11/04 21:30,46', '2018/11/04 21:31,40'),
(11, 2, '2018/11/04 21:32,02', '2018/11/04 21:33,26'),
(12, 1, '2018/11/04 21:33,33', ''),
(13, 1, '2018/11/04 22:21,24', '2018/11/04 22:23,36'),
(14, 2, '2018/11/04 22:24,55', '2018/11/04 22:25,38'),
(15, 2, '2018/11/05 3:43,58', '2018/11/05 3:45,11'),
(16, 2, '2018/11/05 3:45,17', ''),
(17, 2, '2018/11/07 1:02,39', '2018/11/07 2:36,31'),
(18, 2, '2018/11/07 2:37,03', '2018/11/07 3:08,00'),
(19, 1, '2018/11/07 3:08,07', '2018/11/07 3:13,50'),
(20, 2, '2018/11/07 3:14,17', ''),
(21, 2, '2018/11/08 23:11,08', '2018/11/08 23:18,17'),
(22, 2, '2018/11/09 1:26,01', '2018/11/09 1:26,45'),
(23, 1, '2018/11/09 1:26,51', '2018/11/09 1:38,06'),
(24, 1, '2018/11/09 1:38,12', '2018/11/09 1:38,16'),
(25, 2, '2018/11/09 1:38,21', '2018/11/09 1:47,03'),
(26, 1, '2018/11/09 1:48,26', '2018/11/09 1:49,33'),
(27, 2, '2018/11/09 1:50,20', '2018/11/09 1:54,13'),
(28, 2, '2018/11/10 13:01,20', ''),
(29, 2, '2018/11/10 16:12,34', ''),
(30, 2, '2018/11/10 20:52,07', '2018/11/10 21:23,55'),
(31, 2, '2018/11/10 21:56,37', '2018/11/10 21:56,41'),
(32, 1, '2018/11/10 21:56,44', '2018/11/10 21:57,26'),
(33, 3, '2018/11/10 21:57,28', '2018/11/10 21:57,32'),
(34, 4, '2018/11/10 21:57,33', '2018/11/10 21:57,36'),
(35, 5, '2018/11/10 21:57,38', '2018/11/10 21:57,41'),
(36, 8, '2018/11/10 21:57,42', '2018/11/10 21:57,44'),
(37, 2, '2018/11/10 21:58,33', '2018/11/10 23:42,51'),
(38, 1, '2018/11/10 23:42,59', '2018/11/10 23:43,03'),
(39, 3, '2018/11/10 23:43,04', '2018/11/10 23:43,08'),
(40, 4, '2018/11/10 23:43,10', '2018/11/10 23:43,12'),
(41, 5, '2018/11/10 23:43,14', '2018/11/10 23:43,16'),
(42, 8, '2018/11/10 23:43,17', '2018/11/10 23:43,19'),
(43, 8, '2018/11/10 23:54,46', '2018/11/10 23:54,52'),
(44, 8, '2018/11/11 0:03,02', '2018/11/11 0:03,07'),
(45, 5, '2018/11/11 0:03,10', '2018/11/11 0:04,11'),
(46, 13, '2018/11/11 0:04,38', '2018/11/11 0:27,57'),
(47, 3, '2018/11/11 0:28,01', '2018/11/11 0:28,25'),
(48, 4, '2018/11/11 0:28,31', '2018/11/11 0:28,38'),
(49, 4, '2018/11/11 0:28,44', '2018/11/11 1:19,47'),
(50, 3, '2018/11/11 1:19,49', '2018/11/11 1:41,39'),
(51, 3, '2018/11/11 1:41,43', '2018/11/11 1:53,30'),
(52, 8, '2018/11/11 2:15,14', '2018/11/11 2:17,29'),
(53, 2, '2018/11/11 2:17,33', '2018/11/11 2:17,45'),
(54, 4, '2018/11/11 2:17,49', '2018/11/11 2:17,57'),
(55, 2, '2018/11/11 2:21,21', '2018/11/11 2:21,26'),
(56, 4, '2018/11/11 2:21,27', '2018/11/11 2:21,41'),
(57, 5, '2018/11/11 2:21,44', '2018/11/11 2:21,52'),
(58, 8, '2018/11/11 2:21,54', '2018/11/11 2:22,02'),
(59, 3, '2018/11/11 2:22,06', ''),
(60, 4, '2018/11/11 2:22,19', '2018/11/11 2:22,21'),
(61, 4, '2018/11/11 2:22,27', '2018/11/11 2:48,12'),
(62, 3, '2018/11/11 2:48,16', '2018/11/11 2:49,26'),
(63, 8, '2018/11/11 2:49,29', '2018/11/11 2:49,35'),
(64, 4, '2018/11/11 2:49,36', '2018/11/11 2:49,39'),
(65, 3, '2018/11/11 2:49,40', '2018/11/11 2:51,39'),
(66, 3, '2018/11/11 2:51,42', '2018/11/11 2:51,47'),
(67, 4, '2018/11/11 15:00,35', '2018/11/11 15:02,41'),
(68, 4, '2018/11/11 15:02,43', '2018/11/11 15:02,45'),
(69, 3, '2018/11/11 15:02,48', '2018/11/11 15:04,10'),
(70, 4, '2018/11/11 15:04,15', '2018/11/11 15:04,42'),
(71, 4, '2018/11/11 15:09,27', '2018/11/11 15:09,30'),
(72, 8, '2018/11/11 15:09,32', '2018/11/11 15:09,35'),
(73, 5, '2018/11/11 15:09,54', '2018/11/11 15:10,03'),
(74, 8, '2018/11/11 15:10,05', '2018/11/11 15:10,11'),
(75, 3, '2018/11/11 15:10,12', '2018/11/11 15:10,19'),
(76, 5, '2018/11/11 15:11,50', '2018/11/11 15:11,53'),
(77, 3, '2018/11/11 15:11,54', '2018/11/11 15:11,57'),
(78, 3, '2018/11/11 15:11,59', '2018/11/11 15:12,03'),
(79, 3, '2018/11/11 15:12,05', '2018/11/11 15:12,09'),
(80, 2, '2018/11/11 15:12,14', '2018/11/11 15:12,21'),
(81, 3, '2018/11/11 15:14,15', '2018/11/11 15:14,23'),
(82, 5, '2018/11/11 15:14,35', '2018/11/11 15:14,59'),
(83, 5, '2018/11/11 15:25,23', '2018/11/11 15:25,26'),
(84, 5, '2018/11/11 15:25,28', '2018/11/11 15:25,32'),
(85, 3, '2018/11/11 15:25,35', '2018/11/11 15:25,39'),
(86, 4, '2018/11/11 15:25,40', '2018/11/11 15:25,42'),
(87, 5, '2018/11/11 15:25,44', '2018/11/11 15:25,46'),
(88, 13, '2018/11/11 15:25,47', '2018/11/11 15:25,50'),
(89, 8, '2018/11/11 15:25,51', '2018/11/11 15:25,54'),
(90, 5, '2018/11/11 15:26,53', '2018/11/11 15:26,55'),
(91, 5, '2018/11/11 15:27,32', '2018/11/11 15:29,30'),
(92, 5, '2018/11/11 15:29,31', ''),
(93, 5, '2018/11/11 15:29,31', '2018/11/11 15:29,39'),
(94, 4, '2018/11/11 15:29,41', '2018/11/11 15:29,47'),
(95, 4, '2018/11/11 15:29,49', '2018/11/11 15:31,52'),
(96, 4, '2018/11/11 15:31,54', '2018/11/11 15:32,05'),
(97, 4, '2018/11/11 15:32,07', '2018/11/11 15:32,08'),
(98, 5, '2018/11/11 15:32,10', '2018/11/11 15:32,27'),
(99, 3, '2018/11/11 15:32,36', '2018/11/11 15:32,40'),
(100, 4, '2018/11/11 15:36,48', '2018/11/11 15:36,55'),
(101, 3, '2018/11/11 15:36,57', '2018/11/11 15:37,40'),
(102, 4, '2018/11/11 15:37,43', '2018/11/11 15:37,47'),
(103, 4, '2018/11/11 15:37,49', '2018/11/11 15:37,51'),
(104, 5, '2018/11/11 15:37,52', '2018/11/11 15:38,04'),
(105, 5, '2018/11/11 15:38,05', '2018/11/11 15:38,07'),
(106, 4, '2018/11/11 15:48,58', ''),
(107, 4, '2018/11/11 15:48,58', '2018/11/11 15:49,04'),
(108, 3, '2018/11/11 15:49,06', '2018/11/11 15:49,22'),
(109, 2, '2018/11/11 15:49,24', '2018/11/11 15:49,29'),
(110, 4, '2018/11/11 15:49,31', '2018/11/11 15:49,44'),
(111, 3, '2018/11/11 15:49,47', '2018/11/11 15:50,45'),
(112, 2, '2018/11/11 15:50,48', '2018/11/11 15:50,51'),
(113, 3, '2018/11/11 15:51,01', '2018/11/11 15:51,09'),
(114, 5, '2018/11/11 15:51,11', '2018/11/11 15:51,13'),
(115, 3, '2018/11/11 15:51,14', '2018/11/11 15:53,22'),
(116, 3, '2018/11/11 15:53,23', '2018/11/11 15:54,46'),
(117, 3, '2018/11/11 15:54,50', '2018/11/11 15:54,56'),
(118, 4, '2018/11/11 15:54,58', '2018/11/11 15:55,01'),
(119, 5, '2018/11/11 15:55,02', '2018/11/11 15:55,07'),
(120, 4, '2018/11/11 15:57,00', '2018/11/11 15:57,10'),
(121, 3, '2018/11/11 15:57,13', '2018/11/11 15:57,49'),
(122, 3, '2018/11/11 15:57,54', '2018/11/11 15:57,57'),
(123, 4, '2018/11/11 15:58,02', '2018/11/11 15:58,09'),
(124, 3, '2018/11/11 15:58,10', '2018/11/11 15:58,17'),
(125, 5, '2018/11/11 15:58,19', '2018/11/11 15:58,22'),
(126, 5, '2018/11/11 15:58,27', '2018/11/11 15:58,34'),
(127, 3, '2018/11/11 15:59,50', '2018/11/11 16:00,05'),
(128, 4, '2018/11/11 16:05,36', '2018/11/11 16:05,46'),
(129, 4, '2018/11/11 16:05,48', '2018/11/11 16:05,49'),
(130, 8, '2018/11/11 16:05,50', '2018/11/11 16:05,53'),
(131, 2, '2018/11/11 16:05,57', '2018/11/11 16:08,02'),
(132, 3, '2018/11/11 16:08,04', '2018/11/11 16:08,40'),
(133, 4, '2018/11/11 16:08,42', '2018/11/11 16:08,45'),
(134, 5, '2018/11/11 16:08,46', '2018/11/11 16:09,11'),
(135, 8, '2018/11/11 16:09,19', '2018/11/11 16:09,21'),
(136, 8, '2018/11/11 16:09,26', '2018/11/11 16:09,29'),
(137, 3, '2018/11/11 16:09,32', '2018/11/11 16:09,34'),
(138, 2, '2018/11/11 16:10,42', '2018/11/11 16:12,02'),
(139, 5, '2018/11/11 16:12,22', '2018/11/11 16:12,24'),
(140, 3, '2018/11/11 16:12,25', '2018/11/11 16:12,26'),
(141, 3, '2018/11/11 16:12,32', '2018/11/11 16:12,50'),
(142, 5, '2018/11/11 16:16,47', '2018/11/11 16:17,46'),
(143, 4, '2018/11/11 16:17,49', '2018/11/11 16:18,24'),
(144, 3, '2018/11/11 16:48,42', '2018/11/11 17:46,11'),
(145, 13, '2018/11/11 17:46,16', '2018/11/11 17:46,25'),
(146, 13, '2018/11/11 17:46,54', '2018/11/11 17:46,57'),
(147, 1, '2018/11/11 18:40,36', ''),
(148, 1, '2018/11/12 0:15,50', '2018/11/12 0:23,03'),
(149, 1, '2018/11/12 0:41,51', '2018/11/12 0:49,52'),
(150, 1, '2018/11/12 0:51,23', ''),
(151, 2, '2018/11/13 0:56,45', '2018/11/13 1:39,28'),
(152, 13, '2018/11/13 1:39,32', '2018/11/13 2:38,55'),
(153, 2, '2018/11/13 2:38,59', '2018/11/13 2:40,28'),
(154, 3, '2018/11/13 2:40,31', '2018/11/13 2:40,59'),
(155, 4, '2018/11/13 2:41,05', '2018/11/13 2:41,11'),
(156, 5, '2018/11/13 2:41,13', '2018/11/13 2:41,33'),
(157, 8, '2018/11/13 2:41,36', '2018/11/13 2:41,50'),
(158, 13, '2018/11/13 2:41,53', '2018/11/13 3:20,15'),
(159, 3, '2018/11/13 3:20,20', '2018/11/13 3:21,47'),
(160, 3, '2018/11/13 3:21,58', '2018/11/13 3:24,34'),
(161, 4, '2018/11/13 3:24,36', '2018/11/13 3:24,39'),
(162, 5, '2018/11/13 3:24,41', '2018/11/13 3:24,43'),
(163, 3, '2018/11/13 3:27,06', '2018/11/13 3:27,09'),
(164, 4, '2018/11/13 3:27,10', '2018/11/13 3:27,13'),
(165, 5, '2018/11/13 3:27,15', '2018/11/13 3:27,58'),
(166, 5, '2018/11/13 3:28,01', '2018/11/13 3:56,36'),
(167, 4, '2018/11/13 3:56,38', '2018/11/13 4:19,06'),
(168, 5, '2018/11/13 4:19,09', ''),
(169, 3, '2018/11/14 0:52,10', '2018/11/14 1:27,53'),
(170, 13, '2018/11/14 1:27,55', '2018/11/14 1:29,22'),
(171, 2, '2018/11/14 1:29,25', '2018/11/14 1:30,28'),
(172, 4, '2018/11/14 1:30,32', '2018/11/14 1:30,39'),
(173, 8, '2018/11/14 1:30,43', '2018/11/14 1:30,52'),
(174, 13, '2018/11/14 1:30,55', '2018/11/14 1:42,28'),
(175, 2, '2018/11/14 1:42,30', '2018/11/14 1:42,45'),
(176, 4, '2018/11/14 1:42,48', '2018/11/14 1:42,56'),
(177, 13, '2018/11/14 1:43,00', '2018/11/14 2:11,19'),
(178, 2, '2018/11/14 2:11,22', '2018/11/14 2:11,38'),
(179, 4, '2018/11/14 2:11,40', '2018/11/14 2:11,49'),
(180, 13, '2018/11/14 2:11,51', '2018/11/14 2:42,11'),
(181, 2, '2018/11/14 2:42,14', '2018/11/14 2:42,29'),
(182, 8, '2018/11/14 2:42,32', '2018/11/14 2:42,44'),
(183, 13, '2018/11/14 2:42,49', '2018/11/14 3:17,26'),
(184, 2, '2018/11/14 3:17,29', '2018/11/14 3:17,40'),
(185, 8, '2018/11/14 3:17,45', '2018/11/14 3:17,53'),
(186, 13, '2018/11/14 3:17,57', '2018/11/14 3:39,17'),
(187, 3, '2018/11/14 3:39,19', '2018/11/14 3:39,23'),
(188, 4, '2018/11/14 3:39,25', '2018/11/14 3:42,35'),
(189, 13, '2018/11/14 3:42,36', ''),
(190, 1, '2018/11/15 0:42,19', ''),
(191, 4, '2018/11/15 2:41,48', '2018/11/15 2:46,18'),
(192, 1, '2018/11/15 2:46,21', '2018/11/15 3:19,42'),
(193, 2, '2018/11/15 3:19,44', '2018/11/15 4:17,14'),
(194, 3, '2018/11/15 4:17,16', '2018/11/15 4:17,25'),
(195, 4, '2018/11/15 4:17,28', '2018/11/15 4:17,30'),
(196, 8, '2018/11/15 4:17,32', '2018/11/15 4:17,37'),
(197, 1, '2018/11/15 4:17,48', '2018/11/15 4:24,48'),
(198, 2, '2018/11/15 4:26,05', '2018/11/15 4:30,09'),
(199, 2, '2018/11/15 4:30,11', '2018/11/15 4:31,36'),
(200, 1, '2018/11/15 4:31,39', ''),
(201, 2, '2018/11/15 4:37,04', '2018/11/15 5:14,33'),
(202, 8, '2018/11/15 5:14,35', '2018/11/15 5:14,47'),
(203, 2, '2018/11/15 5:14,51', '2018/11/15 5:17,47'),
(204, 8, '2018/11/15 5:17,50', '2018/11/15 5:17,58'),
(205, 1, '2018/11/15 5:18,00', '2018/11/15 5:18,13'),
(206, 2, '2018/11/15 5:18,15', '2018/11/15 5:21,02'),
(207, 4, '2018/11/15 5:21,05', '2018/11/15 5:21,06'),
(208, 8, '2018/11/15 5:21,08', '2018/11/15 5:21,16'),
(209, 2, '2018/11/15 5:21,20', '2018/11/15 5:23,37'),
(210, 1, '2018/11/15 5:23,42', '2018/11/15 5:26,38'),
(211, 2, '2018/11/15 5:26,43', '2018/11/15 5:26,47'),
(212, 2, '2018/11/15 5:28,32', '2018/11/15 5:33,43'),
(213, 1, '2018/11/15 5:33,45', '2018/11/15 5:33,56'),
(214, 3, '2018/11/15 5:33,59', '2018/11/15 5:34,05'),
(215, 3, '2018/11/15 5:35,09', '2018/11/15 5:36,13'),
(216, 2, '2018/11/15 5:36,18', '2018/11/15 5:45,33'),
(217, 13, '2018/11/15 5:45,35', '2018/11/15 6:20,19'),
(218, 1, '2018/11/15 6:20,25', ''),
(219, 2, '2018/11/15 6:24,59', '2018/11/15 6:25,09'),
(220, 1, '2018/11/15 6:31,37', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_producto`
--

CREATE TABLE `tipo_producto` (
  `id_tipo` int(10) NOT NULL,
  `descripcion` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipo_producto`
--

INSERT INTO `tipo_producto` (`id_tipo`, `descripcion`) VALUES
(1, 'todos'),
(2, 'bebidas'),
(3, 'cafeteria'),
(4, 'Platos'),
(5, 'sandwiches');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `clave` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `perfil` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `sexo` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id_local` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `clave`, `perfil`, `sexo`, `estado`, `id_local`) VALUES
(1, 'admin@gmail.com', 'admin', 'admin', 'Hombre', 'activo', NULL),
(2, 'mozo1@gmail.com', '1234', 'mozo', 'Hombre', 'activo', NULL),
(3, 'cocina1@gmail.com', '1234', 'cocina', 'Mujer', 'activo', NULL),
(4, 'barra1@gmail.com', '1234', 'barra', 'Hombre', 'activo', NULL),
(5, 'candy1@gmail.com', '1234', 'candy', 'Mujer', 'activo', NULL),
(6, 'mc@gmail.com', '1234', 'local', 'Hombre', 'activo', NULL),
(8, 'admin@gmail.com', '1234', 'administrador', 'Hombre', 'activo', NULL),
(9, 'mozo2@gmail.com', '1234', 'mozo', 'Mujer', 'activo', NULL),
(11, 'chopera2@gmail.com', '1234', 'chopera', 'Hombre', 'activo', NULL),
(13, 'cliente1@gmail.com', '1234', 'cliente', 'Hombre', 'activo', NULL),
(18, 'burgerking@bk.com', '1234', 'local', NULL, NULL, 1),
(19, 'fede@fede.com', '1234', 'cliente', NULL, NULL, NULL),
(20, 'milanga@m.com', '1234', 'local', NULL, NULL, 12),
(21, 'pepito@p.com', '1234', 'local', NULL, NULL, 13);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estados_pedidos`
--
ALTER TABLE `estados_pedidos`
  ADD PRIMARY KEY (`id_estado`);

--
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`numero`);

--
-- Indices de la tabla `locales`
--
ALTER TABLE `locales`
  ADD PRIMARY KEY (`id_local`),
  ADD KEY `fk_rubros` (`id_rubro`);

--
-- Indices de la tabla `mesas`
--
ALTER TABLE `mesas`
  ADD PRIMARY KEY (`idMesa`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id_pago`),
  ADD KEY `id_local` (`id_local`),
  ADD KEY `fk_pedido` (`id_pedido`),
  ADD KEY `id_cliente` (`id_cliente`);

--
-- Indices de la tabla `pedidodetalle`
--
ALTER TABLE `pedidodetalle`
  ADD PRIMARY KEY (`id_detalle`),
  ADD KEY `fk_id_estado` (`id_estado`),
  ADD KEY `producto_fk` (`id_producto`),
  ADD KEY `pedido_fk` (`id_pedido`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedido`),
  ADD KEY `FK_local` (`id_local`),
  ADD KEY `FK_estado` (`id_estado`),
  ADD KEY `FK_cliente` (`id_cliente`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_Ordenes_Tickets` (`id_tipo`),
  ADD KEY `FK_locales` (`id_local`);

--
-- Indices de la tabla `rubros`
--
ALTER TABLE `rubros`
  ADD PRIMARY KEY (`id_rubro`);

--
-- Indices de la tabla `sesiones`
--
ALTER TABLE `sesiones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_producto`
--
ALTER TABLE `tipo_producto`
  ADD PRIMARY KEY (`id_tipo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_local_users` (`id_local`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id_cliente` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `estados_pedidos`
--
ALTER TABLE `estados_pedidos`
  MODIFY `id_estado` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `facturas`
--
ALTER TABLE `facturas`
  MODIFY `numero` int(8) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=200;

--
-- AUTO_INCREMENT de la tabla `locales`
--
ALTER TABLE `locales`
  MODIFY `id_local` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `mesas`
--
ALTER TABLE `mesas`
  MODIFY `idMesa` int(5) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id_pago` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `pedidodetalle`
--
ALTER TABLE `pedidodetalle`
  MODIFY `id_detalle` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=126;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedido` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=234;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `rubros`
--
ALTER TABLE `rubros`
  MODIFY `id_rubro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `sesiones`
--
ALTER TABLE `sesiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=221;

--
-- AUTO_INCREMENT de la tabla `tipo_producto`
--
ALTER TABLE `tipo_producto`
  MODIFY `id_tipo` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `locales`
--
ALTER TABLE `locales`
  ADD CONSTRAINT `fk_rubros` FOREIGN KEY (`id_rubro`) REFERENCES `rubros` (`id_rubro`);

--
-- Filtros para la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD CONSTRAINT `fk_pedido` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id_pedido`),
  ADD CONSTRAINT `pagos_ibfk_1` FOREIGN KEY (`id_local`) REFERENCES `locales` (`id_local`),
  ADD CONSTRAINT `pagos_ibfk_2` FOREIGN KEY (`id_cliente`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `pedidodetalle`
--
ALTER TABLE `pedidodetalle`
  ADD CONSTRAINT `fk_id_estado` FOREIGN KEY (`id_estado`) REFERENCES `estados_pedidos` (`id_estado`),
  ADD CONSTRAINT `fk_producto_id` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `pedido_fk` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id_pedido`),
  ADD CONSTRAINT `producto_fk` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `FK_estado` FOREIGN KEY (`id_estado`) REFERENCES `estados_pedidos` (`id_estado`),
  ADD CONSTRAINT `FK_local` FOREIGN KEY (`id_local`) REFERENCES `locales` (`id_local`),
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `FK_Ordenes_Tickets` FOREIGN KEY (`id_tipo`) REFERENCES `tipo_producto` (`id_tipo`),
  ADD CONSTRAINT `FK_locales` FOREIGN KEY (`id_local`) REFERENCES `locales` (`id_local`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_local_users` FOREIGN KEY (`id_local`) REFERENCES `locales` (`id_local`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
