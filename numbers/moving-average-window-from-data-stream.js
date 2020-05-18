// Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

// Example:

// MovingAverage m = new MovingAverage(3);
// m.next(1) = 1
// m.next(10) = (1 + 10) / 2
// m.next(3) = (1 + 10 + 3) / 3
// m.next(5) = (10 + 3 + 5) / 3

/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.stack = [];
    this.sum = 0;
    this.size = size;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    
    if (this.size > this.stack.length){
        this.stack.push(val)
        this.sum += val;
    } else if (this.size === this.stack.length){
        let current = this.stack.shift()
        this.sum -= current
        this.stack.push(val)
        this.sum += val
    }

    return this.sum / this.stack.length
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */