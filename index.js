const config = require('./config.json');
const got = require('got');
const Discord = require('discord.js');
const client = new Discord.Client({
	messageCacheMaxSize: 5,
	messageCacheLifetime: 5,
	messageSweepInterval: 5,
	disabledEvents: [
		'GUILD_UPDATE',
		'GUILD_MEMBER_ADD',
		'GUILD_MEMBER_REMOVE',
		'GUILD_MEMBER_UPDATE',
		'GUILD_MEMBERS_CHUNK',
		'GUILD_ROLE_CREATE',
		'GUILD_ROLE_DELETE',
		'GUILD_ROLE_UPDATE',
		'GUILD_BAN_ADD',
		'GUILD_BAN_REMOVE',
		'CHANNEL_UPDATE',
		'CHANNEL_PINS_UPDATE',
		'MESSAGE_DELETE',
		'MESSAGE_UPDATE',
		'MESSAGE_DELETE_BULK',
		'MESSAGE_REACTION_ADD',
		'MESSAGE_REACTION_REMOVE',
		'MESSAGE_REACTION_REMOVE_ALL',
		'USER_UPDATE',
		'USER_NOTE_UPDATE',
		'USER_SETTINGS_UPDATE',
		'PRESENCE_UPDATE',
		'VOICE_STATE_UPDATE',
		'TYPING_START',
		'VOICE_SERVER_UPDATE',
		'RELATIONSHIP_ADD',
		'RELATIONSHIP_REMOVE',
	],
	http: {
		version: 8,
		api: 'https://discord.com/api',
	},
});

client.on('ready', () => {
	console.log(`${client.user.tag} Logged in`);
});

client.on('error', (err) => {
	console.log(err.message);
});

client.on('warn', (warn) => {
	console.log(warn);
});

client.on('message', async (msg) => {
	if (msg.author.id !== client.user.id) return;
	const prefix = config.prefix;
	const args = msg.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	switch (command) {
		case 'send':
			await msg.delete();
			(async () => {
				try {
					const response = await got(args[0], { responseType: 'buffer' });
					const buffer = response.body;
					msg.channel.send('', {
						file: buffer,
					});
				} catch (error) {
					console.log(error.body);
				}
			})();
			break;

		default:
			break;
	}
});

client.login(config.token);
