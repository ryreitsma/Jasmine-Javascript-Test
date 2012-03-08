describe("MovieList", function(){
	beforeEach(function(){
	  this.inception = new Movie(1, "Inception (2010)", 2);
	  this.trueGrit = new Movie(2, "True Grit (2011)", 3);
	  this.movieList = new MovieList([this.trueGrit, this.inception]);
	});
	
	describe("initialize", function(){
		it("should set the movies list", function(){  
			expect(this.movieList.movies).not.toBeUndefined();
		});
		it("should contain the movies", function(){
		  expect(this.movieList.movies).toContain(this.inception);
		  expect(this.movieList.movies).toContain(this.trueGrit);
		});
		it("should order the movies by position", function(){
		  expect(this.movieList.movies.indexOf(this.inception)).toEqual(0);
		});
	});
	
	describe("isEmpty", function(){
		it("should return true if list is empty", function(){
		
		});
		it("should return false if list is not empty", function(){
		
		});
	});
});
