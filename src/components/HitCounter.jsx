"use client";
import { useState } from "react";

const HitCounter = ({ hits }) => {
  const [IsCensored, setIsCensored] = useState(false);

  return (
    <div className="hit-counter">
      <p>You are visitor number: </p>
      <button
        className={IsCensored ? "censored" : ""}
        onClick={() => setIsCensored(!IsCensored)}
      >
        {hits}
      </button>
    </div>
  );
};

export default HitCounter;
