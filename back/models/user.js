module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { // Mysql에는 users 테이블 생성
    // id가 기본적으로 들어있다.
    email: {
      type: DataTypes.STRING(30),
      allowNull: false, // 필수, true -> 선택적
      unique: true, // 고유한 값
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),  // password는 암호화를 하면 길이가 늘어난다.
      allowNull: false,
    },
  }, {
    charser: 'utf8',
    collate: 'utf8_general_ci', // 한글 저장
  });
  User.associate = (db) => {
    db.User.hasMany(db.Post); // user가 작성한 post
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });  // user가 좋아요를 누른 post
    // foreignKey를 이용해 같은 테이블의 데이터를 구분
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'FollowingId' });
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'FollowerId' });
  };

  return User;
}