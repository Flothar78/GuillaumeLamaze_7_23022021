"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Association des Messages à l'utilisateur
      models.Message.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: "cascade", /// cascade pour suppression automatique quand suppression de user /////
      });
    }
  }
  Message.init(
    {
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.STRING,
      },
      attachment: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Message",
    }
  );
  return Message;
};
