// Implement a trie with insert, search, and startsWith methods.

// Example:

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");   
// trie.search("app");     // returns true
// Note:

// You may assume that all inputs are consist of lowercase letters a-z.
// All inputs are guaranteed to be non-empty strings.


/**
 * Initialize your data structure here.
 */
function Trie() {
	const root = {};
	return { insert, search, startsWith };

	function insert(word) {
		let curr = root;
		word.split('').forEach(ch => curr = curr[ch] = curr[ch] || {});
		curr.isWord = true;
	}

	function traverse(word) {
		let curr = root;
		for (var i = 0; i < word.length; i++) {
			if (!curr) return null;
			curr = curr[word[i]];
		}
		return curr;
	}

	function search(word) {
		let node = traverse(word);
		return !!node && !!node.isWord;
	}

	function startsWith(word) {
		return !!traverse(word);
	}
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */