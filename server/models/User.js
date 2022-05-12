const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    //Check entered password for matched unhashed password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2],
          msg: "Firstname must be at least 2 characters"
        },
    },
    },
    lastname: {
       type: DataTypes.STRING,
       allowNull: false,
       validate: {
        len: {
          args: [2],
          msg: "Lastname must be at least 2 characters"
        },
    },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
          len: {
            args: [2],
            msg: "Username must be at least 2 characters"
          },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      match: [/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'A valid email address is required'],
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8],
          msg: "Password must have more than 8 characters"
        } 
        
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;