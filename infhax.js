var gameCode = $nuxt.$children.find(l => {return l._uid == "6"}).$children.find(l => {return l._uid == "7"}).$children.find(l => {return l._uid == "9"})

if(typeof(gameCode) === "undefined") {
	console.error("Couldn't get game code. Please wait for the script to be updated!")
	return
}

var addNewElement = (name, emoji, disc=false) => {
	gameCode.elements.push({
		emoji: emoji,
		text: name,
		discovered: disc
	})
	gameCode.saveItems()
} // Example: addNewElement("Daft Punk", "👽")
