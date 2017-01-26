function add(
  num1: number,
  num2: number,
  ...numbers : number[]
) : number {
  var result = num1 + num2;
  for (var i = 0; i < numbers.length; i++){
    result += numbers[i];
  }
  return result;
}

answer = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(answer);


