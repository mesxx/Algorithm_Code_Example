// Studi kasus membuat fungsi cara untuk menaiki tangga

function countWays(n) {
  const dp = new Array(n + 1);
  
  dp[0] = 1;
    dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

    return dp[n];
}
  
const n = 5;
const ways = countWays(n);
console.log(ways);
  