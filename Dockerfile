FROM python:3.11-slim
WORKDIR /mines
ADD . .
RUN pip install poetry && poetry install
EXPOSE 8000/tcp
ENTRYPOINT ["poetry", "run", "gunicorn", "app:app", "-k", "gevent", "-b", "0.0.0.0:8000"]
