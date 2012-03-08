var MovieList = new Class({
  
  initialize: function(movies) {
  	this.movies = movies.sort(function(a, b){ return a.position - b.position });  
  }  
});




