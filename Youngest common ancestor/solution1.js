// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
	const arrayAncestorsOne = []
	const arrayAncestorsTwo = []
	
	// the top ancestor is not stored in ancestors array
	while(descendantOne.name !== topAncestor.name) {
		arrayAncestorsOne.push(descendantOne)
		descendantOne = descendantOne.ancestor
	}
	
	// the top ancestor is not stored in ancestors array
	while(descendantTwo.name !== topAncestor.name) {
		arrayAncestorsTwo.push(descendantTwo)
		descendantTwo = descendantTwo.ancestor
	}
	
	// compare anscestors
	if(arrayAncestorsOne.length == 0 || arrayAncestorsTwo.length == 0) {
		return topAncestor;
	}
		
	for(let i = 1; i <= arrayAncestorsOne.length; i++) {
		const posA = arrayAncestorsOne.length - i
		const posB = arrayAncestorsTwo.length - i
		
		if(arrayAncestorsOne[posA] !== arrayAncestorsTwo[posB]) {
			return topAncestor
		}
		
		if(arrayAncestorsOne[posA - 1] !== arrayAncestorsTwo[posB - 1]) {
			return arrayAncestorsOne[posA]
		}
	}
}

// Do not edit the lines below.
exports.AncestralTree = AncestralTree;
exports.getYoungestCommonAncestor = getYoungestCommonAncestor;
