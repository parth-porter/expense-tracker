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
            <ul>
                <li>{`Balance: $${totalBalance}`}</li>
                <li>{`Income: $${totalIncome}`}</li>
                <li>{`Expenses: $${totalExpenses}`}</li>
            </ul>
        </div>
    )
}

export default Balance;