using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace covid_monitor_api.Migrations.DailyInformationForm
{
    public partial class second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DailyInformationForm",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OwnerId = table.Column<string>(nullable: true),
                    Temperature = table.Column<int>(nullable: false),
                    BloodPressure = table.Column<string>(nullable: false),
                    Saturation = table.Column<int>(nullable: false),
                    Pulse = table.Column<int>(nullable: false),
                    Headache = table.Column<int>(nullable: false),
                    RunningNose = table.Column<int>(nullable: false),
                    MusclePain = table.Column<int>(nullable: false),
                    DryCough = table.Column<int>(nullable: false),
                    Fatigue = table.Column<int>(nullable: false),
                    LossOfTaste = table.Column<int>(nullable: false),
                    DiffBreathing = table.Column<int>(nullable: false),
                    ChestPain = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DailyInformationForm", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "HealthInformationOverview",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OwnerId = table.Column<string>(nullable: true),
                    CovidPositiveSince = table.Column<DateTime>(nullable: false),
                    BirthDate = table.Column<DateTime>(nullable: false),
                    Gender = table.Column<string>(nullable: false),
                    Height = table.Column<int>(nullable: false),
                    Weight = table.Column<int>(nullable: false),
                    BloodType = table.Column<string>(nullable: false),
                    IsNotifOn = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HealthInformationOverview", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DailyInformationForm");

            migrationBuilder.DropTable(
                name: "HealthInformationOverview");
        }
    }
}
