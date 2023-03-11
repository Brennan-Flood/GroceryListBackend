'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      List.belongsTo(models.User, {foreignKey: 'userId'});
      List.hasMany(models.ListItem, {
        foreignKey: 'listId',
        onDelete: 'CASCADE'
      })
    }
  }
  List.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lists',
  });
  return List;
};
