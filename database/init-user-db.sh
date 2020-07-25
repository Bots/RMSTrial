#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE TABLE users (
	    info json NOT NULL
    );
    GRANT ALL PRIVILEGES ON DATABASE userdb TO postgres;
EOSQL