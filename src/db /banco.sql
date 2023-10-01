-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Zipchat
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Zipchat
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Zipchat` DEFAULT CHARACTER SET utf8 ;
USE `Zipchat` ;

-- -----------------------------------------------------
-- Table `Zipchat`.`Realm`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Zipchat`.`Realm` (
  `id_realm` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `client_id` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_realm`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Zipchat`.`Client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Zipchat`.`Client` (
  `id_client` VARCHAR(255) NOT NULL,
  `Realm_id_realm` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_client`),
  INDEX `fk_Client_Realm1_idx` (`Realm_id_realm` ASC) VISIBLE,
  CONSTRAINT `fk_Client_Realm1`
    FOREIGN KEY (`Realm_id_realm`)
    REFERENCES `Zipchat`.`Realm` (`id_realm`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Zipchat`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Zipchat`.`Usuario` (
  `id_usuario` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(70) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `contato` VARCHAR(50) NULL,
  `Client_id_client` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  INDEX `fk_Usuario_Client_idx` (`Client_id_client` ASC) VISIBLE,
  CONSTRAINT `fk_Usuario_Client`
    FOREIGN KEY (`Client_id_client`)
    REFERENCES `Zipchat`.`Client` (`id_client`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
