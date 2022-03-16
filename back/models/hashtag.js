module.export = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define('Hashtag', {
    // id가 기본적으로 들어있다.
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
    charser: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  });
  Hashtag.associate = (db) => { };

  return Hashtag;
}