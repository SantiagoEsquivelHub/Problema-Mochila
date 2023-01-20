function formarGrupos(N, K, T) {
    // Inicializar la tabla de resultados con ceros
    const dp = new Array(N + 1).fill(0).map(() => new Array(K + 1).fill(0));

    // Iterar sobre los trabajadores y los grupos
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= K; j++) {
            // Si estamos en el primer trabajador o el primer grupo, el valor es simplemente
            // el rendimiento del trabajador
            if (i === 1 || j === 1) {
                dp[i][j] = T[i - 1];
            } else {
                // En otro caso, iteramos sobre los trabajadores anteriores y elegimos el máximo
                let max = 0;
                for (let k = 0; k < i; k++) {
                    max = Math.max(max, dp[k][j - 1] + T[i - 1]);
                }
                dp[i][j] = max;
            }
        }
    }

    console.log(dp)

    // La respuesta es el valor en la última fila y la última columna de la tabla
    const respuesta = dp[N][K];

    // Inicializar la lista de grupos
    const grupos = [];

    // Empezar el backtracking en la última fila y la última columna
    let i = N;
    let j = K;

    // Mientras no lleguemos a la primera fila o la primera columna
    while (i > 0 && j > 0) {
        // Si estamos en la primera fila, entonces este trabajador es el líder del grupo
        if (i === 1) {
            // Agregar el grupo a la lista y salir del bucle
            grupos.unshift({ a: i, b: i });
            break;
        }

        // Iterar sobre los trabajadores anteriores y buscar el que nos llevó al valor
        // máximo en la tabla
        let k = 0;
        for (k = 0; k < i; k++) {
            if (dp[i][j] === dp[k][j - 1] + T[i - 1]) {
                break;
            }
        }

        // Agregar el grupo a la lista y seguir con el backtracking
        grupos.unshift({ a: k + 1, b: i });
        i = k;
        j--;
    }

    return { respuesta, grupos };
}

// Ejemplo de uso
const N = 7;
const K = 3;
const T = [1, 15, 7, 9, 2, 5, 10];

const result = formarGrupos(N, K, T)
console.log("result: ", result)