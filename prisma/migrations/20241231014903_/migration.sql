-- CreateTable
CREATE TABLE `Discu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `prenom` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `numeroDeTelephone` VARCHAR(191) NOT NULL,
    `codePostal` VARCHAR(191) NOT NULL,
    `niveau` VARCHAR(191) NOT NULL,
    `moyenneDernierControle` VARCHAR(191) NOT NULL,
    `nombreEleveBesoinProfesseur` VARCHAR(191) NOT NULL,
    `typeProfesseur` VARCHAR(191) NOT NULL,
    `notelorsdeladerniercontrole` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
