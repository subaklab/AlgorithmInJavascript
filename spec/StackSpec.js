describe("Stack", function() {
  var stack;

  beforeEach(function() {
    stack = new Stack();
  });

  it("emtpy test", function() {
    expect(stack.isEmpty()).toBeTrue();
  });
  
  it("1 push", function() {
    stack.push(1);
    expect(stack.isEmpty()).toBeFalse();
    expect(stack.size()).toBe(1);
  });

  it("pop", function() {
    stack.push(1);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBeTrue();
  });

  it("peek", function() {
    stack.push(1);
    expect(stack.peek()).toBe(1);
    expect(stack.isEmpty()).toBeFalse();
  })

});
