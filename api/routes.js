var superagent = require('superagent');

module.exports = function(app) {

	app.get('/api/search',function(req,res){
		superagent
			.get('http://api.tvmaze.com/search/shows')
			.query({ q: req.query.q})
			.end(function(err,result){
				res.json(result.body);
			});
	});
	app.get('/api/show/:id',function(req,res){
		var lin='http://api.tvmaze.com/shows/' + req.params.id + '?embed=cast';
		superagent
			
			.get(lin)
			.end(function(err,result){
				//console.log(result.body);
				res.json(result.body);
				
			});
	})
};