
def getAorB(message, a="Y", b="N"):

	while True:
		print(message, " ", a, "/", b, ": ")
		answer = input()
		if answer == a or answer == b:
			return answer
		print("Sorry try again.")
