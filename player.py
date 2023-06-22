class Player:

    def __init__(self, name, password, idx):
    	self.name = name
	self.password = password
	self.idx = idx
	self.power_remaining = True
	self.alive = True

    def setRole(self, role):
	self.role = role
	if role in ["Washerwoman", "Librarian", "Investigator", "Chef", "Empath", \
		    "Fortune Teller", "Undertaker", "Monk", "Ravenkeeper", "Virgin", \
		    "Slayer", "Soldier", "Mayor"]:
		self.roleType = "Townsfolk"
		self.morality = "Good"
	elif role in ["Butler", "Drunk", "Recluse", "Saint"]:
		self.roleType = "Outsider"
		self.morality = "Good"
	elif role in ["Poisoner", "Spy", "Scarlet Woman", "Baron"]:
		self.roleType = "Minion"
		self.morality = "Bad"
	else:
		self.roleType = "Demon"
		self.morality = "Bad"
