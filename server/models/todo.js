'use strict';
module.exports = (sequelize, DataTypes) => {
  var todo = sequelize.define('todo', {
    title: DataTypes.STRING
  },{freezeTableName: true});
  return todo;
};