import React, { useState } from "react";
import { useRouter } from "next/router";
import BottomButton from "../src/components/BottomButton";
import RadioGroup from "../src/components/RadioGroup";
import Radio from "../src/components/Radio";

export default function accessoryChoice() {
  const router = useRouter();
  const [selectedAccessory, setSelectedAccessory] = useState("");

  // const onChangeHandler = (e) => {
  //   setSelectedAccessory(e.target.value);
  // };

  console.log(selectedAccessory);

  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="title">
          모니터와 키보드 중 원하는 악세서리를 선택해주세요.
        </h3>
      </div>

      {/* <label>
        <input
          type="radio"
          name="accessory"
          id="accessory"
          value="monitor"
          onChange={onChangeHandler}
        />
        monitor
      </label>
      <label>
        <input
          type="radio"
          name="accessory"
          id="accessory"
          value="keyboard"
          onChange={onChangeHandler}
        />
        keyboard
      </label> */}

      <RadioGroup name="accessory" onChange={(state) => setSelectedAccessory(state)}>
        <Radio id="monitor" name="accessory" value="monitor" label="monitor" />
        <Radio
          id="keyboard"
          name="accessory"
          value="keyboard"
          label="keyboard"
        />
      </RadioGroup>

      <BottomButton onClick={() => router.push("/complete")}>
        완료 화면으로 넘어가기
      </BottomButton>
    </div>
  );
}
