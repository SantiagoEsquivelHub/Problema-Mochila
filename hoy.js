function createGroups(N, K, T) {
    // Initialize the DP matrix
    let dp = new Array(N + 1);
    for (let i = 0; i <= N; i++) {
        dp[i] = new Array(K + 1).fill(-Infinity);
    }
    for (let i = 1; i <= N; i++) {
        dp[i][1] = T[i - 1];
    }

    // Fill the DP matrix
    for (let i = 1; i <= N; i++) {
        for (let j = 2; j <= K; j++) {
            for (let k = 1; k < i; k++) {
                dp[i][j] = Math.max(dp[i][j], dp[k][j - 1]);
            }
            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
        }
    }

    console.log(dp)

    /* // Initialize the groups array
    let groups = [];
  
    // Backtrack to find the groups
    let i = N;
    let j = K;
    while (i > 0 && j > 0) {
        if (dp[i][j] === dp[i - 1][j]) {
            i--;
        } else {
            groups.unshift([i, j]);
            j--;
            i = i - 1;
            while (dp[i][j] === dp[i - 1][j]) {
                i--;
            }
        }
    }
  
    // Return the groups
    return groups; */
}

const T = [1, 15, 7, 9, 2, 5, 10];
const K = 3
const N = T.length

const result = createGroups(N, K, T)
