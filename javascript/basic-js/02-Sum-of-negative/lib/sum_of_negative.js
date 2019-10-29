sumOfNegative = (numbers) => {
  // TDO: You are getting a `numbers` array. Return the sum of **negative** numbers only.
  let sum = 0;
  numbers.forEach((number) => {
    if (number < 0) {
      sum = sum + number;
    }
  })

  return sum
}

// scan and pick out numbers that are negative, add them up, and return the result//

sumOfNegative([-1, 4, -2, 9, 18]) == -3

