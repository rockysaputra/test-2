'use strict';
const {
  Model
} = require('sequelize');
const bcryptjs = require("bcryptjs")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Password is required"
        },
        notEmpty:{
          msg:"Password is required"
        },
        len:[5,8]
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance,options)=>{
    let hashpassword = bcryptjs.hashSync(instance.password)
    instance.password = hashpassword
  })

  User.beforeUpdate((instance,options)=>{
    let hashpassword = bcryptjs.hashSync(instance.password)
    instance.password = hashpassword
  })
  return User;
};