/* function createGroups(N, K, T) {
    // resultado final
    let result = [];
  
    // iteramos por cada trabajador
    for (let i = 0; i < N; i++) {
      // obtenemos el mejor trabajador del grupo
      let max = Math.max(...T.slice(i, i + K));
      // obtenemos el índice del mejor trabajador
      let maxIndex = T.indexOf(max, i);
      // añadimos el rango al resultado final
      result.push([i, maxIndex]);
      // actualizamos la capacidad de los trabajadores en el grupo
      for (let j = i; j <= maxIndex; j++) {
        T[j] = max;
      }
      // avanzamos la posición a la siguiente del último trabajador del grupo
      i = maxIndex;
    }
  
    return result;
  }
  
  // ejemplo
  let N = 7;
  let K = 3;
  let T = [1, 15, 7, 9, 2, 5, 10];
  console.log(createGroups(N, K, T)); // debe imprimir [[0, 2], [3, 3], [4, 6]]
   */

  let arr = [1, 15, 7].slice(0, 2)
  let max = Math.max(...arr)
console.log(arr)
console.log(max)
console.log(max * arr.length)