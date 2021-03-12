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
COPY ./webpack.config.prod.js /app
COPY ./build_commands.sh /app

# install python dependencies
RUN pip install -r requirements.txt

# install node packages
RUN npm install -g npm@latest
RUN npm install

RUN mkdir -p /vol/web/static
