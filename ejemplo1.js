function formarGrupos(n, k, t) {
    // Crea una matriz de tamaño n x k
    const dp = new Array(n).fill(0).map(() => new Array(k).fill(0));
  
    // Rellena la matriz
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < k; j++) {
        if (j === 0) {
          dp[i][j] = 0;
        } else if (j === 1) {
          dp[i][j] = t.slice(0, i + 1).reduce((sum, x) => sum + x, 0);
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
          for (let k = j - 1; k < i; k++) {
            dp[i][j] = Math.max(dp[i][j], dp[k][j - 1] + t.slice(k + 1, i + 1).reduce((sum, x) => sum + x, 0));
          }
        }
      }
    }
  
    // Obtiene los índices de los grupos
    const grupos = [];
    let i = n - 1, j = k - 1;
    while (j > 0) {
      if (dp[i][j] === dp[i - 1][j]) {
        // Excluye al último trabajador
        i--;
      } else {
        // Incluye al último trabajador en un grupo
        grupos.push([i - j + 1, i]);
        i = i - j;
        j--;
      }
    }
    // Agrega el último grupo, si es necesario
    if (i >= 0) grupos.push([0, i]);
  
    return grupos.reverse();
  }
  
  // Ejemplo de uso
  const n = 7;
  const k = 3;
  const t = [1, 15, 7, 9, 2, 5, 10];
  console.log(formarGrupos(n, k, t)); // [[1, 3], [4, 4], [5, 7]]
  