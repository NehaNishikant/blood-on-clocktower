class Player:

	def __init__(self, name, password, idx):
		self.name = name
		self.password = password
		self.idx = idx
		self.power_remaining = True
		self.alive = True
		self.dead_vote_remaining = True

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
			self.morality = "Evil"
		else:
			self.roleType = "Demon"
			self.morality = "Evil"

	def vote():
		# remove dead vote if not alive and if dead vote exists?
		# pass if cannot vote?
		pass