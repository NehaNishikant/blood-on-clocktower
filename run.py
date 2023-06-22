import Player
import Game
import os
import utils

def run():
    print("Welcome to Blood on Clocktower")

    game = Game()
    print("The min players for this game is ", game.min_players, " and the max is ", game.max_players, ". You have ", len(game.players), " players so far.")
    game.addPlayers()

    game.setup()
    game.run() 

    play_again = utils.getAorB("Play Again?")

    while play_again == "Y":
	game.reset()
	game.run()

    print("Thank you for playing.")
    return

run()
