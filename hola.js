const formarGrupos = (N = 0, K = 0, T = []) => {
    const resultados_maximos = new Array(N + 1).fill(0).map(() => new Array(K + 1).fill(0));
    let maximo = 0
    let posicion = 0

    // Rellenamos el arreglo
    for (let i = 1; i <= N; i++) {
        posicion = 1
        maximo = T[i - 1]

        for (let j = 1; j <= K; j++) {
            if (j === 0) {
                resultados_maximos[i][j] = 0;
            } else if (j === 1) {
                resultados_maximos[i][j] = T[i - 1] + resultados_maximos[i - 1][j]
            } else if (j > i) {
                resultados_maximos[i][j] = resultados_maximos[i][j - 1]
            } else if (T[i]) {

                /* console.log("----------------------------------------")
                   console.log(`${T[i - 1]} > ${T[i]}: `, T[i - 1] > T[i])
                  console.log("posicion: ", posicion)
                  console.log("maximo: ", maximo)
                  console.log("T[i]: ", T[i])
                  console.log("j - 1: ", j - 1) 
                 console.log("----------------------------------------")*/
                // posicion = 1
                if (maximo > T[i]) {
                    console.log("entre if 1 posicion: ", posicion)
                    posicion++
                    resultados_maximos[i][j] = resultados_maximos[i - posicion][j] + maximo * posicion
                } else {
                    /* console.log("posicion: ", posicion)
                    console.log("j: ", j) */
                    if (posicion <= j) {
                        posicion++
                        console.log("----------------------------------------")
                        console.log(`${i}, ${j} `)
                        console.log("maximo: ", maximo)
                        console.log("posicion: ", posicion)
                        console.log("resultados_maximos[i - posicion][j]: ", resultados_maximos[i - posicion][j] )
                        console.log("----------------------------------------")
                        
                        resultados_maximos[i][j] = Math.max(resultados_maximos[i - posicion][j] + maximo * posicion, resultados_maximos[i - 1][j] + T[i - 1])
                        maximo = T[i]
                    } /* else {
                        maximo = T[i]
                        posicion = 1
                        console.log("----------------------------------------")

                        console.log("entre if 2 posicion: ", posicion)
                        console.log("posicion: ", posicion)
                        console.log("maximo: ", maximo)
                        console.log("----------------------------------------")

                        resultados_maximos[i][j] = Math.max(resultados_maximos[i - posicion][j] + maximo * posicion, resultados_maximos[i - 1][j] + T[i - 1])
                    } */
                    /* maximo = T[i]
                    console.log("entre if 2 posicion: ", posicion)
                    posicion++
                    console.log("entre if 2 maximo: ", maximo)

                    // resultados_maximos[i][j] = resultados_maximos[i - 1][j] + T[i - 1]
                    console.log("resultados_maximos[i - posicion][j]: ", resultados_maximos[i - posicion][j])
                    console.log("i: ", i)
                    resultados_maximos[i][j] = Math.max(resultados_maximos[i - posicion][j] + maximo * posicion, resultados_maximos[i - 1][j] + T[i - 1]) */
                }




            }
        }
    }
    console.log("resultados_maximos: ", resultados_maximos)
}

/* const N1 = 10000;
let T1 = []
for (let i = 0; i < N1; i++) {
    T1.push(1)
} */

const T = [1, 15, 7, 9, 2, 5, 10]; //84
// const T = [1, 15, 7, 10, 2, 5, 10]; //85
// const T = [10, 20, 7, 1, 2, 5, 1]; //85
// const T = [10, 20, 7, 1]; //70
// const T = [10, 20, 7, 1, 2, 5]; //80
const K = 3
const N = T.length


const result = formarGrupos(N, K, T)
// maxRendimiento(N, K, T)

