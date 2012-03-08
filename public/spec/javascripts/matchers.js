var CustomMatchers = {
  toBeOrderedByPosition: function(){
    //the test value is in this.actual
  }
}

beforeEach(function(){
  this.addMatchers(CustomMatchers);
});
