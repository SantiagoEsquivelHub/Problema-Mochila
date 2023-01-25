const mochila = (pesoMaximo = 0, pesos = [], beneficios = []) => {

    //TABLA DE RESULTADOS INTERMEDIOS: Beneficios máximos

    //definimos el arreglo
    let beneficiosMaximos = [];

    //llenamos el arreglo de pesoMaximo + 1 de ceros
    beneficiosMaximos = pesos.map(v => Array.from({ length: pesoMaximo + 1 }, () => 0));

    //MATRIZ (pesos X pesoMaximo)

    //el primer for va desde la posición 1 hasta pesos.length - 1 [1, pesos.length - 1]
    for (let i = 1; i < pesos.length; i++) {
        //el segundo for va desde la posición 1 hasta el pesoMaximo [1, pesoMaximo]
        for (let j = 1; j <= pesoMaximo; j++) {

            //objetos de la fila I
            if (i === 1) {

                /* para que los primeros I objetos entren deben ser mayores o iguales
                 al peso de J, si no, significa que no caben por su peso */
                if (j >= pesos[i]) {
                    beneficiosMaximos[i][j] = beneficios[i];
                }

                /* si el peso J es menor que el peso del objeto I,
                entonces 
                */
            } else if (j < pesos[i]) {

                beneficiosMaximos[i][j] = beneficiosMaximos[i - 1][j];

                /* obtenemos el mayor beneficio que nos de tomando el último objeto o
                sin tomarlo
                 */
            } else {

                beneficiosMaximos[i][j] = Math.max(beneficiosMaximos[i - 1][j], beneficios[i] + beneficiosMaximos[i - 1][j - pesos[i]]);

            }

        }
    }

    console.log(beneficiosMaximos)

    //BUCLE VORAZ
    let objetos = [];
    let j = pesoMaximo;

    //este for recorre el arreglo de beneficiosMaximos desde la ultima fila, hasta la primera
    for (let i = pesos.length - 1; i > 0; i--) {

        /* 
        que el ultimo beneficio máximo sea diferente de su anterior i-1 e igual de su anterior j-pesos[i]
         */

        if (beneficiosMaximos[i][j] !== beneficiosMaximos[i - 1][j] && beneficiosMaximos[i][j] === beneficiosMaximos[i - 1][j - pesos[i]] + beneficios[i]) {
            objetos.push(i);
            j -= pesos[i];
        }
    }
    console.log(objetos)

    return objetos;

}

const maxWeight = 20;
const weights = [7, 5, 6, 8];
const benefits = [3, 2, 1, 4];
