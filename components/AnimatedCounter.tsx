"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <span className="w-full">
      <CountUp decimal=',' prefix='$' end={amount} duration={.75} decimals={2} />
    </span>
  );
};

export default AnimatedCounter;
