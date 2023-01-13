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
                // resultados_maximos[i][j] = Math.max(resultados_maximos[i - 1][j], resultados_maximos[i - K - 1][j - 1] + T.slice(i - K, i).reduce((a, b) => a + b, 0));
                /* Empezamos a probar todos que combinacion de grupos da el resultado mayor,
                    basandonos en la suma de los resultados anteriores
                */
                /*   let max = 0;
                  for (let k = j - 1; k < i; k++) {
                      //resultados_maximos[i][j] = Math.max(resultados_maximos[i - 1][j], T[i - 1] + resultados_maximos[i - k + 1][j - 1]);
                      resultados_maximos[i][j] = Math.max(resultados_maximos[i - 1][j], resultados_maximos[i - k - 1][j - 1] + T.slice(i - k, i).reduce((a, b) => a + b, 0));
                      console.log("i= ", i)
                      console.log("k: ", k)
                      console.log("j: ", j)
                      console.log("T.slice(i - k, i): ", T.slice(i - k, i))
                      console.log("T.slice(i - k, i).reduce((a, b) => a + b, 0): ", T.slice(i - k, i).reduce((a, b) => a + b, 0))
                      //  max = Math.max(max, resultados_maximos[k][j - 1] + T[i - 1]);
                  } */
                //  resultados_maximos[i][j] = max */
                /* let maxPerformance = 0;
               for (let k = i - 1; k >= Math.max(i - j, 0); k--) {
                   console.log("i= ",i)
                   console.log("k: ", k)
                   console.log("j: ", j)
                   console.log("T[i - 1] :", T[i - 1])
                   console.log("(i - k) :", (i - k))
                   maxPerformance = Math.max(maxPerformance, T[i - 1] * (i - k) + resultados_maximos[k][j]);
                   console.log("maxPerformance :", maxPerformance)

               }
               resultados_maximos[i][j] = maxPerformance; */



                //Las combinaciones que analizaremos serán hasta k, es deicr hasta i-1
                /*  for (let k = i; k > i - j; k--) {
                     max = (resultados_maximos[i - 1][j] + T[i - 1])
                     console.log("k: ", k)
                     console.log("i: ", i)
                     console.log("j: ", j)
 
                     let arr = T.slice((k - 1), i)
                     let maxArr = Math.max(...arr)
                     let result = maxArr * arr.length
                     console.log("arr: ", arr)
                     console.log("maxArr: ", maxArr)
                     console.log("result: ", result)
                     console.log("resultados_maximos[i - 1][j]: ", resultados_maximos[i - 1][j])
                     console.log("T[i - 1]: ", T[i - 1])
                     console.log("resultados_maximos[i - 1][j] + T[i - 1]: ", resultados_maximos[i - 1][j] + T[i - 1])
                     max = Math.max(max, result);
                 } */
                let max = (resultados_maximos[i - 1][j] + T[i - 1])
                for (let k = i; k > i - j; k--) {
                    console.log("k: ", k)
                    console.log("i: ", i)
                    console.log("j: ", j)
                    let arr = T.slice((k - 1), i)
                    let maxArr = Math.max(...arr)
                    let result = maxArr * arr.length
                    console.log("arr: ", arr)
                    console.log("maxArr: ", maxArr)
                    console.log("result: ", result)
                    console.log("resultados_maximos[i - 1][j]: ", resultados_maximos[i - 1][j])
                    console.log("T[i - 1]: ", T[i - 1])
                    console.log("resultados_maximos[i - 1][j] + T[i - 1]: ", resultados_maximos[i - 1][j] + T[i - 1])
                    max = Math.max(max, result);

                    if (i === N) {
                        let arr = T.slice((k), i)
                        let maxArr = Math.max(...arr)
                        let result = maxArr * arr.length
                        max = Math.max(resultados_maximos[i - 1][j] + T[i - 1], result + resultados_maximos[i - 2][j]);
                    }
                }


                resultados_maximos[i][j] = max
            }

        }
    }
    /* BMAX(I,J)= MAX( BMAX(I,J-1),
    BMAX(I-W(J), j-1) + B(J) ) */
    console.log("resultados_maximos: ", resultados_maximos)
}

const T = [1, 15, 7, 9, 2, 5];
// const T = [1, 15, 7];
const N = T.length;
const K = 3;


const result = formarGrupos(N, K, T)

