for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    n1 = i % 3;
    n2 = i % 5;
    console.log(`${i} = FizzBuzz`);
  } else if (i % 5 == 0) {
    n = i % 5;
    console.log(`${i} = Buzz`);
  } else if (i % 3 == 0) {
    n = i % 3;
    console.log(`${i} = Fizz`);
  }
}
