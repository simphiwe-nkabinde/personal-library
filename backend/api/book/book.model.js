const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const User = require('../user/user.model')
const Note = require('../note/note.model');

const Book = sequelize.define('Book', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  googleId: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Book.belongsTo(User)
Book.hasMany(Note)

module.exports = User;