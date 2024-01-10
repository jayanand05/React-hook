import React, { useEffect, useRef } from "react";dedede

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      useRef
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default FocusInput;
