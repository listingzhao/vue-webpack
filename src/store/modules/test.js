function arrayList (n) {
  let arr = []
  let num, min = 2, max = 32
  if (!n) {
    return []
  }
  if (!typeof n == 'number' && !typeof n == 'string') {
    return []
  }
  n = parseInt(n)
  for (let i = 0; i < n; i++) {
    num = rand()
    if (arr.indexOf(num) === -1){
      arr.push(num)
    }else {
      i--
    }
  }
  function rand() {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  return arr
}

arrayList(3)
