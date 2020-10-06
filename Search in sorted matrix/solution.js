function searchInSortedMatrix(matrix, target) {
  // Write your code here.	
	var rows = matrix.length
	var columns = matrix[0].length
	var currentRow = 0
	var currentColumn = columns - 1
	
	while(currentRow < rows && currentColumn >= 0) {
		var currentVal = matrix[currentRow][currentColumn]
		
		if(currentVal < target) {
			currentRow++
		} else if(currentVal > target) {
			currentColumn--
		} else {
			return [currentRow, currentColumn]
		}
	}
	
	return [-1, -1]
}

// Do not edit the line below.
exports.searchInSortedMatrix = searchInSortedMatrix;
