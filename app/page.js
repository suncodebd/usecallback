"use client";

import Button from "@/components/button";
import ShowCount from "@/components/showCount";
import Title from "@/components/title";
import { useCallback, useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  return (
    <main className="flex  flex-col items-center justify-between p-5">
      <Title title="React hooks usemenu and UseCallBack" />
      <ShowCount count={count} title="Counter One Title" />
      <Button handleClick={incrementByOne}>Incremetn by one</Button>

      <ShowCount count={count2} title="counter Five Title" />
      <Button handleClick={incrementByFive}>Incremetn by Five</Button>
    </main>
  );
}

export default Home;
