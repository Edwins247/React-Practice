import React, { useRef } from "react";

export default function UnControlledForm() {

  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    alert(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>닉네임 : </label>
      <input
        type="text"
        name="nickname"
        ref={inputRef}
      />
      <input type="submit" value="제출" />
    </form>
  );
}
