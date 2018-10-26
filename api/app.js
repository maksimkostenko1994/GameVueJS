const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

const finishedQuestsLeafsAPI = require('./FinishedQuestsLeafs');
const generalQuestsInfoAPI = require('./GeneralQuestsInfo');
const mainPageInfoAPI = require('./MainPageInfo');

app.use('*', bodyParser.json());
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

app.get('/finished-quests-leafs', finishedQuestsLeafsAPI.getFinishedQuestsLeafs);

app.get('/general-quests-info', generalQuestsInfoAPI.getGeneralQuestsInfo);

app.get('/main-page-info', mainPageInfoAPI.getMainPageInfo);

app.listen(3030);
console.log(`App running on port ${3030}!`);