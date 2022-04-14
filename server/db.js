const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sys', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

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
      type: DataTypes.DATE(6),
    },
    dateReg: {
      type: DataTypes.DATE(6),
    },

    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  //   { tableName: 'Employees' },
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
module.exports = { User, connect };
