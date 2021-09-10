function singleNum(nums) {
    const freq = {}

    for (let i of nums) {
        freq[i] = ++freq[i] || 1
    }
    for (let i in freq) {
        if (freq[i] === 1) return i
    }
}

console.log(singleNum([4,1,2,1,2])) // 4