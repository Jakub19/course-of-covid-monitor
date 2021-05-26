FROM mcr.microsoft.com/dotnet/aspnet:3.1
ENV ASPNETCORE_URLS=http://+:50970
COPY bin/Release/netcoreapp3.1/publish/ App/
WORKDIR /App
ENTRYPOINT ["dotnet", "covid-monitor-api.dll"]