// longest common prefix
let arr = ["flower","flow","flight", "flourish"]
console.log(lcf(arr));

function lcf(arr) {
  let str = ''

  let sortedArr = arr.sort()
  let a1 = sortedArr[0]
  let a2 = sortedArr[sortedArr.length-1]

  // [flight, flourish, flow, flower]
  let i=0
  while (i < sortedArr.length && a1.charAt(i) === a2.charAt(i)) i++
  return a1.substring(0, i);
}