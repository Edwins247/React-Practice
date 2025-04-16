import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(1);

  const add = () => setNumber((number) => number + 1);
  const subtract = () => setNumber((number) => number - 1);
  const multiplyBy2 = () => setNumber((number) => number * 2);

  const multiplyBy2AndAddBy1 = () => {
    multiplyBy2();
    add();
  };

  // 실제 연산 과정은 아래와 같이 처리되기에 *2 + 1에서는 +1이 된 결과만 나옴
  Object.assign({number, number: number * 2, number: number + 1});
  
  return (
    <div>
      <h1>Number : {number}</h1>
      <div>
        <button onClick={add}>+ 1</button>
        <button onClick={subtract}>- 1</button>
        <button onClick={multiplyBy2}>*2</button>
        <button onClick={multiplyBy2AndAddBy1}>*2 + 1</button>
      </div>
    </div>
  );
}
