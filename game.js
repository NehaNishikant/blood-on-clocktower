const JOIN_PARTICIPANTS = 0
const NIGHT_PHASE = 1
const DAY_PHASE = 2
const VOTING_PHASE = 3
const MIN_PLAYERS = 5 // TODO: fill in real values
const MAX_PLAYERS = 15 // TODO: fill in real values

class Blood_on_ClockTower {
    constructor(name = "Blood on ClockTower") {
        this.name = name
        this.players = new Multimap(["name"]) 
        // game starts in join phase
        this.game_state = JOIN_PARTICIPANTS
    }
  
    async add_player(player_name, extra_info = null) {
        // can only happen if we are in join phase

        if (this.game_state == JOIN_PARTICIPANTS){
            let message = None

            if (this.players.keys().includes(player_name)){
                message = "Overwriting player " + player_name
            }
    
            const player = new Player(player_name, extra_info)
            const keys = new Map()
            for (const key of this.primary_keys){
                keys.set(key, player.key)
            }
            this.players.set(keys, player)

        } else {
            message = "You can only remove players during the Join phase."
        }

        return message
    }

    remove_player(player_name) {
        let message = None

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

    join_phase_to_night_phase() {
        // index players 
        idx_map = new Map()
        counter = 0
        
        for (const name of this.players.keys("name")){
            idx_map.set(name, counter)
            counter = counter + 1
        }
        this.players.add_key_name("name", "index", idx_map)
        this.primary_keys.push("index")

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

  }
  
module.exports = { 
    Blood_on_ClockTower, 
    JOIN_PARTICIPANTS,
    NIGHT_PHASE,
    DAY_PHASE,
    VOTING_PHASE,
    MIN_PLAYERS,
    MAX_PLAYERS 
}