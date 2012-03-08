describe("Movie", function(){   
  
  describe("initialize", function(){
    it("should set the id", function(){
      var id = 14;
    	var movie = new Movie(id, "Inception (2009)", 1);
    	
    	expect(movie.id).toEqual(id);
    });
    
    it("should set the name", function(){
      var name = "Inception (2009)";
    	var movie = new Movie(14, name, 1);
    	
    	expect(movie.name).toEqual(name);
    });
    
    it("should set the position", function(){
      var position = 2;
    	var movie = new Movie(14, "Inception (2009)", position);
    	
    	expect(movie.position).toEqual(position);
    });    
  });
});
