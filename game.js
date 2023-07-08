const JOIN_PARTICIPANTS = 0
const NIGHT_PHASE = 1
const DAY_PHASE = 2
const VOTING_PHASE = 3
const MIN_PLAYERS = 5 // TODO: fill in real values
const MAX_PLAYERS = 15 // TODO: fill in real values

class Game {
    constructor(name = "Blood on ClockTower") {
        this.name = name
        this.players = new Map()
        // game starts in join phase
        this.game_state = JOIN_PARTICIPANTS
    }
  
    add_player(player_name, extra_info = null) {
        // can only happen if we are in join phase
        const player_info = new Map()
        player_info.set("extra_info", extra_info)
        this.players.set(player_name,player_info)
    }

    remove_player(name) {
        // can only happen if we are in join phase
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
    Game, 
    JOIN_PARTICIPANTS,
    NIGHT_PHASE,
    DAY_PHASE,
    VOTING_PHASE,
    MIN_PLAYERS,
    MAX_PLAYERS 
}