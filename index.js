const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
/////////////////////////////////////////////
//========= CHECK UPTIME =========//
/////////////////////////////////////////////
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const chalk = require("chalk");
var uptimelink = [`https://030a5808-7db2-4a4e-9267-f838749df0d4-00-2fmw63v9gn9bs.pike.replit.dev/`]
const Monitor = require('ping-monitor');
for (const now of uptimelink) {
  const monitor = new Monitor({
    website: `${now}`,
    title: 'Ashley',
    interval: 20,
  config: {
    intervalUnits: 'seconds'
  }
});
monitor.on('up', (res) => console.log(chalk.bold.hex("#1aff05")("[ up ] ❯ ") + chalk.hex("#1aff05")(`${res.website}`)))
monitor.on('down', (res) => console.log(chalk.bold.hex("#d60d0d")("[ DOWN ] ❯ ") + chalk.hex("#d60d0d")(`${res.website} ${res.statusMessage}`)))
monitor.on('stop', (website) => console.log(chalk.bold.hex("#d60d0d")("[ STOP ] ❯ ") + chalk.hex("#d60d0d")(`${website}`)))
monitor.on('error', (error) => console.log(chalk.bold.hex("#d60d0d")("[ ERROR ] ❯ ") + chalk.hex("#d60d0d")(`${error}`)))
}
/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const express = require('express');
const app = express();

const port = process.env.PORT || 5000

app.listen(port, () =>
  logger(`Your app is listening a http://localhost:${port}`, "[ ONLINE ]")
     );      


logger("Opened server site...", "[ Starting ]");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "[ Starting ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "KyrinWu.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

  child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot("Starting up...");
            global.countRestart += 1;
            return;
        } else return;
    });

  child.on("error", function(error) {
    logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
  });
};
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////


axios.get("https://raw.githubusercontent.com/ZiaRein/ZiaReinBypass/main/package.json").then((res) => {
  logger(res['data']['name'], "[ NAME ]");
  logger("Version: " + res['data']['version'], "[ VERSION ]");
  logger(res['data']['description'], "[ DESCRIPTION ]");
});
startBot();
// THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯
app.get('/', (req, res) => res.sendFile(__dirname+'/index.html'))