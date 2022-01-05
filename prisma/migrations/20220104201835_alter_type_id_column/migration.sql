/*
  Warnings:

  - The primary key for the `dadosContratoComercial` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `dadosContratoComercial` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_dadosContratoComercial" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
    "PTMaxSistemaKWP" REAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_dadosContratoComercial" ("AreaTInstalacao", "Email", "IdPainelName", "MConsumo", "MIrradiacao", "Name", "PInversor", "PModulos", "PSistema", "PTMaxSistemaKWP", "TModulosAplicados", "created_at", "id") SELECT "AreaTInstalacao", "Email", "IdPainelName", "MConsumo", "MIrradiacao", "Name", "PInversor", "PModulos", "PSistema", "PTMaxSistemaKWP", "TModulosAplicados", "created_at", "id" FROM "dadosContratoComercial";
DROP TABLE "dadosContratoComercial";
ALTER TABLE "new_dadosContratoComercial" RENAME TO "dadosContratoComercial";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
