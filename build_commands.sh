npm run build
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --no-input