const finishedQuestsLeafs = require('../FinishedQuestsLeafs');

module.exports = {
  getFinishedQuestsLeafs: getFinishedQuestsLeafs
};

function getFinishedQuestsLeafs (req, res) {
  return res.json(finishedQuestsLeafs);
}