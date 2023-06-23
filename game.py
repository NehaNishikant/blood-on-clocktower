from player import Player
import utils
import os

class Game:

	def __init__(self, min_players=2, max_players=4): # todo: fill in real values
		self.win_state = "Ongoing"
		self.min_players = min_players
		self.max_players = max_players
		self.players = []
		self.player_names = []

	def reindex(self):
		for i in range(len(self.players)):
			self.players[i].idx = i

	def setRoles(self):
		pass

	def giveRoles(self):
		pass

	def printPlayers(self):
		s = ""
		for n in self.player_names[:-1]:
			s+=n
		s+=self.player_names[-1]
		print(s)
	
	def addPlayers(self):

		def newPlayer(idx, message = "Enter the name of the next player"):
			print(message, ": ")
			player_name = input()
	
			if player_name in self.player_names:
				return newPlayer(idx, message = "Choose a unique name. Try again.")

			print(player_name, ", enter a secret password:")
			password = input()
			os.system("cls")
			return (Player(player_name, password, idx), player_name)

		assert(len(self.players) == len(self.player_names))

		if (len(self.players) == 0):
			player, playerName = newPlayer(len(self.players), message="Enter the name of the first player")
			self.players.append(player)
			self.player_names.append(playerName)

		while (len(self.players) < self.min_players):
			player, playerName = newPlayer(len(self.players))
			self.players.append(player)
			self.player_names.append(playerName)

		more_players = utils.getAorB("Are there more players?")
		while (more_players == "Y"):
			player, playerName = newPlayer(len(self.players))
			self.players.append(player)
			self.player_names.append(playerName)
			if (len(self.players) == self.max_players):
				print("Max player count reached.")
				more_players = "N"
			else:
				more_players = utils.getAorB("Are there more players?")

	def removePlayers(self):
		if len(self.players) == 0:
			return

		players_leaving = utils.getAorB("Are any players leaving?")
		while (players_leaving == "Y"):
			print("Enter the name of the player leaving: ")
			player_name = input()
			if player_name in self.player_names: 
				index = self.player_names.index(player_name)
				self.player_names.pop(index)
				self.players.pop(index)

				if (len(self.players) == 0):
					print("No more players left to remove")
					players_leaving = "N"
				else:
					players_leaving = utils.getAorB("Are any more players leaving?")
			else:
				print("That player doesn't exist.")

	def setup(self, reindex = False):

		if (reindex):
			self.reindex()

		print("The players in order are: ")
		self.printPlayers()

		print("Setting roles...")
		self.setRoles()
		print("Roles set.")

		self.giveRoles()
		print("Let the game begin.")
		print("*intro spiel* Press Enter to continue.")
		_ = input()
		os.system("cls")

	def reset(self):
		self.removePlayers()
		self.addPlayers()
		self.setup(reindex=True)

	def dayPhase(self):
		pass

	def nightPhase(self):
		pass

	def discloseHistory(self): # once the self.ends, go through and disclose what happened
		pass

	def winMessage(self):
		print("Congratulations to the ", self.win_state, " team.")
		# print roles
		self.discloseHistory()

	def run(self):
		while self.win_state == "Ongoing":
			self.dayPhase()
			self.nightPhase()
			self.win_state = "Good" # comment this out later

		self.winMessage()
		return
	
