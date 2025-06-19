# Шаблон для выполнения тестового задания

## Описание

Шаблон подготовлен для того, чтобы попробовать сократить трудоемкость выполнения тестового задания.

В шаблоне настоены контейнеры для `postgres` и приложения на `nodejs`.  
Для взаимодействия с БД используется `knex.js`.  
В контейнере `app` используется `build` для приложения на `ts`, но можно использовать и `js`.

Шаблон не является обязательным!\
Можно использовать как есть или изменять на свой вкус.

Все настройки можно найти в файлах:

- compose.yaml
- dockerfile
- package.json
- tsconfig.json
- src/config/env/env.ts
- src/config/knex/knexfile.ts

## Запуск проекта

- Копируем код из репозитория
- Устанавливаем зависимости

```bash
npm i
```

- Создаем сервисный аккаунт для Google Cloud, скачиваем файл с ключами доступа (пример: _wb-test-463312-676051ebcfc8.json_) и кладем его в корень нашего проекта (рядом с package.json).
  **Как это сделать:** _[ссылка 1](https://habr.com/ru/articles/575160/)_, _[ссылка 2](https://azzrael.ru/google-cloud-platform-create-app)_
- В файле Dockerfile (_также в корне проекта_) указываем название нашего файла с доступами для Google Cloud

```bash
COPY ./wb-test-463312-676051ebcfc8.json .
```

_Примечение: wb-test-463312-676051ebcfc8.json необходимо заменить названием своего файла_

- Создаем файл с переменными окружения (_.env_) в корне проекта и заполняем его. Пример файла лежит в корне проекта (_example.env_)
- Создаем необходимое количество тестовых таблиц (_в каждой таблице должен присутствовать лист с названием_ **stocks_coefs**)
- Прописываем идентификаторы таблиц в файле сидирования (_/src/postgres/seeds/spreadsheets.js_) в секции _insert_:

```bash
  { spreadsheet_id: "1NKN3aop_Es6lp2StON10uSZFDbY7b1jdfMp11zoNkmQ" }, // ID таблицы 1
  { spreadsheet_id: "1pxYQ8sFsokzFt3d7u6DVXSZlCG2NnLq6vke6bD1PIuY" }, // ID таблицы 2 и т.д.
```

- Собираем и запускаем образ командой:

```bash
docker compose up
```

## Команды:

Запуск базы данных:

```bash
docker compose up -d --build postgres
```

Для выполнения миграций и сидов не из контейнера:

```bash
npm run knex:dev migrate latest
```

```bash
npm run knex:dev seed run
```

Также можно использовать и остальные команды (`migrate make <name>`,`migrate up`, `migrate down` и т.д.)

Для запуска приложения в режиме разработки:

```bash
npm run dev
```

Запуск проверки самого приложения:

```bash
docker compose up -d --build app
```

Для финальной проверки рекомендую:

```bash
docker compose down --rmi local --volumes
docker compose up --build
```

PS: С наилучшими пожеланиями!
