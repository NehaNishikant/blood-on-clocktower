const { TOWNSFOLK_ROLES,
        OUTSIDER_ROLES,
        MINION_ROLES,
        IMP_ROLE
} = require('./game.js')

class Player{

    constructor(name, extra_info){
        this.name = name
        this.extra_info = extra_info
        this.alive = true
    }

    set_role(role){
        this.role = role

        if (TOWNSFOLK_ROLES.includes(role)){
			this.roleType = "Townsfolk"
			this.morality = "Good"
        } else {
            if (OUTSIDER_ROLES.includes(role)){
                this.roleType = "Outsider"
                this.morality = "Good"
            } else {
                if (MINION_ROLES.includes(role)){
                    this.roleType = "Minion"
                    this.morality = "Evil"
                } else {
                    this.roleType = "Demon"
			        this.morality = "Evil"
                }
            }
        }
    }

    die(){
        this.alive = false
    }

    // this.idx


}

module.exports = {
    Player
}