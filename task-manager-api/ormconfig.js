module.exports = {
    "name": "default",
    "type": process.env.DB_TYPE,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "synchronize": true,
    "logging": false,
    "entities": [process.env.DB_SOURCE + "/entity/*{.ts,.js}"],
    "migrations": [process.env.DB_SOURCE + "/database/migrations/*{.ts, .js}"],
    "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/database/migrations"
    }
};