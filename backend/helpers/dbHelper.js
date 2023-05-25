const defaultCallBack = (err, result, res) => res.json(err || result);

module.exports = {
  defaultCallBack,
};
