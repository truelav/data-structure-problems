// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4


/**
 * @param {number} capacity
 */
// class Node{
//     constructor(key, val){
//         this.value = val;
//         this.key = key;
//         this.prev = null;
//         this.next = null;
//     }
// }


// var LRUCache = function(capacity) {
//     this.capacity = capacity;
//     this.currentCapacity = 0;
//     this.head = null;
//     this.tail = null;
//     this.cache = new Map();
    
// };

// LRUCache.prototype.moveToHead = function(key){
//     let temp = this.cache.get(key);
//     if(temp.prev !== undefined){
//         let tempPrev = temp.prev;
//     } 
//     if(temp.next !== undefined){
//         let tempNext = temp.next;
//     }
//     let tempHead = this.head;
//     this.head = temp;
//     temp.next = tempHead;
// }

// LRUCache.prototype.addAtHead = function(key, val){
//     let newNode = new Node(key, val)
//     // console.log(this.cache, 'cache')
//     this.cache.set(key, newNode)
//     let temp = this.cache.get(key);
//     let tempHead = this.head;
//     this.head = temp;
//     this.head.next = tempHead;
//     if (this.currentCapacity === 0){
//         this.tail = temp;
//     }
//     this.currentCapacity++
// }

// LRUCache.prototype.atCapacity = function(){
//     return (this.capacity === this.currentCapacity) ? true : false;
// }

// LRUCache.prototype.removeAtTail = function(){
//     this.cache.delete(this.tail.key)
//     let temp = this.tail.prev;
//     temp.next = this.tail;
//     this.tail = temp;
//     this.currentCapacity--
// }

// LRUCache.prototype.get = function(key) {
//     // console.log(this.cache.get(key).value)
//     // console.log(this.currentCapacity)
//     if (!this.cache.get(key)){
//         return -1
//     }  else {
//         return this.cache.get(key).value;
//     }

// };


// LRUCache.prototype.put = function(key, value) {
    
//     if (this.atCapacity() && !this.cache.get(key)){
//         this.removeAtTail(); 
//         this.addAtHead(key, value)
//     } else if (this.atCapacity() && this.cache.get(key)) {
//         this.moveToHead(key)
//     } else {
//         this.addAtHead(key, value)
//     }

// };

class LRUCache {
    constructor(capacity) {
      this.cache = new Map();
      this.capacity = capacity;
    }
  
    get(key) {
      if (!this.cache.has(key)) return -1;
  
      const v = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, v);
      return this.cache.get(key);
    };
  
    put(key, value) {
      if (this.cache.has(key)) {
        this.cache.delete(key);
      }
      this.cache.set(key, value);
      if (this.cache.size > this.capacity) {
        this.cache.delete(this.cache.keys().next().value);  // keys().next().value returns first item's key
      }
    };
  }
  
  
  /** 
   * Your LRUCache object will be instantiated and called as such:
   * var obj = new LRUCache(capacity)
   * var param_1 = obj.get(key)
   * obj.put(key,value)
   */