
import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";

function TotalBalanceBox({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>
        <DoughnutChart accounts={accounts} />
        </div>
      <div className='flex flex-col gap-6'>
        <div className='header-2'>Bank Accounts: {totalBanks}</div>
        <div className='flex flex-col gap-2'>
          <p className='total-balance-label'>Total Current Balance:</p>
          <p className='total-balance-amount'>
            <AnimatedCounter amount={totalCurrentBalance} />
          </p>
        </div>
      </div>
    </section>
  );
}

export default TotalBalanceBox;
