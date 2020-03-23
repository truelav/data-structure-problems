"use strict";

const LinkedList = require('../linked lists/LinkedList.js');
const Node = require('../node/Node.js');

module.exports = class Graph {
    constructor(vertices) {
        this.vertices = vertices;

        this.list = [];

        var it;
        for(it = 0; it < vertices; it++){
            let temp = new LinkedList();
            this.list.push(temp);
        }
    }
}