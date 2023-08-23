function expect (val) {
  function toBe(compareVal){
    if(val !== compareVal){
      throw new   Error("Not Equal")
    }
    return true
  }

  function notToBe(compareVal) {
    if (val === compareVal) {
      throw new  Error("Equal")
    }
    return true
  }

  return {
    toBe,
    notToBe
  }
}
const value = 5
const result = expect(value)

try{
  result.toBe(5);
  result.notToBe(10)
  result.toBe(10)
  result.notToBe(5)
} catch (error) {
  console.error(error.message);
}