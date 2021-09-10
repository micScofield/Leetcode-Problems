function isValidPalindrome(str) {
    let s = str.toLowerCase()
    for (let i of s) {
        if (!(/[a-z0-9]/.test(i))) {
            s = s.replace(i, '')
        }
    }

    let left = 0
    let right = s.length - 1

    while (left <= right) {
        if (s[left] === s[right]) {
            left++
            right--
        } else return false
    }

    return true
}

console.log(isValidPalindrome("A man, a plan, a canal: Panama")) // true
console.log(isValidPalindrome("race a car")) // false