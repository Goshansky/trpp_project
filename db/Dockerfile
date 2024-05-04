FROM postgres:16
COPY websitedb.sql /docker-entrypoint-initdb.d/
ENV POSTGRES_PASSWORD=pass
ENV POSTGRES_USER=user
ENV POSTGRES_DB=db