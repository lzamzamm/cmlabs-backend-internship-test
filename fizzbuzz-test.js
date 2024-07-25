for (let i = 1; i <= 100; i++) {
  const isDivisibleBy3 = i % 3 === 0;
  const isDivisibleBy5 = i % 5 === 0;

  if (isDivisibleBy3 && isDivisibleBy5) {
    console.log(`${i} = FizzBuzz`);
  } else if (isDivisibleBy5) {
    console.log(`${i} = Buzz`);
  } else if (isDivisibleBy3) {
    console.log(`${i} = Fizz`);
  } else {
    console.log(i);
  }
}
