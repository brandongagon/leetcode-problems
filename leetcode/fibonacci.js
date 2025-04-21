/*
recursive fibonacci solution
Time: O(2^n)
Memory: O(n)
*/
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}