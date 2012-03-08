var SortedTable = new Class({
  initialize: function(tableId) {
    this.table = $("#" + tableId);
    this.table.find("tbody").sortable().disableSelection();
  },
  
  getItems: function() {
    var list = [];
  	this.table.find("tbody tr").each(function(){
  	  list.push($(this));
  	});
  	return list;
  },
  
  setPositions: function() {
    //set the position in the first column
  }
});
