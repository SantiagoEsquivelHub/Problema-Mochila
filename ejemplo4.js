function formarGrupos(N, K, T) {
    // Inicializar la tabla con valores iniciales
    const tabla = [];
    for (let i = 0; i <= N; i++) {
      tabla[i] = [];
      tabla[i][0] = 0;
    }
    for (let j = 0; j <= K; j++) {
      tabla[0][j] = -Infinity;
    }
  
    // Rellenar la tabla utilizando la fórmula mencionada
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= K; j++) {
        tabla[i][j] = Math.max(tabla[i - 1][j], tabla[i - K - 1][j - 1] + T.slice(i - K, i).reduce((a, b) => Math.max(a, b), 0));

      }
    }
  
    // Reconstruir la solución y obtener los pares de valores A_i y B_i
    const solucion = [];
    let i = N;
    let j = K;
    while (j > 0) {
      if (tabla[i][j] === tabla[i - 1][j]) {
        // No se eligió formar un grupo más
        i--;
      } else {
        // Se eligió formar un grupo más
        solucion.push([i - K, i - 1]);
        i -= K + 1;
        j--;
      }
    }
  
    // Devolver la solución en el formato requerido
    return solucion.reverse();
  }
  
  // Prueba con el ejemplo mencionado
  const N = 7;
  const K = 3;
  const T = [1, 15, 7, 9, 2, 5, 10];
  console.log(formarGrupos(N, K, T));  // Debería imprimir [[1, 3], [4, 4], [5, 7]]
  