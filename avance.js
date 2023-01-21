const formarGrupos = (N = 0, K = 0, T = []) => {

    // Inicializar la la matriz NxK de resultados máximos con ceros, con un indice de más para evitar desbordamientos
    /* Llenamos cada una de las posiciones del primer arreglo (N + 1) con 0 o cualquier elemento, y luego recorremos todos esos elementos y los reemplazamos con 
    un arreglo (K + 1) y lo rellenamos con 0*/
    const resultados_maximos = new Array(N + 1).fill(0).map(() => new Array(K + 1).fill(0));
    let maximo_viejo = 0
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
                /* if (i % j === 0) {
                    resultados_maximos[i][j] =
                        Math.max(
                            resultados_maximos[i][j - 1] + resultados_maximos[i - 1][j],
                            resultados_maximos[i][j - 1] * i
                        )
                } else {
                    resultados_maximos[i][j] = resultados_maximos[i][j - 1] + resultados_maximos[i - 1][j]

                } */
                /*    console.log(T[i])
                   let rendimiento_max = Math.max(resultados_maximos[i - 1][j - 1], resultados_maximos[i][j - 1]) === resultados_maximos[i - 1][j - 1]
                       ? T[i - 2]
                       : T[i - 1]
   
                   resultados_maximos[i][j] = Math.max(resultados_maximos[i - 1][j] + resultados_maximos[i][j - 1], resultados_maximos[i][j - 1] + T[i - 1]) */

                if (i % j === 0) {
                    //La cantidad de trabajadores es igual a la cantidad maxima de trabajadores por grupo

                    /* Sacamos el maximo entre:
                     (Tomar el rendimiento maximo de tomar al nuevo rendimiento y sumarcelo al anterior) 
                     y
                    (Calcular el maximo de nuevo y nivelar los niveles bajos) */

                    console.log(`${i},${j}`)
                    console.log("maximo_viejo: ", maximo_viejo)

                    let nuevo_maximo = 0
                    let rango = i <= j ? 0 : i - j
                    console.log("rango: ", rango)

                    for (let k = rango; k < i; k++) {
                        nuevo_maximo = T[k] > nuevo_maximo ? T[k] : nuevo_maximo
                    }

                    console.log("resultados_maximos[i - j][j]: ", resultados_maximos[i - j][j])
                    console.log("T[i - 1]: ", T[i - 1])
                    maximo_viejo = nuevo_maximo

                  

                    if (rango <= 1) {
                        console.log(`nuevo_maximo * ${(i - (i - j))}: `, nuevo_maximo * (i - (i - j)))
                        console.log("resultados_maximos[i - 1][j] + T[i - 1]: ", resultados_maximos[i - 1][j] + T[i - 1])
                        resultados_maximos[i][j] = Math.max(resultados_maximos[i - 1][j] + T[i - 1], resultados_maximos[i - j][j] + nuevo_maximo * (i - (i - j)))
                    }else{
                        console.log("resultados_maximos[i - rango][j]: ", resultados_maximos[i - rango][j])
                        console.log(`nuevo_maximo * ${rango}: `, nuevo_maximo * rango)
                        console.log("resultados_maximos[i - 1][j] + T[i - 1]: ", resultados_maximos[i - 1][j] + T[i - 1])
                        resultados_maximos[i][j] = Math.max(resultados_maximos[i - 1][j] + T[i - 1], resultados_maximos[i - rango][j] + nuevo_maximo * rango)
                    }


                    /* console.log(`rango: `, rango)
                    console.log(`nuevo_maximo * ${j}: `, nuevo_maximo * j) */

                } else {
                    //La cantidad de trabajadores NO es igual a la cantidad maxima de trabajadores por grupo
                    console.log(`${i},${j}`)
                    console.log(`${i} mod ${j}`, i % j)
                    console.log("maximo_viejo: ", maximo_viejo)

                    let nuevo_maximo = 0
                    let rango = i % j
                    // console.log(`${i} mod ${j} `, i % j)

                    for (let k = i - j; k < i; k++) {
                        nuevo_maximo = T[k] > nuevo_maximo ? T[k] : nuevo_maximo
                    }
                    console.log("nuevo_maximo: ", nuevo_maximo)
                    console.log("rango: ", rango)



                    if (maximo_viejo < nuevo_maximo) {
                        console.log("entrooo: ")
                        console.log("resultados_maximos[i - j][j]", resultados_maximos[i - j][j])
                        console.log("(i - (i - j)): ", (i - (i - j)))
                        resultados_maximos[i][j] = Math.max(resultados_maximos[i - 1][j] + T[i - 1], resultados_maximos[i - j][j] + nuevo_maximo * (i - (i - j)))

                    } else {
                        if (rango <= 1) {
                            resultados_maximos[i][j] = Math.max(resultados_maximos[i - 1][j] + T[i - 1], nuevo_maximo)
                        } else {
                            resultados_maximos[i][j] = Math.max(resultados_maximos[i - 1][j] + T[i - 1], resultados_maximos[i - rango][j] + nuevo_maximo * rango)
                        }
                        maximo_viejo = nuevo_maximo
                    }


                }


            }

        }
    }
    /* BMAX(I,J)= MAX( BMAX(I,J-1),
    BMAX(I-W(J), j-1) + B(J) ) */
    console.log("resultados_maximos: ", resultados_maximos)
}

 const T = [1, 15, 7, 9, 2, 5, 10]; //84
// const T = [1, 15, 7, 10, 2, 5, 10]; //85
// const T = [10, 20, 7, 1, 2, 5, 1]; //85
// const T = [10, 20, 7, 1]; //70
// const T = [10, 20, 7, 1, 2, 5]; //70
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

