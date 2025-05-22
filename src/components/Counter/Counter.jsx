import React, { useState } from 'react';

const Counter = () => {
 const [count, setCount] = useState(5);
 return (
  <div className='text-center p-4'>
   <p className='text-center bg-blue-500 p-4 text-xl'>Counts: {count}</p>
  <button onClick={() => setCount(count + 1)} className='bg-green-700 text-xl text-center'>Click</button>
  </div>
 );
};

export default Counter;