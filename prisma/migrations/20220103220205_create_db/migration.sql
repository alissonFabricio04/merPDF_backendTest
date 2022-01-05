-- CreateTable
CREATE TABLE "dadosContratoComercial" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "IdPainelName" TEXT NOT NULL,
    "MConsumo" INTEGER NOT NULL,
    "MIrradiacao" INTEGER NOT NULL,
    "PModulos" INTEGER NOT NULL,
    "AreaTInstalacao" INTEGER NOT NULL,
    "TModulosAplicados" INTEGER NOT NULL,
    "PSistema" INTEGER NOT NULL,
    "PInversor" INTEGER NOT NULL,
    "PTMaxSistemaKWP" INTEGER NOT NULL
);
