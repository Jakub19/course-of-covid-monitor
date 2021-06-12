using Microsoft.EntityFrameworkCore.Migrations;

namespace covid_monitor_api.Migrations.HealthInformationOverview
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsNotifOn",
                table: "HealthInformationOverview",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsNotifOn",
                table: "HealthInformationOverview");
        }
    }
}
