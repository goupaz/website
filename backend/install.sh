#!/usr/bin/env bash
# Set Postgres
# initdb /usr/local/var/postgres

# Create db user and database with owner privileges

#PGPASSWORD=goupaz psql -h localhost -U goupaz -p 31001 goupaz_db

# psql postgres -c "CREATE USER goupaz WITH PASSWORD 'goupaz';"
# psql postgres -c "CREATE DATABASE goupaz_db WITH OWNER 'jobhaxdbuser';"
# 
# PGPASSWORD=goupaz psql -h localhost -U goupaz -p 31001 goupaz_db -c "CREATE USER goup WITH PASSWORD 'goup'"
# PGPASSWORD=goupaz psql -h localhost -U goupaz -p 31001 goupaz_db -c "CREATE DATABASE goup_db WITH OWNER 'goup'"
# PGPASSWORD=goupaz psql -h localhost -U goupaz -p 31001 goupaz_db -c "ALTER USER goup CREATEDB;"
# PGPASSWORD=goupaz psql -h localhost -U goupaz -p 31001 goupaz_db -c "DROP DATABASE goupaz_db;"
# Install python dependencies for application:
pip3 install -r requirements.txt

# Migrate application data changes to postgres:

python3 manage.py makemigrations
python3 manage.py migrate

# Create superuser for admin panel:
python3 manage.py createsuperuser
