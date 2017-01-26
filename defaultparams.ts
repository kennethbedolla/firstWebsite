function add(num1: number, num2: number, num3: number = 0): number{
  let total = num1 + num2 + num3;

  return total;
}

    answer = add(14, 23, 30);
    console.log("adding 3 numbers: " + answer);
    answer = add(14, 23);
    console.log("Adding 2 numbers: " + answer);
