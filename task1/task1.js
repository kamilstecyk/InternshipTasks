// I will implement binary tree to solve this task

class Node{
    constructor(value, left = null, right = null){
        this.value = value
        this.left = left
        this.right = right
    }
}

class BinaryTree{
    constructor(root = null){
        this.root = root
    }

    countLeaves(node = this.root){
        if(!node){
            return 0
        }

        if(!node.left && !node.right){
            return 1
        }

        return this.countLeaves(node.left) + this.countLeaves(node.right)
    }

    getLargestNumberOfEdges(node = this.root){
        if(!node){
            return 0
        }

        const leftDepth = this.getLargestNumberOfEdges(node.left)
        const rightDepth = this.getLargestNumberOfEdges(node.right)

        return Math.max(leftDepth, rightDepth) + 1
    }

    isEquivalentTo(node1 = this.root, node2 = this.root){
        if(!node1 && !node2){
            return true
        }

        if(!node1 || !node2){
            return false
        }

        if(node1.value !== node2.value){
            return false
        }

        return(
            this.isEquivalentTo(node1.left, node2.left) && this.isEquivalentTo(node1.right, node2.right)       
        )
    }

    // add new node according to the rules of binary tree
    insertNewNode(value){
        const newNode = new Node(value)

        // if there is no root yet we assing new node as root
        if(!this.root){
            console.log("Add root ", value)
            this.root = newNode
            return this
        }

        // otherwise we travel in tree and as child of existing node
        let currentNode = this.root
        while(currentNode){
            if(value < currentNode.value){
                if(!currentNode.left){
                    console.log(value, " Lower than ", currentNode.value)
                    currentNode.left = newNode
                    return this
                }
                currentNode = currentNode.left
            }
            else {
                if(!currentNode.right){
                    console.log(value, " Greateer than ", currentNode.value)
                    currentNode.right = newNode
                    return this
                }
                currentNode = currentNode.right
            }
            
        }
    }

    printTreeNiceFormat() {
        const lines = [];
        this._printTree(this.root, 0, 'X', lines);
        console.log(lines.join('\n'));
      }
      
    _printTree(node, level, direction, lines) {
        if (!node) return;
        const prefix = ' '.repeat(level * 4);
        const nodeString = `${prefix}${direction}-- ${node.value}`;
        lines.push(nodeString);
        this._printTree(node.left, level + 1, 'L', lines);
        this._printTree(node.right, level + 1, 'R', lines);
      }
}

let tree = new BinaryTree();
tree.insertNewNode(6)
tree.insertNewNode(2)
tree.insertNewNode(5)
tree.insertNewNode(5)
tree.insertNewNode(7)
tree.insertNewNode(6)
tree.insertNewNode(1)
tree.insertNewNode(0)
tree.insertNewNode(3)


tree.printTreeNiceFormat()
console.log(tree)
console.log(tree.countLeaves())

const maxEdges = tree.getLargestNumberOfEdges()
console.log("number of edges max ", maxEdges)


let tree2 = new BinaryTree();
tree2.insertNewNode(6)
tree2.insertNewNode(2)
tree2.insertNewNode(5)
tree2.insertNewNode(5)
tree2.insertNewNode(7)
tree2.insertNewNode(6)
tree2.insertNewNode(1)
tree2.insertNewNode(0)
tree2.insertNewNode(3)

const areTreesEqual = tree.isEquivalentTo(tree2.root)
console.log(areTreesEqual)