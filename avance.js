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
                resultados_maximos[i][j] = T[i - 1] + resultados_maximos[i - 1][j]
            } else if (j > i) {
                resultados_maximos[i][j] = resultados_maximos[i][j - 1]
            } else {

                // let max = (resultados_maximos[i - 1][j] + T[i - 1])
                let max = 0

                for (let k = i; k > i - j; k--) {
                    /* console.log("k: ", k)
                    console.log("i: ", i)
                    console.log("j: ", j) */



                    let arr = T.slice((k - 1), i)
                    let maxArr = Math.max(...arr)
                    let result = maxArr * arr.length


                    /* 
                                        console.log("arr: ", arr)
                                        console.log("maxArr: ", maxArr)
                                        console.log("result: ", result)
                                        console.log("resultados_maximos[i - 1][j]: ", resultados_maximos[i - 1][j])
                                        console.log("T[i - 1]: ", T[i - 1])
                                        console.log("resultados_maximos[i - 1][j] + T[i - 1]: ", resultados_maximos[i - 1][j] + T[i - 1]) */


                    max = Math.max(max, result);

                    // max = Math.max(max, result + resultados_maximos[i - 2][j]);


                }



                resultados_maximos[i][j] = max
            }

        }
    }
    /* BMAX(I,J)= MAX( BMAX(I,J-1),
    BMAX(I-W(J), j-1) + B(J) ) */
    // console.log("resultados_maximos: ", resultados_maximos)
}

const T = [1, 15, 7, 9, 2];
// const T = [1, 15, 7];


/* const N = 1000;
const K = 1000;

for (let i = 0; i < N; i++) {
    T.push(1)
} */


/* No estoy tomando en cuenta los subproblemas */
/* No usar el slice */



const result = formarGrupos(N, K, T)

