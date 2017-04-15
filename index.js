const clothes = require('./clothes.json');

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
		for(var i=0; i<clothes.brands.length;i++){
			if(clothes.brands[i] == event.message.text){
				bp.messenger.sendText("Iyo ni Legit mbaya")	
			}else{
				bp.messenger.sendText(event.user.id + ", iyo hapana tambua")
			}
		}
	})
}