/*
  Warnings:

  - You are about to alter the column `AreaTInstalacao` on the `dadosContratoComercial` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `MConsumo` on the `dadosContratoComercial` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `MIrradiacao` on the `dadosContratoComercial` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `PInversor` on the `dadosContratoComercial` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `PModulos` on the `dadosContratoComercial` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `PSistema` on the `dadosContratoComercial` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `PTMaxSistemaKWP` on the `dadosContratoComercial` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_dadosContratoComercial" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "IdPainelName" TEXT NOT NULL,
    "MConsumo" REAL NOT NULL,
    "MIrradiacao" REAL NOT NULL,
    "PModulos" REAL NOT NULL,
    "AreaTInstalacao" REAL NOT NULL,
    "TModulosAplicados" INTEGER NOT NULL,
    "PSistema" REAL NOT NULL,
    "PInversor" REAL NOT NULL,
    "PTMaxSistemaKWP" REAL NOT NULL
);
INSERT INTO "new_dadosContratoComercial" ("AreaTInstalacao", "Email", "IdPainelName", "MConsumo", "MIrradiacao", "Name", "PInversor", "PModulos", "PSistema", "PTMaxSistemaKWP", "TModulosAplicados", "id") SELECT "AreaTInstalacao", "Email", "IdPainelName", "MConsumo", "MIrradiacao", "Name", "PInversor", "PModulos", "PSistema", "PTMaxSistemaKWP", "TModulosAplicados", "id" FROM "dadosContratoComercial";
DROP TABLE "dadosContratoComercial";
ALTER TABLE "new_dadosContratoComercial" RENAME TO "dadosContratoComercial";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
