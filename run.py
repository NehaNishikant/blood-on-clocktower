import Player
import Game
import os
import utils

def getAorB(message, a="Y", b="N"):

    invalid_input = True

    while more_players_invalid:
	print(message, " ", a, "/", b, ": ")
        answer = input()
    	if answer == a or answer == b:
	    invalid_input = True
	    print("Sorry try again.")
    
    return answer

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
