// importing data
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
// initilization
class Category extends Model {}

Category.init(
  {
    // catagory model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
