import Player
import Game
import os
import utils

def printPlayers(playerNames):
    list = [n+", " for n in playerNames[:-1]] + self.playerNames[-1]
    print(list)

def getAorB(message, a="Y", b="N"):

    invalid_input = True

    while more_players_invalid:
	print(message, " ", a, "/", b, ": ")
        answer = input()
    	if answer == a or answer == b:
	    invalid_input = True
	    print("Sorry try again.")
    
    return answer

def newPlayer(idx, message = "Enter the name of the next player"):
    print(message": ")
    player_name = input()
    print(player_name, ", enter a secret password:")
    password = input()
    os.system("cls")
    return (Player(name, password, idx), name)

def addPlayers():

    assert(len(players) == len(playerNames))

    player, playerName = newPlayer(len(players, message="Enter the name of the first player")
    games.players.append(player)
    games.playerNames.append(playerName)

    while (len(players) < game.min_players):
        player, playerName = newPlayer(len(players))
        players.append(player)
        playerNames.append(playerName)

    more_players = getAorB("Are there more players?")
    while (more_players == "Y"):
        player, playerName = newPlayer(len(players))
        players.append(player)
        playerNames.append(playerName)
	if (len(players) == game.max_players):
	    print("Max player count reached.")
	    more_players = "N"
	else:
	    more_players = getAorB("Are there more players?")

    return (players, playerNames)

def removePlayers(players, playerNames):
    if len(players == 0):
	return

    players_leaving = getAorB("Are any players leaving?")
    while (players_leaving == "Y")
	print("Enter the name of the player leaving: ")
	playerName = input()
	if playerName in playerNames: # todo: get index of player leaving
	    playerNames.remove(index)
	    players.remove(index)

	    if (len(players) == 0):
		print("No more players left to remove")
		players_leaving = "N"
	    else:
	        players_leaving = getAorB("Are any other players leaving?")
	else:
	    print("That's not a name of a player. This is the list of names:")
	    printPlayers()
            players_leaving = getAorB("Are any players leaving?")

    return (players, playerNames)

def setup(game, reindex_required = False):

    if (reindex_required):
	game.reindex()

    print("The players in order are: ")
    printPlayers()

    print("Setting roles...")
    game.setRoles()
    print("Roles set.")

    game.giveRoles()
    print("Let the game begin.")
    print("*intro spiel* Press Enter to continue.")
    _ = input()
    os.system("cls")

    return game

def reset(game):
    player, playerNames = removePlayers(game.players, game.playerNames)
    players, playerNames = addPlayers(players, playerNames)
    game.players = players
    game.playerNames = playerNames

    return setup(game, reindex=True)

def run():
    print("Welcome to Blood on Clocktower")

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
