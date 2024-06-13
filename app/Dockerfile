FROM python:3.10-alpine3.17
WORKDIR /app
COPY requirements.txt /app/app/requirements.txt
COPY main.py /app/
COPY time_keeper.py /app/
RUN pip install --no-cache-dir --upgrade -r /app/app/requirements.txt
RUN addgroup -g 2000 worker \
    && adduser -u 2000 -G worker -s /bin/sh -D worker
USER worker