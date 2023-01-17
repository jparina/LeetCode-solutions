var isPalindrome = function(s) {
  let stringToCheck = ''
  let reversed = []
  for (let i = 0; i < s.length; i++) {
      let charCode = s.charCodeAt(i)
      if (charCode > 47 && charCode < 58 || charCode > 96 && charCode < 123) {
          stringToCheck += s[i]
          reversed.unshift(s[i])
      }
      else if (charCode > 64 && charCode < 91) {
          stringToCheck += s[i].toLowerCase()
          reversed.unshift(s[i].toLowerCase())
      }
  }

  return (stringToCheck === reversed.join(''))
};

