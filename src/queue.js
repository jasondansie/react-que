class Queue {
    constructor() {
      this.elements =  [];
    }

    enqueue(element) {
      this.elements.push(element);
    }

    dequeue() {
      if (!this.isEmpty()) {
        this.elements.shift();
      }
    }

    peek() {
      return this.elements[0];
    }

    length() {
      return this.elements.length;
    }

    isEmpty() {
      return this.elements.length === 0;
    }

    displayQueue = () => {
        let queue = "";
        for (let i = 0; i < this.length(); i++) {
            if (i === 0) {
                queue += this.elements[i];
            } 
            else
            {
                queue += ", " + this.elements[i];
            }             
        }
        return queue;
    }
}

  export default Queue