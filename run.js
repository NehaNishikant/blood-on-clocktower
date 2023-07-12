const { 
    Blood_on_ClockTower, 
    JOIN_PARTICIPANTS,
    NIGHT_PHASE,
    DAY_PHASE,
    VOTING_PHASE,
    MIN_PLAYERS,
    MAX_PLAYERS 
} = require('./game.js')

const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
client.on('ready', async () => {
    const phone_number = 6502292171
    console.log("Please whatsapp your \"add\" followed by your name to ${phone_number} to join the game. If you would like to remove yourself from the game, please send a message with \"remove\" followed by the name you want to remove. Someone needs to send a message saying \"end join phase\" to start the game");
});

client.on('message', async message => {
    //console.log(message)
    if( game.game_state == JOIN_PARTICIPANTS ) {
        // add participant
        if( message.body.toLowerCase().startsWith("add") ) {
            const player_name = message.body.slice(4)
            const extra_info = new Map()
            extra_info.set("chat", message.from)
            game.add_player(player_name, extra_info)
        }
        // remove participant
        if( message.body.toLowerCase().startsWith("remove") ) {
            player_name = message.body.slice(7)
            game.remove_player(player_name)
        }
        // end join participants phase
        if( message.body.toLowerCase() === "end join phase" ) { // && message is from one of the players
            game.join_phase_to_night_phase()
            players_string_to_print = game.string_player_names()
            console.log(players_string_to_print)
            // TODO send to everyone - create function send blast
            client.sendMessage( message.from, players_string_to_print)
            // for each player, send them these instructions
            client.sendMessage( message.from, "Please vote by sending a message with \"vote yes\" or \"vote no \"")
        }
    }
    if( game.game_state == VOTING_PHASE ) // and message is from one of the players
    if(message.body === "test bot"){
    message.reply(mes)
}
});
 
client.initialize();

const game = new Blood_on_ClockTower()