-- -----------------------------------------------------
-- Schema form_arweave_db
-- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS `form_arweave_db`;
USE `form_arweave_db` ;

-- -----------------------------------------------------
-- Table `form_arweave_db`.`formdata`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `form_arweave_db`.`formdata` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `transaction_id` VARCHAR(255) NOT NULL,
    `user_id` VARCHAR(255) NOT NULL,
    `question_id` VARCHAR(255) NOT NULL,
    `chapter_name` VARCHAR(255) NOT NULL,
    `textfield_1` TEXT NOT NULL,
    `textfield_2` TEXT NOT NULL,
    `optional_1` VARCHAR(255) NULL DEFAULT NULL,
    `optional_2` VARCHAR(255) NULL DEFAULT NULL,
    `optional_3` VARCHAR(255) NULL DEFAULT NULL,
    `optional_4` VARCHAR(255) NULL DEFAULT NULL,
    `optional_5` VARCHAR(255) NULL DEFAULT NULL,
    PRIMARY KEY (`id`))
