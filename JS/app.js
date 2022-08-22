const myArray = [];


function addedPlayerName (myArray){
	let playerList = document.getElementById('playerList');
	playerList .innerText =  "";
	for (let i = 0; i < myArray.length; i++) {
		const eachPlayerName = myArray[i].playerName;
		console.log(eachPlayerName);
		const li = document.createElement('li');
		li.innerHTML = `
             <li class="list-group-item   fs-3 d-flex justify-content-start gap-5 ">
             <span >${i+1}</span>
             <span>${eachPlayerName}</span>

         </li>
    
    
    `;

		playerList.appendChild(li);
	}
}
function addToCart(element) {
   const playerName =  element.parentNode.children[0].innerText;

   const playerNameObj = {
     playerName : playerName,
   }
   console.log(playerNameObj);
   myArray.push(playerNameObj);
   console.log(myArray)
   addedPlayerName(myArray);
  

}
// calculate section
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