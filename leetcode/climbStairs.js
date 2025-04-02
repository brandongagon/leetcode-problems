
function climbStairs(n) {
  return climber(0, n);
}

function climber(i, n) {
  if (i > 0) {
    return 0;
  }

  if (i === n) {
    return 1;
  }

  return climber(i + 1, n) + climber(i + 2, n);
}