document.getElementById('calculate-btn').addEventListener('click', function () {
	const perPlayerAmount = getFieldAmountById('playerFieldAmount');
	const playerValue = document.getElementById('playerFieldAmount').value;
	console.log(typeof perPlayerAmount);
	console.log(typeof playerValue);

	if (isNaN(playerValue) || perPlayerAmount < 0 || isNaN(perPlayerAmount)) {
		alert('Please input valid digits only!');
		//reset the field
		const playerValue = document.getElementById('playerFieldAmount');
		playerValue.value = '';
		return;
	}
	const playerList = getTheElement('playerList');
	const playerListItems = playerList.childNodes.length - 1;
	// console.log( typeof playerListItems);

	if (playerList.childNodes.length - 1 === 0) {
		alert('First you have to select players!');
		return;
	}

	const playerExpensesAmount = perPlayerAmount * playerListItems;

	setElementValueById('expensesAmount', playerExpensesAmount);
});

document
	.getElementById('total-calculate-btn')
	.addEventListener('click', function () {
		const managerAmount = getFieldAmountById('managerFieldAmount');
		const coachAmount = getFieldAmountById('coachFieldAmount');
		const previousTotalAmount = getTextAmountById('totalAmount');
		const expensesAmount = getTextAmountById('expensesAmount');

		const updateTotalAmount =
			managerAmount + coachAmount + previousTotalAmount + expensesAmount;

		setElementValueById('totalAmount', updateTotalAmount);
	});
