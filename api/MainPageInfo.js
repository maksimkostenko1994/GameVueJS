const mainPageInfo = require('../MainPageInfo');

module.exports = {
  getMainPageInfo: getMainPageInfo
};

function getMainPageInfo (req, res) {
  return res.json(mainPageInfo);
}