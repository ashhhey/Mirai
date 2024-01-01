const fs = require("fs");
module.exports.config = {
  name: "prefix",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - Fixed by LTD", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "fuck",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("prefix")==0 || event.body.indexOf("Prefix")==0 || event.body.indexOf("PREFIX")==0 ||  event.body.indexOf("prefixx")==0) {
    var msg = {
        body: "𝗠𝘆 𝗽𝗿𝗲𝗳𝗶𝘅 𝗶𝘀 𝗼𝗻 𝘁𝗵𝗲 𝗴𝗶𝗳🤖",
        attachment: fs.createReadStream(__dirname + `/noprefix/prefix.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }