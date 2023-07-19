const JOIN_PARTICIPANTS = 0
const NIGHT_PHASE = 1
const DAY_PHASE = 2
const VOTING_PHASE = 3
const MIN_PLAYERS = 5 // TODO: fill in real values
const MAX_PLAYERS = 15 // TODO: fill in real values
const TOWNSFOLK_ROLES = ["Washerwoman", "Librarian", "Investigator", "Chef", "Empath",
"Fortune Teller", "Undertaker", "Monk", "Ravenkeeper", "Virgin",
"Slayer", "Soldier", "Mayor"]
const OUTSIDER_ROLES = ["Butler", "Drunk", "Recluse", "Saint"]
const MINION_ROLES = ["Poisoner", "Spy", "Scarlet Woman", "Baron"]
const IMP_ROLE = "Imp"

const { Utils } = require('./utils.js')
const { Player } = require('./player.js')
const { Multimap } = require('./multimap.js')

class Blood_on_ClockTower {
    constructor(name = "Blood on ClockTower", runner_info_keys = null) {
        this.name = name
        this.primary_keys = ["name"] + runner_info_keys
        this.players = new Multimap(["name"]) 
        this.player_names = []
        this.player_runner_infos = []
        this.player_order = null
        // game starts in join phase
        this.game_state = JOIN_PARTICIPANTS
        this.runner_info_keys = runner_info_keys
    }
  
    // extra info is passed in from the runner
    async add_player(player_name, runner_info = null) {
        // can only happen if we are in join phase

        let message = ""
        if (this.game_state == JOIN_PARTICIPANTS){

            console.log(this.players)
            console.log(this.players.keys("name"))
            
            this.player_names.push(player_name)
            this.player_runner_info.push(runner_info)

            if ((this.players.keys("name")).includes(player_name)){
                message = "Overwriting player " + player_name
            }
    
            const player = new Player(player_name, runner_info)
            const keys = new Map()
            for (const key of this.primary_keys){
                keys.set(key, player.key)
            }
            for (const key of runner_info){
                keys.set(key, runner_info.key)
            }
            this.players.set(keys, player)

        } else {
            message = "You can only remove players during the Join phase."
        }

        return message
    }

    remove_player(player_name) {
        let message = ""

        if (this.game_state == JOIN_PARTICIPANTS){
            player = this.players.get("name", player_name)
            this.players.remove(player)
        } else {
            message = "You can only remove players during the Join phase."
        }
        
        return message
    }

    string_player_names() {
        let message = ""
        message = message + "Players in the game are:\n"
        for (const player_name of this.players.keys()) {
            message = message + player_name + "\n"
          }
        return(message)
    }

    get_player_order() {
        if( this.player_order === null ) {
            // players have not been assigned order yet (how are we dealing with this message?)
        }
        return(this.player_order)
    }

    join_phase_to_night_phase() {
        // index players 
        idx_map = new Map()
        counter = 0
        
        for (const name of this.players.keys("name")){
            idx_map.set(name, counter)
            counter = counter + 1
            // add idx to player object attributes
        }
        this.players.add_key_name("name", "index", idx_map)
        this.player_order = idx_map
        // assign roles

        random_player_names = Utils.shuffle(this.players_names)
        let player_counter = 0

        const imp = this.players.get("name", random_player_names[player_counter])
        imp.set_role(IMP_ROLE)
        player_counter++

        const num_minions_in_play // todo 
        const minions_roles_in_play = MINION_ROLES.slice(0, num_minions_in_play)
        for (const minion_role of minions_roles_in_play){
            const minion = this.players.get("name", random_player_names[player_counter])
            minion.set_role(minion_role)
            player_counter ++
        }

        const num_outsiders_in_play // (depends on num minions)

        const num_townsfolk_in_play // (depends on minion in play)
        // townsfolk_in_play = 

        // move into night phase
        this.game_state = NIGHT_PHASE
    } 

    night_phase_to_day_phase() {
        // move into day phase
        this.game_state = DAY_PHASE
    }

    day_phase_to_voting_phase() {
        // move into voting phase
        this.game_state = VOTING_PHASE
    }

    voting_phase_to_night_phase() {
        // move into night phase
        this.game_state = NIGHT_PHASE
    }

    end_game() {

    }

    has_player(indentifier, key){
        return this.players.has(indentifier, key)
    }

    get_player_runner_info(){
        return this.player_runner_infos
    }

  }
  
module.exports = { 
    Blood_on_ClockTower, 
    JOIN_PARTICIPANTS,
    NIGHT_PHASE,
    DAY_PHASE,
    VOTING_PHASE,
    MIN_PLAYERS,
    MAX_PLAYERS,
    TOWNSFOLK_ROLES,
    OUTSIDER_ROLES,
    MINION_ROLES,
    IMP_ROLE
}