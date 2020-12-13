console.log(
  "Naive Implementation of Fib function which returns the value of the fibonacci sequence at n."
);

const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(40)); // takes 3 seconds
