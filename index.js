const cantidadDeCadaGrupo = (N, K, array = []) => {

    const cantidadDeGrupos = Math.ceil((array.length) / K)

    trabajadoresPorGrupo = []
    n = array.length

    for (let i = 0; i < N; i++) {

        //Sí el numero de trabajadores(n) cabe en el número máximo de trabajadores por grupo(K)
        if ((n - K) > 0) {
            n -= K
            trabajadoresPorGrupo.push(K)
        }
        else {
            trabajadoresPorGrupo.push(n)
            break
        }
    }

    console.log("trabajadoresPorGrupo: ", trabajadoresPorGrupo);
}

const grupos = (N, K, array = []) => {

    let conteo = 0;
    let arreglo_provisional = []

    for (let i = 0; i < array.length; i++) {

        
        Math.max(arreglo_provisional)

    }


}

const N = 7;
const K = 3;
const T = [1, 15, 7, 9, 2, 5, 10]
cantidadDeCadaGrupo(N, K, T)