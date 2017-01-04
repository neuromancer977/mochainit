describe("A suite", function() {

  beforeEach(function(){
    console.log('beforeEach');
  });

  before(function(){
    console.log('before');
  });
  after(function(){
    console.log('after');
  });
  afterEach(function(){
    console.log('afterEach');
  });

  it("contains spec with an expectation", function() {
    //expect(true).to.be.true;
    expect(2).to.equal(2);
  });
});