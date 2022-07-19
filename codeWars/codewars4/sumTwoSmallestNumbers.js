function sumTwoSmallestNumbers(numbers) {
    const numbersInt =[];
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] > 0 && Number.isInteger(numbers[index])) {
            numbersInt.push(numbers[index]);
        }
    }
    numbersInt.sort((a, b) => a - b);
    return numbersInt[0]+numbersInt[1];
  }
  