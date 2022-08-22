function getFieldAmountById(elementId) {
  const amountFieldElement = document.getElementById(elementId);
	const amountFieldString = amountFieldElement.value;
	const amountFieldBalance = parseInt(amountFieldString);


  return amountFieldBalance;


}

function getTextAmountById(elementId) {
    const textAmountElement = document.getElementById(elementId);

		const textAmountString = textAmountElement.innerText;
		const textAmountBalance = parseInt(textAmountString);

    // textAmountElement.value = ''; 

    return textAmountBalance;

    
      

}
function setElementValueById (elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;

}




document.getElementById('calculate-btn').addEventListener('click', function () {

const perPlayerAmount =  getFieldAmountById("playerFieldAmount");


 const expensesAmount = getTextAmountById("expensesAmount"); 
 const previousExpensesAmount = perPlayerAmount + expensesAmount;
setElementValueById('expensesAmount', previousExpensesAmount);
 const calculateExpenseBalance = previousExpensesAmount * 5;
setElementValueById('expensesAmount', calculateExpenseBalance);

})

document.getElementById('total-calculate-btn').addEventListener('click', function() {
const managerAmount = getFieldAmountById('managerFieldAmount');
const coachAmount = getFieldAmountById('coachFieldAmount');
 const previousTotalAmount = getTextAmountById('totalAmount'); 
 const expensesAmount = getTextAmountById('expensesAmount'); 


 const updateTotalAmount =	managerAmount + coachAmount + previousTotalAmount + expensesAmount;

setElementValueById('totalAmount', updateTotalAmount);


})