'use client';
import CountUp from "react-countup"



const AnimatedConter = ({ amount }: { amount: number}) => {
  return (
    <div className="w-full">
      <CountUp
      duration={2.85}
      decimals={2}
      decimal=","
      prefix="NGR"
       end={amount}
       />
    
    </div>
  )
}

export default AnimatedConter
