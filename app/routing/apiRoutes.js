// Load data and API routes

// Require js file that contains pokemon data
var pokemon = require("../data/pokemon.js");

// Routes

module.exports = function(app) {
  
  //a GET route that displays JSON of all possible friends
  app.get('/api/pokemon', function(req,res){
    res.json(pokemon);
  });

  //Post route to compare user input to pokemon api
  app.post('/api/pokemon', function(req,res){
    var userInput = req.body.scores;
    var scoreDiffArray = [];
    var match = 0;

    for(var i=0; i < pokemon.length; i++) {

      var scoreDifference = 0;

      for (var j=0; j < userInput.length; j++) {
        scoreDifference += (Math.abs(parseInt(pokemon[i].scores[j]) - parseInt(userInput[j])));
      }

      scoreDiffArray.push(scoreDifference);
    }

    for(var i=0; i < scoreDiffArray.length; i++){
      if(scoreDiffArray[i] <= scoreDiffArray[match]){
        match = i;
      }
    }

    var best = pokemon[match]
    res.json(best);
 
  });

}