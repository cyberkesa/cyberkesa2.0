FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN apt-get update && apt-get install -y libpq-dev
RUN pip install psycopg2-binary
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV FLASK_APP=run.py
ENV FLASK_ENV=development

EXPOSE 8000

CMD ["flask", "run", "--host=0.0.0.0", "--port=8000"]
