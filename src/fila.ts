//Creates a queue
export function create(size = 10) {
    return [...new Array(size)];
}

//Puts a value in a queue
export function enqueue(queue: any[], value: any) {
    const emptyIndex = queue.indexOf(undefined);
    if (emptyIndex === -1) {
      console.log("Fila cheia");
      return queue;
    }
  
    queue[emptyIndex] = value;
    return queue;
}

//Removes a value from a queue
export function dequeue(queue: any[]) {
    if (queue[0] === undefined) {
      console.log("Fila vazia");
      return queue;
    }
  
    const firstValue = queue[0];
  
    for (let i = 0; i < queue.length - 1; i++) {
      queue[i] = queue[i + 1];
    }
    
    queue[queue.length - 1] = undefined;

  
    return firstValue;
}
  
//Returns the first value from a queue
export function peek(queue: any[]) {
    return queue[0];
}

//Returns a boolean value that indicates whether the queue is empty
export function isEmpty(queue: any[]) {
    return queue[0] === undefined;
}

//Returns a boolean value that indicates whether the queue is full
export function isFull(queue: any[]) {
    return queue[queue.length - 1] !== undefined;
}

//Clears the queue
export function clear(queue: any[]) {
    return create();
}

//Return the size of the queue disregarding the empty spaces
export function size(queue: any[]) {
    return queue.filter((value) => value !== undefined).length;
}