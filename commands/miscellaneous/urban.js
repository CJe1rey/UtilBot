const urban = require("urban");
const { RichEmbed } = require("discord.js");
const { cyan } = require("../../colours.json");
const { stripIndents } = require("common-tags");
const tab = "hello           hello";

module.exports = { 
    config: {
        name: "urban",
        aliases: ["urb", "urbandictionary", "ud"],
        category: "miscellaneous",
        description: "gets an urban dictionary definition",
        usage: "<search|random> (query)",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
        if(!args[0] || !["search", "random"].includes(args[0])) return message.channel.send("`-urban <search|random> (word)`");
        let image = "https://i.pinimg.com/236x/04/83/c7/0483c76e02e484dbf20009418758849e--urban-dictionary-app-store.jpg";
        let search = args[1] ? urban(args.slice(1).join(" ")) : urban.random();
            try {
                search.first(res => {
                    if(!res) return message.channel.send("No results found for this topic, sorry!");
                    let { word, definition, example, thumbs_up, thumbs_down, permalink, author} = res;

                        let embed = new RichEmbed()
                            .setColor(cyan)
                            .setAuthor(`[Urban Dictionary | ${word}]`, image)
                            .setThumbnail(image)
                            .setDescription(stripIndents`**Defintion:** ${definition || "No definition"} \n
                            **Example:** ${example || "No Example"} \n`)
                            .addField('Upvotes:', stripIndents`:thumbsup:
                            ${thumbs_up || 0}`,true)
                            .addField('Downvotes:', stripIndents`:thumbsdown: 
                            ${thumbs_down || 0}`,true)
                            .addField('Link:', stripIndents`[link to ${word}](${permalink || "https://www.urbandictionary.com/"})`,false)
                            .setTimestamp()
                            
                            .setFooter(`Written by ${author || "unknown"}`);

                            message.channel.send(embed)
                })
            } catch(e) {
                console.log(e)
                return message.channel.send("looks like i've broken! Try again")
            }
        }
}
