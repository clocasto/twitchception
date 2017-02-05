module.exports = (req, res, next) => function authCb(err, user) {
  if (err) return next(err);
  if (!user) {
    return next({ status: 401, message: 'Invalid login credentials.' });
  }
  return req.logIn(user, (err) => { // eslint-disable-line
    if (err) return next(err);
    return res.send(user.sanitize());
  });
};
