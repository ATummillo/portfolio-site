#!/bin/sh

npm run build
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --no-input

if [ "$DEBUG" = 1 ]; then
    echo ""
    echo "Running in debug mode!"
    echo ""
else
    exec "$@"
fi
