# Используем облегченный образ Python
FROM python:3.9-slim-buster

# Устанавливаем рабочую директорию в контейнере
WORKDIR /code

# Копируем файл с зависимостями
COPY requirements.txt .

# Устанавливаем зависимости
RUN pip install --no-cache-dir -r requirements.txt

# Копируем остальные файлы проекта
COPY ./app ./app

# Открываем порт 80 для доступа к приложению
EXPOSE 80

# Запускаем приложение
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]