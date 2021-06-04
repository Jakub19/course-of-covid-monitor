FROM mcr.microsoft.com/mssql/server
ENV ACCEPT_EULA=Y
COPY ./ ./
ENTRYPOINT [ "/bin/bash", "entrypoint.sh" ]
CMD [ "/opt/mssql/bin/sqlservr" ]
