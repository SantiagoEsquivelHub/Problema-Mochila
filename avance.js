const formarGrupos = (N = 0, K = 0, T = []) => {

    // Inicializar la la matriz NxK de resultados máximos con ceros, con un indice de más para evitar desbordamientos
    /* Llenamos cada una de las posiciones del primer arreglo (N + 1) con 0 o cualquier elemento, y luego recorremos todos esos elementos y los reemplazamos con 
    un arreglo (K + 1) y lo rellenamos con 0*/
    const resultados_maximos = new Array(N + 1).fill(0).map(() => new Array(K + 1).fill(0));

    // Rellenamos el arreglo
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= K; j++) {
            if (j === 0) {
                resultados_maximos[i][j] = 0;
            } else if (j === 1) {
                resultados_maximos[i][j] = T[i - 1]
            } else if (j > i) {
                resultados_maximos[i][j] = resultados_maximos[i][j - 1]
            } else {
                /* if (i % j === 0) {
                    resultados_maximos[i][j] =
                        Math.max(
                            resultados_maximos[i][j - 1] + resultados_maximos[i - 1][j],
                            resultados_maximos[i][j - 1] * i
                        )
                } else {
                    resultados_maximos[i][j] = resultados_maximos[i][j - 1] + resultados_maximos[i - 1][j]

                } */
                console.log(T[i])
                let rendimiento_max = Math.max(resultados_maximos[i - 1][j - 1], resultados_maximos[i][j - 1]) === resultados_maximos[i - 1][j - 1]
                    ? T[i - 2]
                    : T[i - 1]

                resultados_maximos[i][j] = Math.max(resultados_maximos[i - 1][j] + resultados_maximos[i][j - 1], resultados_maximos[i][j - 1] + T[i - 1])

                //Falta encontrar el maximo entre los rendimientos encontrados
            }

        }
    }
    /* BMAX(I,J)= MAX( BMAX(I,J-1),
    BMAX(I-W(J), j-1) + B(J) ) */
    console.log("resultados_maximos: ", resultados_maximos)
}

const T = [1, 15, 7, 9, 2, 5, 10];
const K = 3
const N = T.length
// const T = [1, 15, 7];


/* const N = 1000;
const K = 1000;

for (let i = 0; i < N; i++) {
    T.push(1)
} */


/* No estoy tomando en cuenta los subproblemas */
/* No usar el slice */



const result = formarGrupos(N, K, T)

