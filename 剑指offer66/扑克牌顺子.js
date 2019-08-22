function IsContinuous(numbers) {
  numbers.sort((a, b) => a - b);
  var min = 0,minIndex = 0,max = numbers[numbers.length - 1];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] != 0) {
      min = numbers[i];
      minIndex = i;
      break;
    }
  }
  if (max - min >= 5) {
    return false;
  }
  numbers = numbers.slice(minIndex);
  var set = new Set(numbers);
  if (set.size + minIndex < 5) return false;

  return true;
}
