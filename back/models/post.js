module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    // id가 기본적으로 들어있다.
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    charser: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // 이모티콘 저장
  });
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); // post의 작성자
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });  // post에 좋아요를 누른 사람들
    db.Post.belongsTo(db.Post, { as: 'Retweet' });
  };

  return Post;
}