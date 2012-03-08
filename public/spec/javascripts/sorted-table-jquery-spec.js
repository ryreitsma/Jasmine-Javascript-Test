describe("SortedTable", function(){
  beforeEach(function(){
        
  });
  
  describe("items", function(){
  	it("should have 5 items", function() {
  	  loadFixtures('sorted-table-5-items.html');
  		var table = new SortedTable("sortedTable");
  		expect(table.getItems().length).toEqual(5);	
  	});
  	it("should have no items", function() {
  	  loadFixtures('sorted-table-no-items.html');
  		var table = new SortedTable("sortedTable");
  		expect(table.getItems().length).toEqual(5);	
  	}); 
  });
});
