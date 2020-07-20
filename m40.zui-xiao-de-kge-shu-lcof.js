/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    if (k === arr.length) return arr;
    if (k < 1) return [];

    let heap = new BinaryHeap();

    for (let i = 0; i < k; i++) {
        heap.push(arr[i]);
    }

    for (let i = k; i < arr.length; i ++) {
        if (arr[i] < heap.findMax()) {
            heap.pop();
            heap.push(arr[i]);
        }
    }

    let result = [];
    while (!heap.isEmpty()) {
        result.push(heap.pop());
    }

    return result;
};

// Binary Heap implement
class BinaryHeap {
    constructor() {
        this.heap = [];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    parentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    childIndex(i, j) {
        return 2 * i + j + 1;
    }

    insert(k) {
        this.heap.push(k);
        this.heapifyUp(this.heap.length - 1);
    }

    delete(i) {
        const lastValue = this.heap.pop();
        if (!this.isEmpty()) {
            this.heap[i] = lastValue;
            this.heapifyDown(i);
        }
    }

    push(k) {
        this.insert(k);
    }

    pop() {
        const value = this.heap[0];
        this.delete(0);
        return value;
    }

    heapifyUp(i) {
        const temp = this.heap[i];
        let parentIndex = this.parentIndex(i);
        while (i >= 0 && temp > this.heap[parentIndex]) {
            this.heap[i] = this.heap[parentIndex];
            i = parentIndex;
            parentIndex = this.parentIndex(i);
        }
        this.heap[i] = temp;
    }

    heapifyDown(i) {
        const temp = this.heap[i];
        let maxChild = this.maxChild(i);
        while (i < this.heap.length && temp < this.heap[maxChild]) {
            this.heap[i] = this.heap[maxChild];
            i = maxChild;
            maxChild = this.maxChild(i);
        }
        this.heap[i] = temp;
    }

    maxChild(i) {
        const leftChild = this.heap[this.childIndex(i, 0)];
        const rightChild = this.heap[this.childIndex(i, 1)];
        return leftChild > rightChild ? this.childIndex(i, 0) : this.childIndex(i, 1);
    }

    findMax() {
        return this.heap[0];
    }

    printHeap() {
        console.log(this.heap);
    }
}

console.log(getLeastNumbers([3, 2, 1], 2));

var getLeastNumbers_first = function(arr, k) {
    return arr.sort((a, b) => a - b).slice(0, k);
};


/*let maxHeap = new BinaryHeap();
maxHeap.insert(10);
maxHeap.insert(4);
maxHeap.insert(9);
maxHeap.insert(1);
maxHeap.insert(7);
maxHeap.insert(5);
maxHeap.insert(3);

maxHeap.printHeap();

maxHeap.delete(5);
maxHeap.printHeap();
maxHeap.delete(2);
maxHeap.printHeap();
maxHeap.delete(0);
maxHeap.printHeap();
while (!maxHeap.isEmpty()) {
    console.log(maxHeap.pop());
}*/
