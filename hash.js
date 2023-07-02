let user = {
	age:54,
	name: 'Natalie',
	magic: true,
	scream: function() {
		console.log("Hahahahaaaaa!")
	}
}


user.age //O(1)
user.spell = 'abra kadabra'; //O(1)
user.scream(); //O(1)

