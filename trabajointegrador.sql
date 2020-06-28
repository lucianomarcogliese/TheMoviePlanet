-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.11-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para trabajo_integrador
CREATE DATABASE IF NOT EXISTS `trabajo_integrador` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `trabajo_integrador`;

-- Volcando estructura para tabla trabajo_integrador.resenas
CREATE TABLE IF NOT EXISTS `resenas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `resenas` varchar(255) NOT NULL,
  `fecha_de_creacion` date NOT NULL,
  `fecha_de_actualizacion` date NOT NULL,
  `rating` decimal(10,0) NOT NULL DEFAULT 0,
  `id_peliculas` int(255) unsigned NOT NULL,
  `id_usuarios` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Índice 2` (`id_usuarios`),
  CONSTRAINT `FK__usuarios` FOREIGN KEY (`id_usuarios`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla trabajo_integrador.resenas: ~20 rows (aproximadamente)
DELETE FROM `resenas`;
/*!40000 ALTER TABLE `resenas` DISABLE KEYS */;
INSERT INTO `resenas` (`id`, `resenas`, `fecha_de_creacion`, `fecha_de_actualizacion`, `rating`, `id_peliculas`, `id_usuarios`) VALUES
	(1, 'Sailor suit and machine gun: muy buena pelicula', '2020-06-08', '2020-06-08', 9, 66788, 1),
	(2, 'Becky: pesima pelicula, pintaba para mas. Decepcionante.', '2020-06-08', '2020-06-08', 3, 601844, 1),
	(3, 'Onward: PE LI CU LON, super recomendable.', '2020-06-08', '2020-06-08', 10, 508439, 1),
	(4, 'Sniper: normal... pintaba para mas.', '2020-06-08', '2020-06-08', 5, 702936, 1),
	(5, 'Normal.. se esperaba mas.', '2020-06-08', '2020-06-08', 6, 601844, 2),
	(6, 'Shirley: Interesante.', '2020-06-08', '2020-06-08', 7, 547017, 2),
	(7, '7500: muy buena pelicula, super recomendable.', '2020-06-08', '2020-06-08', 9, 509585, 2),
	(8, 'Para mirarla unas cuantas veces. Muy buena.', '2020-06-08', '2020-06-08', 8, 66788, 2),
	(9, 'normal.. esperaba mas', '2020-06-08', '2020-06-08', 5, 66788, 3),
	(10, 'ta buena pero hasta ahi', '2020-06-08', '2020-06-08', 6, 468816, 3),
	(11, 'Onward es un peliculon de aquellos, impresionante', '2020-06-08', '2020-06-08', 10, 508439, 3),
	(12, 'shirley me gusto, interesante', '2020-06-08', '2020-06-08', 7, 547017, 3),
	(13, '7500 increible pelicula', '2020-06-08', '2020-06-08', 10, 509585, 3),
	(14, 'es pe ta cu lar! ', '2020-06-08', '2020-06-08', 9, 339095, 4),
	(15, 'malisima.. se esperaba mas', '2020-06-08', '2020-06-08', 4, 38700, 4),
	(16, 'De lo mejor que he visto..', '2020-06-08', '2020-06-08', 10, 238, 4),
	(17, 'Sniper fue decepcionante..', '2020-06-08', '2020-06-08', 5, 702936, 4),
	(19, 'parasite: mala pelicula', '2020-06-08', '2020-06-08', 5, 496243, 5),
	(20, 'onward: ni lo dudes, mirala.', '2020-06-08', '2020-06-08', 10, 508439, 5),
	(21, 'Mamita querida.. que es esto. ', '2020-06-08', '2020-06-08', 1, 38700, 5);
/*!40000 ALTER TABLE `resenas` ENABLE KEYS */;

-- Volcando estructura para tabla trabajo_integrador.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `fecha_de_nacimiento` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `email_users_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla trabajo_integrador.usuarios: ~6 rows (aproximadamente)
DELETE FROM `usuarios`;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`id`, `nombre`, `contraseña`, `email`, `fecha_de_nacimiento`) VALUES
	(1, 'Luciano', '$2a$10$PEPYgq70cIgz1V2gqQDjUehJmS/XHjRm3IiHYIHB1qJE5t9NfRsjK', 'lucianomarcogliese@gmail.com', '2001-01-15 00:00:00'),
	(2, 'Juani', '$2a$10$.CKbR17Dm/gdM1rZKfMpdern9nUPfbd1PGgK2293uCK4.URO.zvhu', 'juanibedoian@gmail.com', '2001-12-31 00:00:00'),
	(3, 'Matias', '$2a$10$Aoz6Eh/2qMjNcJ0T8OTNju2LzxzicswKoWhKx4MkHhPdlEYDHv/dK', 'matiasgallardo@gmail.com', '2001-11-30 00:00:00'),
	(4, 'Quintero', '$2a$10$f0BWDpWg6lLCvXmcB.CaV.vPNfgtV2wnjdSA8sKr4rvJvu1Rdw4/O', 'juanferquintero@gmail.com', '2018-12-09 00:00:00'),
	(5, 'Pratto', '$2a$10$xyxJTIlmo6O/srl0Lyx.DOciwKv4nM2gM60nqeT5tlflgOIv46bNC', 'lucaspratto@gmail.com', '2018-12-09 00:00:00'),
	(30, 'dario', '$2a$10$fPzpX5uKjwhhW8TZP5rhZe1pXiQBlD0UIMrNQcH1m96bxhJqgWH5G', 'dario@gmail.com', '2019-12-31 00:00:00');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
