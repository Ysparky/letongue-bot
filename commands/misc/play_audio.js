const { Command } = require('discord.js-commando');
const path = require('path');

const fs = require('fs');

module.exports = class MeowCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'play',
            aliases: ['p'],
            group: 'misc',
            memberName: 'gaaa',
            description: 'Replies with a meow, kitty cat.',
            args: [
                {
                    key: 'text',
                    prompt: 'What text would you like the bot to say?',
                    type: 'string',
                },
            ],
        });
    }

    async run(message, { text }) {
        const { voice } = message.member


        if (!voice.channelID) {
            message.reply('You must be in a voice channel')
            return
        }

        voice.channel.join().then((connection) => {

            const files = fs.readdirSync(path.join(__dirname, '../..', 'assets/audio'))
            let shouldSkip = false
            let matchedSong = ''

            files.forEach(song => {
                if (shouldSkip) {
                    return
                }
                if (song.startsWith(text) || text === song) {
                    matchedSong = song
                    shouldSkip = true
                }
            });
            if (matchedSong) {
                console.log(matchedSong);
                return connection.play(path.join(__dirname, '..', '..', 'assets/audio', `${matchedSong}`))
            } else {
                connection.play(path.join(__dirname, '..', '..', 'assets/audio', 'gil2.mp3'))
                return message.reply('Escribe bn ctmre');
            }
        })
    }
};