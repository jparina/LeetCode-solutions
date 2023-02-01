var canConstruct = function(ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false
  let letters = {}
  for (let i of magazine) {
      if (letters[i]) {
          letters[i] += 1
      }
      else {
          letters[i] = 1
      }
  }
  for (let i of ransomNote) {
      if (letters[i] === 0 || !letters[i]) return false
      else {
          letters[i] -= 1
      }
  }
  return true
};