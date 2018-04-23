describe('Split Array function', function() {

  it('is able to split an array into two halves', function() {
    expect(split( [1,2,3,4]) ).toEqual( [[1,2,], [3,4]] );
    expect(split( [1,2,3,4,5] )).toEqual( [[1,2], [3,4,5]])
  });
});


describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // expect(merge( [[1, 2], [3,4]]) ).toEqual( [1,2,3,4] );
    expect(merge( [[3,4], [1,2]]) ).toEqual( [1,2,3,4] );
    expect(merge( [[3,4,5], [1,2]])).toEqual( [1,2,3,4,5]);
  });
});
