module.export = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    // id가 기본적으로 들어있다.
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    charser: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  });
  Comment.associate = (db) => { };

  return Comment;
}