const { resolve } = require("path");
const axios = require("axios");
const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");

module.exports = {
  config: {
    name: "file",
    version: "1.0",
    author: "Shahadat",//Main File My Ohio03 দূর্নীতি শুধু :")
    countDown: 5,
    role: 0,
    shortDescription: "out script file",
    longDescription: "out script file",
    category: "owner",
    guide: {
      vi: "{pn} <cmd file name>",
      en: "{pn} <cmd file name>",
    },
  },
  onStart: async function ({ api, event, args, messageReply, type }) {
    const permission = ["100041931226770","61557519455411"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage(
        "Bro, who are you again? 🐸",
        event.threadID,
        event.messageID
      );
    }
    const name = args.join(" ");
    if (!name) {
      return api.sendMessage("Please provide the file name.", event.threadID);
    }
    try {
      const fileContent = fs.readFileSync(__dirname + `/${name}.js`, "utf8");
      api.sendMessage(fileContent, event.threadID);
    } catch (error) {
      api.sendMessage(`Error: ${error.message}`, event.threadID);
    }
  }
};
