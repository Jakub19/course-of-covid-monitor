using Microsoft.EntityFrameworkCore.Migrations;

namespace covid_monitor_api.Migrations.DailyInformationForm
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DailyInformations",
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
                    RunningNose = table.Column<bool>(nullable: false),
                    MusclePain = table.Column<int>(nullable: false),
                    DryCough = table.Column<bool>(nullable: false),
                    Fatigue = table.Column<int>(nullable: false),
                    LossOfTaste = table.Column<bool>(nullable: false),
                    DiffBreathing = table.Column<int>(nullable: false),
                    ChestPain = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DailyInformations", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DailyInformations");
        }
    }
}
