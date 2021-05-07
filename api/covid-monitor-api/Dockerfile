FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["covid-monitor-api/covid-monitor-api.csproj", "covid-monitor-api/"]
RUN dotnet restore "covid-monitor-api/covid-monitor-api.csproj"
COPY . .
WORKDIR "/src/covid-monitor-api"
RUN dotnet build "covid-monitor-api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "covid-monitor-api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "covid-monitor-api.dll"]