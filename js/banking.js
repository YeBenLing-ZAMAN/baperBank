
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

