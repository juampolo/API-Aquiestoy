const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "CompanionShift",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      day: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
          max: 6
        }
      },
      time: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      timezone: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maxCompanions :{
        type: DataTypes.INTEGER,
        defaultValue : 5,
      },
      hasRules :{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
    },
    { timestamps: false }
  );
}
