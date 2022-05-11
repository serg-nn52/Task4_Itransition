const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB,
  process.env.LOGIN,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: 'mysql',
  },
);

const User = sequelize.define(
  'User',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    dateLogin: {
      type: DataTypes.DATE,
    },
    dateReg: {
      type: DataTypes.DATE,
    },

    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  // { freezeTableName: true },
  { tableName: 'Employees' },
);

const connect = async () => {
  try {
    await sequelize.authenticate();
    await User.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
module.exports = { connect, User };
