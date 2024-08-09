
import AnimatedCounter from '../constants/AnimatedCounter'
import DoughnutChart from './DoughnutChart'

const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance
}) => {
  return (
   <section className='total-balance'>
    <div className='total-balace-chart'>
        <DoughnutChart accounts={accounts} />
    </div>
    <div className='flex flex-col gap-6'>
        <h2 className='header-2'>
        Bank Accounts: {totalBanks} 
        </h2>
        <div className='flex flex-col'>
            <p className='total-balance-label'>
                Total current Balance
            </p>
            <div className='total-balance-amount flex-center gap-2'>
                <AnimatedCounter amount={totalCurrentBalance} />
                
            </div>
        </div>
    </div>
   </section>
  )
}

export default TotalBalanceBox
