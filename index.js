const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const config = require('./config.json')

const client = new CommandoClient({
    commandPrefix: '!',
    owner: '497624537702334466',
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['misc', 'Your First Command Group'],
    ])
    .registerCommandsIn(path.join(__dirname, 'commands'))

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
    client.user.setActivity('with Commando');
});

client.on('error', console.error);

client.login(config.token)

// // const Discord = require('discord.js')
// // const client = new Discord.Client()

// const Commando = require('discord.js-commando')
// const client = new Commando.CommandoClient({
//     owner: '497624537702334466',
//     commandPrefix: config.prefix,
// })

// const config = require('./config.json')
// const command = require('./command')

// client.on('ready', () => {
//     console.log('The client is ready!')

//     command(client, ['cc', 'clear'], (message) => {
//         if (message.member.hasPermission('ADMINISTRATOR')) {
//             message.channel.messages.fetch().then((results) => {
//                 message.channel.bulkDelete(results)
//             })
//         }
//     })

//     command(client, 'status', (message) => {
//         const content = message.content.replace('!status ', '')

//         client.user.setPresence({
//             activity: {
//                 name: content,
//                 type: 0,
//             },
//         })
//     })
// })

// client.login(config.token)
