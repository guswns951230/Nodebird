module.export = (sequelize, DataTypes) => {
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
  User.associate = (db) => { };

  return User;
}