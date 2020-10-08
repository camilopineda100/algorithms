function longestPeak(array) {
  // Write your code here.
	
	var increased = false
	var decreased = false
	var longestPeak = 0
	
	var lastValue = array[0]
	var currentLength = 1
	for( var i = 1; i < array.length; i++) {
		var currentValue = array[i] 
		
		if(currentValue > lastValue && !decreased) {
			increased = true
			currentLength++
		}
		
		if(currentValue > lastValue && decreased) {
			increased = true
			decreased = false
			currentLength = 2
		}
		
		if(currentValue < lastValue && increased) {
			decreased = true
			currentLength++
		}
		
		if(currentValue < lastValue && !increased) {
			currentLength = 1
		}
		
		if(currentValue == lastValue) {
			
			increased = false
			decreased = false
		
			currentLength = 1
		}	
		
		if(increased && decreased) {
			if(currentLength > longestPeak) {
				longestPeak = currentLength
			}
		}
		
		lastValue = currentValue
	}
	
	return longestPeak
}

// Do not edit the line below.
exports.longestPeak = longestPeak;
