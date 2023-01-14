var isValid = function(s) {
  let stack = []
  let closedParen = [')', ']', '}']
  let openParen = ['(', '[', '{']
  for (let i = 0; i < s.length; i++) {
    if (openParen.includes(s[i])) {
      stack.unshift(s[i])
      continue
    }
    if (s[i] === ')' && stack[0] === '(') {
      stack.shift()
      continue
    }
    if (s[i] === ']' && stack[0] === '[') {
      stack.shift()
      continue
    }
    if (s[i] === '}' && stack[0] === '{') {
      stack.shift()
      continue
    }
    return false  
  }
  if (s.length % 2 === 1 || stack.length > 0) {
    return false
  }
  return true
};