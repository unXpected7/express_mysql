const sequelize = require('../config/products')
const { DataTypes } = require('sequelize');

const Product = sequelize.define('products', {
  // Model attributes are defined here
  
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: true
  },
  img_url: {
      type: DataTypes.TEXT
  },
  users_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
},
{
  timestamps: false,
});
sequelize.sync();

module.exports = Product