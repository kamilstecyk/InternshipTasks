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

    // add new node according to the rules of binary tree, if such a value exist then it will no be added
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
            else if(value > currentNode.value){
                if(!currentNode.right){
                    console.log(value, " Greateer than ", currentNode.value)
                    currentNode.right = newNode
                    return this
                }
                currentNode = currentNode.right
            }
            else{
                console.log("Cannot add this value")
                return null;
            }
        }
    }

    inOrderTraversal(node) {
        if (node) {
          this.inOrderTraversal(node.left);
          console.log(node.value);
          this.inOrderTraversal(node.right);
        }
      }
    
    print() {
        this.inOrderTraversal(this.root);
      }
}

let tree = new BinaryTree();
tree.insertNewNode(4);
tree.insertNewNode(2);
tree.insertNewNode(5);
tree.insertNewNode(5);
tree.insertNewNode(7);
tree.insertNewNode(6);

tree.print();
console.log(tree)