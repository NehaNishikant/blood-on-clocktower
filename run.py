from player import Player
from game import Game
import utils

def run(players):
	print("Welcome to Blood on Clocktower")

	game = Game()
	print("The min players for this game is ", game.min_players, " and the max is ", game.max_players, ". You have ", len(game.players), " players so far.")
	
	for player in players:
		game.addPlayers(player)

	game.setup()
	game.run() 

	play_again = utils.getAorB("Play Again?")

	while play_again == "Y":
		game.reset()
		game.run()
		play_again = utils.getAorB("Play Again?")

	print("Thank you for playing.")
	return

players = [ "Krati", "Neha", "Shaan", "Armando"]
run(players)
