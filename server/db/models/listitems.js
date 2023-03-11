'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ListItem.belongsTo(models.List, {foreignKey: 'listId'})
    }
  }
  ListItem.init({
    listId: DataTypes.INTEGER,
    itemName: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ListItems',
  });
  return ListItem;
};
