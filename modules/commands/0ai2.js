const aiStatus = {
  enabled: true,
};

module.exports.config = {
  name: 'ai2',
  version: '1.1.1',
  hasPermssion: 0,
  credits: 'Deku',
  description: 'An AI powered by ChatGPT',
  usePrefix: false,
  commandCategory: 'chatbots',
  usages: '[prompt]',
  cooldowns: 0,
};

module.exports.run = async function({ api, event, args }) {
 const b = require('axios');
  let txt = args.join(" ");
  if (args[0] === 'off' && event.senderID === '100027399343135') {

    aiStatus.enabled = false;
    return api.sendMessage('𝚃𝚑𝚒𝚜 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚒𝚜 𝚗𝚘𝚠 𝚘𝚏𝚏!', event.threadID, event.messageID);

  } else if (args[0] === 'on' && event.senderID === '100027399343135') {

    aiStatus.enabled = true;
    return api.sendMessage('𝚃𝚑𝚒𝚜 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚒𝚜 𝚗𝚘𝚠 𝚘𝚗!', event.threadID, event.messageID);
  }

  if (!aiStatus.enabled) {
    return api.sendMessage('Server Maintenance!\n\ncredits: www.facebook.com/markqtypie', event.threadID, event.messageID);
  }

try {
  if (!txt){ return api.sendMessage("Please provide a question first!", event.threadID, event.messageID)
}
api.sendMessage(`🔍"${txt}"`,event.threadID, event.messageID);
  const res = await b.get(`https://chatgayfeyti.archashura.repl.co/?gpt=${txt}`);
let resu = res.data.content;
api.sendMessage(resu, event.threadID, event.messageID)
    } catch (err){
return api.sendMessage("API Error", event.threadID, event.messageID)
     }  
  }