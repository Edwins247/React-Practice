import React, { useState } from "react";

const Banner = () => {
  const [visible, setVisible] = useState(true);

  const getCoupon = () => {
    alert("10% 할인 쿠폰을 받았습니다.");
  };
  const closeBanner = (e) => {
    e.stopPropagation(); // 클릭 이벤트 전파 방지(버블링 방지)
    setVisible(false);
  };

  return visible ? (
    <div
      style={{
        backgroundColor: "orange",
        fontWeight: "bold",
        height: "50px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      onClick={getCoupon}
    >
      이 곳을 클릭해서 쿠폰을 받아가세요.
      <button onClick={closeBanner}>닫기</button>
    </div>
  ) : null;
};

export default Banner;
