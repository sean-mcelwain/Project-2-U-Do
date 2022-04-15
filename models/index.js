const User = require('./User');
const List = require('./List');
const Task = require('./Task');

User.hasMany(List, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

List.belongsTo(User, {
  foreignKey: 'user_id'
});

List.hasMany(Task, {
  foreignKey: 'list_id',
  onDelete: 'CASCADE' 
});
  
Task.belongsTo(List, {
  foreignKey: 'list_id'
});

module.exports = { User, List, Task };