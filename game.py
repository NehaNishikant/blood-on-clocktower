import Player
import utils

class Game

    def __init__(self, min_players=10, max_players=16): # todo: fill in real values
	self.win_state = "Ongoing"
	self.min_players = min_players
	self.max_players = max_players
	self.players = []
	self.player_names = []

    def reindex(self):
	for i in range(len(players)):
	    players[i].idx = i

    def setRoles(self):
	pass

    def giveRoles(self):
	pass

    def printPlayers():
        list = [n+", " for n in self.playerNames[:-1]] + self.playerNames[-1]
        print(list)
    
    def addPlayers():

	def newPlayer(idx, message = "Enter the name of the next player"):
	    print(message": ")
	    player_name = input()
	    print(player_name, ", enter a secret password:")
	    password = input()
	    os.system("cls")
	    return (Player(name, password, idx), name):

        assert(len(self.players) == len(self.playerNames))

        player, playerName = newPlayer(len(players, message="Enter the name of the first player")
        self.players.append(player)
        self.playerNames.append(playerName)

        while (len(self.players) < self.min_players):
            player, playerName = newPlayer(len(players))
            self.players.append(player)
            self.playerNames.append(playerName)

        more_players = utils.getAorB("Are there more players?")
        while (more_players == "Y"):
            player, playerName = newPlayer(len(players))
            self.players.append(player)
            self.playerNames.append(playerName)
	    if (len(self.players) == self.max_players):
	        print("Max player count reached.")
	        more_players = "N"
	    else:
	        more_players = utils.getAorB("Are there more players?")

    def removePlayers():
        if len(players == 0):
	    return

        players_leaving = utils.getAorB("Are any players leaving?")
        while (players_leaving == "Y")
	    print("Enter the name of the player leaving: ")
	    playerName = input()
	    if playerName in self.playerNames: # todo: get index of player leaving
	        self.playerNames.remove(index)
	        self.players.remove(index)

	        if (len(self.players) == 0):
		    print("No more players left to remove")
		    players_leaving = "N"
		else:
		    players_leaving = utils.getAorB("Are any more players leaving?")

    def dayPhase(self):
	pass

    def nightPhase(self):
	pass

    def discloseHistory(self): # once the self.ends, go through and disclose what happened
	pass

    def winMessage(self):
	print("Congratulations to the ", self.winState, " team.")
	# print roles
	self.discloseHistory()

    def run(self):
        while self.winState == "Ongoing":
   	    self.dayPhase()
	    self.nightPhase()

        self.winMessage()
        return
	
