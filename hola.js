const mayorDeArreglo = (inicio, final, arreglo) => {
    let mayor = 0
    let arr = []
    for (let i = inicio; i < final; i++) {
        /* if (arreglo[i + 1] && arreglo[i] > arreglo[i + 1]) {
            mayor = arreglo[i]
        } else {
            mayor = arreglo[i + 1]
        } */
        arr.push(arreglo[i])
    }
    console.log("arr: ", arr)
    return Math.max(...arr)
}


const formarGrupos = (N = 0, K = 0, T = []) => {
    const resultados_maximos = new Array(N + 1).fill(0).map(() => new Array(K + 1).fill(0));
    let maximo = T[0]
    let posicion = 0
    let mayor_arreglo = 0
    let posicion_final = 0
    // Rellenamos el arreglo
    for (let i = 1; i <= N; i++) {
        posicion = 1
        // maximo = T[i - 1]
        indices_inicio = 1
        for (let j = 1; j <= K; j++) {
            if (j === 0) {
                resultados_maximos[i][j] = 0;
            } else if (j === 1) {
                resultados_maximos[i][j] = T[i - 1] + resultados_maximos[i - 1][j]
            } else if (j > i) {
                resultados_maximos[i][j] = resultados_maximos[i][j - 1]
            } else {


                mayor_arreglo = mayorDeArreglo(posicion, i, T)
                if (maximo > mayor_arreglo) {
                    posicion++

                    console.log(`${i}, ${j} `)
                    console.log("entre if 1 posicion: ", posicion)
                    console.log("posicion_final: ", posicion_final)
                    mayor_arreglo = mayorDeArreglo(posicion_final, posicion_final + 1, T)

                    console.log("maximo: ", maximo)
                    console.log("mayor_arreglo: ", mayor_arreglo)
                    resultados_maximos[i][j] = Math.max(resultados_maximos[i - posicion][j] + (maximo * posicion), resultados_maximos[i - 1][j] + T[i - 1])
                    posicion_final = i
                } else {

                    /* if (posicion === j) {
                        maximo = T[i - 1]
                        posicion_final = i

                        resultados_maximos[i][j] = Math.max(resultados_maximos[i - posicion][j] + (mayor_arreglo * posicion), resultados_maximos[i - 1][j] + T[i - 1])


                    } else */ if (posicion <= j) {
                        mayor_arreglo = mayorDeArreglo(posicion_final, i, T)
                        posicion++
                        console.log("----------------------------------------")
                        console.log(`${i}, ${j} `)
                        console.log("maximo: ", maximo)
                        console.log("posicion_final: ", posicion_final)
                        console.log("mayor_arreglo: ", mayor_arreglo)
                        console.log("posicion: ", posicion)
                        console.log("resultados_maximos[i - posicion][j]: ", resultados_maximos[i - posicion][j])
                        console.log("----------------------------------------")

                        resultados_maximos[i][j] = Math.max(resultados_maximos[i - posicion][j] + (mayor_arreglo * posicion), resultados_maximos[i - 1][j] + T[i - 1])
                        // maximo = mayor_arreglo < maximo ? maximo : mayor_arreglo
                        maximo = posicion === j ? T[i - 1] : maximo
                        posicion_final = posicion === j ? i : posicion_final
                        // posicion = posicion === j ? 0 : posicion
                        // posicion_final++
                    }
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

const T = [1, 15, 7, 9, 2]; //84
// const T = [1, 15, 7, 10, 2, 5, 10]; //85
// const T = [10, 20, 7, 1, 2, 5, 1]; //85
// const T = [10, 20, 7, 1]; //70
// const T = [10, 20, 7, 1, 2, 5]; //80
const K = 3
const N = T.length


const result = formarGrupos(N, K, T)
// maxRendimiento(N, K, T)
// console.log("mayor: ", mayorDeArreglo(0, 2, T))

