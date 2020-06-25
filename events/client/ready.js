const { ErelaClient, Utils } = require("erela.js");
const { nodes } = require("../../botconfig.json")

module.exports = bot => {
    console.log(`${bot.user.username} is online`);

    let activities = [ `${bot.guilds.size} servers!`], i = 0;
    setInterval(() => bot.user.setPresence(`${bot.prefix}help | ${activities[i++ % activities.length]}`, { type: "WATCHING" }), 15000)

};