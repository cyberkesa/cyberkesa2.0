# cyberkesa.ru – сайт-блог по веб-разработке


## Python, pip – https://pypi.org/project/pip/

## Внести список установленных пакетов в requirements.txt:
# pip freeze > requirements.txt

# Или команда из корня:
# pip install -r backend/requirements.txt


# Весь проект:

## Backend:

# Python Flask – https://flask.palletsprojects.com/en/stable/
# Flask-Migrate – https://flask-migrate.readthedocs.io/en/latest/
# SQLAlchemy – работа с базой данных – https://www.sqlalchemy.org
# REST API

## Frontend:

# React -> Next.js (SSR) – https://nextjs.org
# yarn only! – https://yarnpkg.com
# TailwindCSS – https://tailwindcss.com
# Open Graph

## База данных
# PostgreSQL

## NGINX 
# SSL – Let’s Encrypt

## Аналитика:
# Яндекс. Метрика

### DOCKER

# docker-compose.yml – файл для конфигурации всех сервисов.
# Dockerfile /backend/Dockerfile
# Dockerfile /frontend/Dockerfile
# Dockerfile в папке nginx – настройка контейнера для Nginx.

Структура проекта:

cyberkesa/
├── README.md              # Информация о проекте
├── db/                    # База данных (если нужно для файлов или скриптов)
├── frontend/              # Файлы фронтенда (React/Next.js)
├── requirements.txt       # Зависимости Python (Flask, SQLAlchemy, и т. д.)
├── backend/               # Код бэкенда (Flask)
├── docker-compose.yml     # Конфигурация для Docker Compose
└── nginx/                 # Конфигурация для Nginx

Сервис		Внешний порт		Внутренний порт	Роль
Nginx		80					80	Проксирует запросы на фронтенд и бэкенд
Backend		8000				8000	Flask-приложение, принимает запросы от Nginx
Frontend	80 (через Nginx)	3000	React/Next.js приложение, проксируется через Nginx
PostgreSQL	—					5432	База данных, взаимодействует с бэкендом через SQLAlchemy

# Python -> psycopg2 (адаптер) -> PostgreSQL