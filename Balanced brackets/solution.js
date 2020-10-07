
function isOpenBracket(string) {
	var openBrackets = ['[','{','(']
	return openBrackets.includes(string)
}

function isCloseBracket(string) {
	var closeBrackets = [']','}',')']
	return closeBrackets.includes(string)
}

function isMatchingBracket(close, open) {
	var bracketsMap = {
		'[': ']',
		'(': ')',
		'{': '}'
	}
	
	var closeMatch = bracketsMap[open]
	return closeMatch === close
}

function balancedBrackets(string) {
  // Write your code here.
	var len = string.length
	var stack = []
	
	for(var i = 0; i < len; i++){
		var char = string[i]
		if(isOpenBracket(char)) {
			stack.push(char)
		} 
		else if(isCloseBracket(char)) {
			var latestOpen = stack.pop()
			if(latestOpen) {
				if(!isMatchingBracket(char, latestOpen)) {
					return false
				}
			} else {
				return false
			}
		}
	}
	
	return stack.length === 0
}

// Do not edit the line below.
exports.balancedBrackets = balancedBrackets;
