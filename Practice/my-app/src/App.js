import React, { useEffect, useState } from "react";
import datas from "./data/cards";
import BusinessCard from "./components/BusinessCard";

// 추첨하기 버튼과 명함 컴포넌트를 구현
export default function App() {
  const [cards, setCards] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);

  // 추첨하기 버튼을 누르면, 랜덤하게 하나의 명함을 고른다.
  function draw() {

    if (pickedCards.length > 2) {
      const names = pickedCards.reduce((acc, cur) => {
        return acc = acc.concat(`${cur.name}, `)
      }, "")
      alert(`당첨자는 ${names}입니다.`);
      return;
    }

    const randomIdx = Math.floor(Math.random() * cards.length);
    const randomItem = cards[randomIdx];

    // 중복 제거
    setCards(cards.filter(c => c.phoneNumber !== randomItem.phoneNumber));
    // 당첨자(array) 관리
    setPickedCards([...pickedCards, randomItem]);
  }

  useEffect(() => {
    setCards(datas);
  }, []);

  const result = pickedCards.map((pickedCard) => (<BusinessCard info={pickedCard} key={pickedCard.phoneNumber}/>));

  return (
  <div>
    {cards.length > 0 && <button onClick={draw}>추첨하기</button>}
    {/* {pickedCards.length > 0 && (<BusinessCard info={pickedCards[pickedCards.length - 1]} />)} */}
    {pickedCards.length > 0 && result}
  </div>
  );

}