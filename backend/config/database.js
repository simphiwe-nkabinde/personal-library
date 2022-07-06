const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db'))
});