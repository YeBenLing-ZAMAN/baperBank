
// deposit amount section

document.getElementById('deposit-button').addEventListener('click', function (event) {
    event.preventDefault();
    console.log("deposit-button clicked"); // checking value

    const depositInput = document.getElementById('deposit-amount');
    const depositAmount = depositInput.value;

    // deposit section
    const previousAmountDeposit = document.getElementById('total-deposit')
    const AmountDeposit = previousAmountDeposit.innerText;
    const totalDeposit = parseInt(AmountDeposit) + parseInt(depositAmount);
    previousAmountDeposit.innerText = totalDeposit;

    // balance seciton 

    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const newBalanceTotal = parseInt(balanceTotalText) + parseInt(depositAmount) ;
    balanceTotal.innerText = newBalanceTotal;



    // clear input feild 
    depositInput.value = '';
})



// withdraw amount section 

document.getElementById('withdraw-button').addEventListener('click', function (event) {
    event.preventDefault();
    console.log("withdraw-button clicked"); // checking amount

    const withdrawInput = document.getElementById('withdraw-amount');
    const withdrawAmount = withdrawInput.value;
    
    // withdraw section 
    const previousAmountWithdraw = document.getElementById('total-withdraw');
    const previousAmountWithdrawText = previousAmountWithdraw.innerText;
    const totalWithdraw =  parseInt(previousAmountWithdrawText) - parseInt(withdrawAmount);
    console.log(totalWithdraw, typeof totalWithdraw);
    previousAmountWithdraw.innerText = totalWithdraw; 

    // balance withdraw section 

    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const newBalanceTotal = parseInt(balanceTotalText) - parseInt(withdrawAmount) ;
    balanceTotal.innerText = newBalanceTotal;



    // clear withdraw field 
    withdrawInput.value = '';
})
