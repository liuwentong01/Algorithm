function multiply(array) {
  var B = [];
  for (let i = 0; i < array.length; i++) {
    var sum = 1;
    for (let j = 0; j < array.length; j++) {
      if (j == i) continue;
      sum *= array[j];
    }
    B[i] = sum;
  }
  return B;
}
