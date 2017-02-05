const Sequelize = require('sequelize');
const crypto = require('crypto');
const db = require('../_db');

module.exports = db.define('User', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING(1024),
    allowNull: false,
    set(pw) {
      const salt = db.model('User').generateSalt();
      this.setDataValue('salt', salt);
      this.setDataValue('password', db.model('User').encryptPassword(pw, salt));
    },
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  photo: Sequelize.STRING,
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  salt: {
    type: Sequelize.STRING(128),
    allowNull: false,
  },
  subscribe: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
}, {
  instanceMethods: {
    sanitize() {
      let password;
      let salt;
      return Object.assign(this.toJSON(), { password, salt });
    },
    correctPassword(candidatePassword) {
      if (!candidatePassword) {
        return false;
      }
      return db.model('User').encryptPassword(candidatePassword, this.salt) === this.password;
    },
  },
  classMethods: {
    generateSalt: () => crypto.randomBytes(64).toString('base64'),
    encryptPassword: (plainText, salt) => crypto
      .pbkdf2Sync(plainText, salt, 1000, 512, 'sha512').toString('hex'),
  },
});
