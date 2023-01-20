function maximizeWorkerPerformance(N, K, T) {
    // Creamos la matriz de programación dinámica
    const dp = new Array(N);
    for (let i = 0; i < N; i++) {
        dp[i] = new Array(K).fill(0);
    }


    // Llenamos la matriz
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < K; j++) {
            // Si estamos en la primera fila, el rendimiento es igual al rendimiento del trabajador
            if (i === 0) {
                dp[i][j] = T[i];
                continue;
            }
            // Si estamos en la primera columna, el rendimiento es igual al rendimiento del trabajador
            // más el rendimiento máximo obtenido al formar grupos con los trabajadores 0 a i - 1
            if (j === 0) {
                // dp[i][j] = T[i] + dp[i - 1][j];
                dp[i][j] = T[i];
                continue;
            }
            // En otro caso, recorremos todos los trabajadores k desde i - 1 hasta i - j
            // y elegimos el rendimiento máximo entre el rendimiento total de los grupos formados
            // con los trabajadores k a i, sumando el rendimiento del trabajador i multiplicado por el tamaño del grupo,
            // y el rendimiento máximo obtenido al formar grupos con los trabajadores 0 a k - 1
            let maxPerformance = 0;
            for (let k = i - 1; k >= i - j; k--) {
                maxPerformance = Math.max(maxPerformance, T[i] * (i - k + 1) + dp[k + 1][j]);
            }
            dp[i][j] = maxPerformance;
        }
    }

    console.log(dp)

}

const T = [1, 15, 7, 9, 2, 5, 10];
// const T = [1, 15, 7];
const N = T.length;
const K = 3;


const result = maximizeWorkerPerformance(N, K, T)