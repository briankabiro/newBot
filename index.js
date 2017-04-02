module.exports = function(bp) {
  bp.middlewares.load()

	bp.hear({
		platform:'facebook',
		type:'message',
		text:'hello world'
	}, (event, next) => {
		const id = event.user.id
		const last_name = event.user.last_name
		const first_name = event.user.first_name

		const text = 'Congrats ' + first_name + " " + last_name
		bp.messenger.sendText(id, text)
	})

	bp.hear({
		platform:'facebook',
		type:'message',
		text: /.+/i
	}, (event, next) => {
		var jaundice = fs.readFileSync('lastList.txt', 'utf8');
		
		bp.messenger.sendText(event.user.id, "Sorry I only answer to hello world ....")
	})
}