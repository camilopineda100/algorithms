function minHeightBst(array) {
  // Write your code here.	
	var len = array.length
	
	if(len === 1) {
		return new BST(array[0])
	}
	
	var middleIdx = parseInt(len/2)
	var root = new BST(array[middleIdx])
	
	var leftRoot = minHeightBst(array.slice(0, middleIdx))
	root.left = leftRoot
	
	if(len > 2) {
		var rightRoot = minHeightBst(array.slice(middleIdx + 1, len))
		root.right = rightRoot	
	}
	
	return root
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// Do not edit the line below.
exports.minHeightBst = minHeightBst;
