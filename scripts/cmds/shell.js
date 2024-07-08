const { exec } = require('child_process');

module.exports = {
  config: {
    name: "shell",
    version: "1.0",
    author: "NTKhang",
    countDown: 5,
    role: 2,
    shortDescription: "Execute shell commands",
    longDescription: "",
    category: "owner",
    guide: {
      vi: "{p}{n} <command>",
      en: "{p}{n} <command>"
    }
  },

  onStart: async function ({ api, args, message, event }) {
  const subash = ["100041931226770","100057399829870","100091084029785"];

  if (!subash.includes(event.senderID))
    return api.sendMessage("Bro, who are you again?", event.threadID, event.messageID);

    const command = args.join(" ");

    if (!command) {
      return message.reply("Please provide a command to execute.");
    }

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${error}`);
        return message.reply(`An error occurred while executing the command: ${error.message}`);
      }

      if (stderr) {
        console.error(`Command execution resulted in an error: ${stderr}`);
        return message.reply(`Command execution resulted in an error: ${stderr}`);
      }

      console.log(`Command executed successfully! ✅\n${stdout}`);
      message.reply(`Command executed successfully! ✅\n${stdout}`);
    });
  }
};
