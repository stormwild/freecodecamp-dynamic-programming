# freecodecamp-dynamic-programming

Dynamic Programming - Learn to Solve Algorithmic Problems &amp; Coding Challenges

## Fibonacci

Naive Implementation of Fib function which returns the value of the fibonacci sequence at n.

```javascript
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
```

Output

```sh
$ node src/fib.js
Naive Implementation of Fib function which returns the value of the fibonacci sequence at n.
1
1
2
3
5
8
102334155
Done in 3.03s.
```

Memoized implementation

```javascript
console.log(
  "Memoized Implementation of Fib function which returns the value of the fibonacci sequence at n."
);

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(50));
```

Output

```sh
$ node src/fibmemo.js
Memoized Implementation of Fib function which returns the value of the fibonacci sequence at n.
1
1
2
3
5
8
12586269025
Done in 0.16s.
```

## References

[Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges](https://youtu.be/oBt53YbR9Kk)
