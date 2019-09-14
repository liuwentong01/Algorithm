/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.arr = [];
  this.minArr = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.arr.push(x);
  if (this.minArr.length == 0) {
    this.minArr.push(x);
  } else {
    var val = this.minArr[this.minArr.length - 1];
    if (x < val) this.minArr.push(x);
    else this.minArr.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.arr.pop();
  this.minArr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  console.log(this.arr, this.minArr)
  return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  console.log('getmin');
  return this.minArr[this.minArr.length - 1];
};


var obj = new MinStack()
obj.push(-2)
obj.push(0);
obj.push(-3);
var a1 = obj.getMin();
console.log(a1);
obj.pop()
var a2 = obj.top()
var a3 = obj.getMin();
console.log(a2, a3);

