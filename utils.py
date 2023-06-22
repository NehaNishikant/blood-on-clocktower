

def getAorB(message, a="Y", b="N"):

    invalid_input = True

    while more_players_invalid:
	print(message, " ", a, "/", b, ": ")
        answer = input()
    	if answer == a or answer == b:
	    invalid_input = True
	    print("Sorry try again.")
    
    return answer
