const { rollDice } = require('../../utils/dicefn');

module.exports = {
    config: {
        name: "roll",
        aliases: ['dice', 'rolldice'],
        usage: "(command)",
        category: "miscellaneous",
        description: 'Rolls the dice',
        accessableby: "Members"
    },
    run: async(client, message) => {
        message.reply("rolled a " + rollDice());
    }
    
}