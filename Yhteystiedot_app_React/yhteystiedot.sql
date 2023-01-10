-- --------------------------------------------------------
-- Verkkotietokone:              127.0.0.1
-- Palvelinversio:               10.11.0-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Versio:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for puhelinluettelo
CREATE DATABASE IF NOT EXISTS `yhteystiedot` /*!40100 DEFAULT CHARACTER SET utf8mb3 */;
USE `yhteystiedot`;

-- Dumping structure for taulu puhelinluettelo.henkilot
CREATE TABLE IF NOT EXISTS `henkilot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `etunimi` varchar(50) DEFAULT NULL,
  `sukunimi` varchar(50) DEFAULT NULL,
  `puhelinnumero` varchar(50) DEFAULT NULL,
  `katuosoite` varchar(50) DEFAULT NULL,
  `postinumero` varchar(50) DEFAULT NULL,
  `maa` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb3;

-- Tietojen vientiä ei oltu valittu.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
