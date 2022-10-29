console.log(longestUniqueSubstr('thisishowwedoit')) // should return 6 (wedoit)
console.log(longestUniqueSubstr('abbcdef')) // should return 5 (bcdef)
console.log(longestUniqueSubstr('dvdf')) // should return 3 (vdf)
console.log(longestUniqueSubstr('abcabcbb')) // should return 3 (abc)
console.log(longestUniqueSubstr('aabaab!bb')) // should return 3 (ab!)

function longestUniqueSubstr(s) {
    let longestSubstring = ''
    let current = ''
    let index = -1

    for (let i in s) {
        // console.log("Iterating", s[i])
        index = current.lastIndexOf(s[i])
        if (current.length && index > -1) {
            longestSubstring = longestSubstring.length < current.length ? current : longestSubstring
            // set current to be the starting point where index matched
            // console.log({current, longestSubstring, newCurrent: current.substr(index+1, +i)})
            current = current.substr(index+1) + s[i]
        } else {
            current += s[i]
        }
    }
    console.log(longestSubstring)
    return Math.max(longestSubstring.length, current.length)
}