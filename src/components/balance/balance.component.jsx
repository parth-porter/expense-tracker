import './balance-component-styles.css'

const Balance = (props) => {

    const {allItems} = props;

    let totalBalance = 0.00;
    let totalIncome = 0.00;
    let totalExpenses = 0.00;

    const safeAdd = (val1, val2) => {
        return parseFloat(parseFloat((val1*100 + val2*100) / 100).toFixed(2))
    }

    const safeSubtract = (val1, val2) => {
        return parseFloat(parseFloat((val1*100 - val2*100) / 100).toFixed(2))
    }

    allItems.forEach((item) => {
        if(item.amount >= 0){
            
            totalIncome = safeAdd(totalIncome, item.amount)
        }
        else{
            totalExpenses = safeSubtract(totalExpenses, item.amount);
        }
        totalBalance = safeAdd(totalBalance, item.amount);
    });

    console.log({totalBalance, totalExpenses, totalIncome})

    return(
        <div className="balance-component">
            <div className="balance-total">
                <div className='balance-total-content'>
                <p>YOUR BALANCE</p>
                <h1 id="balance-amount-display">{`$${totalBalance}`}</h1>

                </div>
                
            </div>
            <div className="balance-combined">
                <div className='balance-combined-inner-white'>
                <div className="balance-combined-income">
                    <p>INCOME</p>
                    <p className='income-amount'>{`$${totalIncome}`}</p>
                </div>
                <div className="balance-combined-expenses">
                    <p>EXPENSES</p>
                    <p className='expense-amount'>{`$${totalExpenses}`}</p>
                </div>

                </div>
                
            </div>
        </div>
    )
}

export default Balance;