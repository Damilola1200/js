function createCounter (n) {
  function increasedCount () {
      n ++ ;
      return  n -1
  } 
  return increasedCount
}

let counter = createCounter (9);

console.log (counter);
