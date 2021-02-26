# pull official base image
FROM node:15.10-alpine

# set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# update and upgrade alpine packages
RUN apk update && apk upgrade

# install python3
RUN apk add --no-cache python3 \
    && ln -s /usr/bin/python3 /bin/python \
    && ln -s /usr/bin/pip3 /bin/pip \
    && python -m ensurepip \
    && pip install --upgrade pip

WORKDIR /app
COPY ./src /app
COPY ./requirements.txt /app
COPY ./package.json /app

# install python dependencies
RUN pip install -r requirements.txt

# install node packages
RUN npm install -g npm@7.6.0
RUN npm install

# for projects with a frontend
COPY ./webpack.prod.config.js /app
RUN npm run build

RUN python manage.py makemigrations
RUN python manage.py migrate
RUN python manage.py collectstatic --no-input

### Production Deployment
RUN mkdir -p /vol/web/static
RUN adduser -D myuser
RUN chown -R myuser:myuser /vol/
RUN chmod -R 755 /vol/web
USER myuser