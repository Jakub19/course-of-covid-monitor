FROM mcr.microsoft.com/mssql/server:2019-CU10-ubuntu-20.04
ENV ACCEPT_EULA=Y
ENV SA_PASSWORD=DevelopmentTmpPassword22
COPY ./ ./
ENTRYPOINT [ "/bin/bash", "entrypoint.sh" ]
CMD [ "/opt/mssql/bin/sqlservr" ]
