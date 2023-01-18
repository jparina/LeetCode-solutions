var isAnagram = function(s, t) {
  let charHash = {}
  for (let char of s){
      let uni = char.charCodeAt(0)
      if (charHash[uni]) {
          charHash[uni] += 1
      }
      else {
          charHash[uni] = 1
      }
  }
  for (let char of t){
      let uni = char.charCodeAt(0)
      if (charHash[uni]) {
          charHash[uni] -= 1
      }
      else {
          return false
      }
  }
  for (let key in charHash){
      if (charHash[key] !== 0) {
          return false
      }
  }
  return true
};