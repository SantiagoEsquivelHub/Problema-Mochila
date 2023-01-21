function maxPerformance(workers, maxGroupSize) {
    let maxPerformance = 0;
    let maxGroupStart = 0;
    let maxGroupEnd = 0;
    
    for (let start = 0; start < workers.length; start++) {
      for (let end = start; end < workers.length; end++) {
        let groupPerformance = 0;
        let groupSize = 0;
        
        for (let i = start; i <= end; i++) {
          groupPerformance += workers[i];
          groupSize++;
        }
        
        if (groupSize <= maxGroupSize) {
          if (groupPerformance > maxPerformance) {
            maxPerformance = groupPerformance;
            maxGroupStart = start;
            maxGroupEnd = end;
          }
        }
      }
    }
    
    console.log({ maxPerformance, maxGroupStart, maxGroupEnd })
    return { maxPerformance, maxGroupStart, maxGroupEnd };
  }
  
  


const T = [1, 15, 7, 9, 2, 5, 10];
const K = 3

maxPerformance(T, K)