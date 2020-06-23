using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication8.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Szpitale",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NazwaSzpitala = table.Column<string>(nullable: true),
                    Adres = table.Column<string>(nullable: true),
                    Data = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Szpitale", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Doktorzy",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Imie = table.Column<string>(nullable: true),
                    Nazwisko = table.Column<string>(nullable: true),
                    SzpitalId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Doktorzy", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Doktorzy_Szpitale_SzpitalId",
                        column: x => x.SzpitalId,
                        principalTable: "Szpitale",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Operacje",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NazwaOperacji = table.Column<string>(nullable: true),
                    Opis = table.Column<string>(nullable: true),
                    Cena = table.Column<int>(nullable: false),
                    SzpitalId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Operacje", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Operacje_Szpitale_SzpitalId",
                        column: x => x.SzpitalId,
                        principalTable: "Szpitale",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Doktorzy_SzpitalId",
                table: "Doktorzy",
                column: "SzpitalId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Operacje_SzpitalId",
                table: "Operacje",
                column: "SzpitalId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Doktorzy");

            migrationBuilder.DropTable(
                name: "Operacje");

            migrationBuilder.DropTable(
                name: "Szpitale");
        }
    }
}
