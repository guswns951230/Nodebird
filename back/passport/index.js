const passport = require('passport');
const local = require('./local');
const { user, User } = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);  // session에 모든 정보를 두기엔 너무 무거워지므로 user.id만 따로 저장
  });

  passport.deserializeUser(async (id, done) => {  // 복구 할 때
    try {
      const user = await User.findOne({ where: { id } }); // 따로 저장해둔 id를 통해
      done(null, user); // db에서 user의 정보를 복구 -> req.user
    } catch {
      console.error(error);
      done(error);
    }
  });

  local();
};