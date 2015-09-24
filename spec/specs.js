describe('ramune', function() {
  it("will print no more ramune if ramune equal 0", function() {
    expect(ramune(0)).to.eql("<br> No more bottles of ramune on the wall, no more bottles of ramune. Go to the store and buy some more, 0 bottles of ramune on the wall.");
  });
  it("will print 1 more bottle of ramune if ramune equal 1", function() {
    expect(ramune(1)).to.eql("<br>1 more bottle of ramune on the wall, 1 more bottle of ramune. Take one down and pass it around, 0 bottles of ramune on the wall.<br> No more bottles of ramune on the wall, no more bottles of ramune. Go to the store and buy some more, 1 bottles of ramune on the wall.");
  });
  it("will print 2 more bottles of ramune if ramune equal 2", function() {
    expect(ramune(2)).to.eql( "<br>2 more bottles of ramune on the wall, 2 more bottles of ramune. Take one down and pass it around, 1 bottle of ramune on the wall.<br>1 more bottle of ramune on the wall, 1 more bottle of ramune. Take one down and pass it around, 0 bottles of ramune on the wall.<br> No more bottles of ramune on the wall, no more bottles of ramune. Go to the store and buy some more, 2 bottles of ramune on the wall.");
  });
  it("will print 3 more bottles of ramune if ramune equal 3", function() {
    expect(ramune(3)).to.eql( "<br>3 more bottles of ramune on the wall, 3 more bottles of ramune. Take one down and pass it around, 2 bottles of ramune on the wall.<br>2 more bottles of ramune on the wall, 2 more bottles of ramune. Take one down and pass it around, 1 bottle of ramune on the wall.<br>1 more bottle of ramune on the wall, 1 more bottle of ramune. Take one down and pass it around, 0 bottles of ramune on the wall.<br> No more bottles of ramune on the wall, no more bottles of ramune. Go to the store and buy some more, 3 bottles of ramune on the wall.");
  });
});
