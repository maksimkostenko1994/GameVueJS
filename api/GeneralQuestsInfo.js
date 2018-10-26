const generalQuestsInfo = require('../GeneralQuestsInfo');

module.exports = {
  getGeneralQuestsInfo: getGeneralQuestsInfo
};

function getGeneralQuestsInfo (req, res) {
  return res.json(generalQuestsInfo);
}