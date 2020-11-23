#!/bin/sh

echo "Waiting PostgreSQL to start on 5432..."


echo "PostgreSQL started"

bin/rails db:create
bin/rails db:migrate