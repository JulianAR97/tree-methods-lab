function inOrder(currentNode) {
  if (currentNode.left) {
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if (currentNode.right) {
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, newNode) {
  if (newNode === rootNode) {
    return true
  }
  
  if (newNode.data < rootNode.data) {
    return rootNode.left === null ? rootNode.left = newNode : findOrAdd(rootNode.left, newNode)
  } else if (newNode.data > rootNode.data) {
    return rootNode.right === null ? rootNode.right = newNode : findOrAdd(rootNode.right, newNode)
  }
}

function max(rootNode) {
  if (rootNode.right === null) {
    return rootNode
  } else {
    return max(rootNode.right)
  }
}

function min(rootNode) {
  if (rootNode.left === null) {
    return rootNode
  } else {
    return min(rootNode.left)
  }
}