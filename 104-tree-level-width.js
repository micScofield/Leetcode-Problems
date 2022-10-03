const { t3, t4, Tree, Node } = require('../DataStructures/Common-Patterns/Custom-Data-Structures/Tree/tree')

function maxDepth(root) {

    if (!root) return 0

    let counters = [0]
    let arr = [root, 's'] // s denotes end of level
    let temp = null
    while(arr.length !== 0) {
        temp = arr.shift()

        if (temp === 's' && arr.length === 0) return counters.length

        if (temp === 's') {
            counters.push(0) // new counter for new level
            arr.push('s') // put it at end of array which will denote new level's end
        } else {
            counters[counters.length-1]++
            if (temp && temp.left) arr.push(temp.left)
            if (temp && temp.right) arr.push(temp.right)
        }
    }
    return counters.length
}

const tree = new Tree()
const node = new Node(3)
tree.root = node
tree.root.left = new Node(9)
tree.root.right = new Node(20)
tree.root.right.left = new Node(15)
tree.root.right.right = new Node(7)

console.log(maxDepth(tree.root))