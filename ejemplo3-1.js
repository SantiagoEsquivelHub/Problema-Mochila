function maximizeWorkerPerformance(N, K, T) {
    // Creamos la matriz de programación dinámica
    const dp = new Array(N + 1);
    for (let i = 0; i <= N; i++) {
        dp[i] = new Array(K + 1).fill(0);
    }

    // Llenamos la matriz
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= K; j++) {
            // Si el tamaño del grupo es mayor que el número de trabajadores restantes,
            // el rendimiento es igual al rendimiento del trabajador más el rendimiento máximo obtenido al formar grupos
            // con los trabajadores 0 a i - 1
            if (j > i) {
                dp[i][j] = T[i - 1] + dp[i - 1][j];
            }
            // En otro caso, recorremos todos los trabajadores k desde i - 1 hasta i - j
            // y elegimos el rendimiento máximo entre el rendimiento total de los grupos formados
            // con los trabajadores k a i, sumando el rendimiento del trabajador i multiplicado por el tamaño del grupo,
            // y el rendimiento máximo obtenido al formar grupos con los trabajadores 0 a k - 1
            let maxPerformance = 0;
            for (let k = i - 1; k >= K; k--) {
                maxPerformance = Math.max(maxPerformance, T[i - 1] * (i - k) + dp[k][j - 1]);
            }
            dp[i][j] = maxPerformance;
        }
    }

    console.log(dp)

}


const T = [1, 15, 7, 9, 2, 5, 10];
// const T = [1, 15, 7, 9, 2, 5, 10];
const N = T.length;
const K = 3;


const result = maximizeWorkerPerformance(N, K, T)