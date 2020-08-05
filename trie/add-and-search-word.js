// Design a data structure that supports the following two operations:

// void addWord(word)
// bool search(word)
// search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

// Example:

// addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true
// Note:
// You may assume that all words are consist of lowercase letters a-z.


/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.root = {}
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    var curNode = this.root
    var len = word.length
    for(var i=0; i<len; i++) {
        if(!curNode[word[i]]) {
            curNode[word[i]] = {}
        }
        curNode = curNode[word[i]]
        if(i==len-1) {
            curNode.tail = true
        }
    }
//     let current = this.root;
    
//     for(let i = 0; i < word.length; i++){
//         if(!current[word[i]]){
//             current[word[i]] = {};
//             current = current[word[i]]
//         } else {
//             current = current[word[i]]
//         }
//     }
    
//     current.isWord = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    var len = word.length
    var cur = this.root
    var find = (n, i)=>{
        if(i==len && n.tail) return true
        var s = word[i]
        if(s=='.') {
            for(var key of Object.keys(n)) {
                if(find(n[key], i+1)){
                    return true
                }
            }
            return false
        }
        if(!n[s]) return false
        if(i==len-1) {
            return !!n[s].tail
        }
        return find(n[s], i+1)
    }

    return find(this.root, 0)
    
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */