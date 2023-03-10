require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env;
const { userModel } = require('./models/User')
const { characterModel } = require('./models/Character')

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
    { logging: false, navite: false }
);

userModel(sequelize)
characterModel(sequelize)


sequelize.models.User.belongsToMany(sequelize.models.Character, { through: 'User_Char', foreignKey: 'user_id', timestamps: false});
sequelize.models.Character.belongsToMany(sequelize.models.User, { through: 'User_Char', foreignKey: 'char_id', timestamps: false})

module.exports = {
    ...sequelize.models,
    sequelize,
};