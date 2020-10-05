function isPalindrome(string) {
	var len = string.length
	
	if(len == 1) {
		return true
	}
	
	for(var i = 0; i < parseInt(len/2); i++) {
		if(string[i] !== string[len - 1 - i]) {
			return false
		}
	}
	
	return true
}

function longestPalindromicSubstring(string) {
	var len = string.length
	if(len == 1) {
		return string
	}
	
	if(isPalindrome(string)) {
		return string
	}
	
	var rest = 1
	while(rest < len) {
		for(var i = 0; i <= rest; i++) {
			var subString = string.slice(i, len - rest + i)
			
			if(isPalindrome(subString)) {
				return subString
			}
		}
		
		rest++
	}
}

// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;
