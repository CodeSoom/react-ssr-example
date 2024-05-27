import { useState } from 'react';

export const Counter = async () => {
  const [count, setState] = useState(0);

  const handleClick = () => {
    setState((value) => value + 1);
  }

  return (
    <>
      <h1>카운터</h1>

      <div>
        Count: {count}

        <button onClick={handleClick} type="button">클릭</button>
      </div>
    </>
  );
}