import { useState } from 'react';
import './App.css';
import Queue from './queue';

const queue = new Queue();

 const App = () =>  {

  const [message, setMessage] = useState([]);
  const [inputNum, setinputNum] = useState(0);
  
  const changeHandler = (event) => {
    setinputNum(event.target.value);
  }

  const enqueue = (num) =>{
    queue.enqueue(num);
    
    if (queue.length() === 0) {
      setMessage(`The queue is empty!`);
    }
    else
    {
      setMessage(`Inside the queue: ${queue.displayQueue()}`);
    }
  }

  const dequeue = () => {
    queue.dequeue();

    if (queue.length() === 0) {
      setMessage(`The queue is empty!`);
    }
    else
    {
      setMessage(`Inside the queue: ${queue.displayQueue()}`);
    }
  }

  const peekAtQueue = () => {
    queue.peek();

    if (queue.length() === 0) {
      setMessage(`The queue is empty!`);
    }
    else
    {
      setMessage(`Peeking at the queue: ${queue.peek()}`);
    }    
  }

  const sizeOfQueue = () => {
    queue.length();
    setMessage(`Size of the queue: ${queue.length()}`);
  }

  const isQueueEmpty = () => {
    queue.isEmpty();
    setMessage(`is queue is Empty: ${queue.isEmpty()}`);
  }

  const clickHandler = (event) => {
    event.preventDefault();

    switch (event.target.id) {
      case "add": enqueue(inputNum);       
        break;

      case "remove": dequeue();       
        break;

      case "peek": peekAtQueue();       
        break;

      case "size": sizeOfQueue();       
        break;

      case "isEmpty": isQueueEmpty();       
        break;

      default:
        break;
    } 
  }

  return (
    <div>          
        <div className='input'>
          <h1>Queue Algorithm</h1>
          <h3>Enter A number</h3>
          <input type="text" name="newNumber" onChange={changeHandler}></input>
        </div> 
        <div className='buttons'>
        <button onClick={clickHandler} id="add">add number to queue</button>
        <button onClick={clickHandler} id="remove">remove number from queue</button>
        <button onClick={clickHandler} id="peek">peek at first number of queue</button>
        <button onClick={clickHandler} id="isEmpty">check if queue is empty</button>
        <button onClick={clickHandler} id="size">check queue size</button>
        </div>                          
        <h2>{message}</h2>         
      </div >
  );
}   

export default App;