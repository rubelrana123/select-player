//funtion for: get Element by id function
function getTheElement(elementId) {
	const element = document.getElementById(elementId);
	return element;
}
//get value element by Id
function getFieldAmountById(elementId) {
	const amountFieldElement = document.getElementById(elementId);
	const amountFieldString = amountFieldElement.value;
	const amountFieldBalance = parseInt(amountFieldString);

	return amountFieldBalance;
}

//get text element value
function getTextAmountById(elementId) {
	const textAmountElement = document.getElementById(elementId);

	const textAmountString = textAmountElement.innerText;
	const textAmountBalance = parseInt(textAmountString);
	return textAmountBalance;
}

//set vallue
function setElementValueById(elementId, value) {
	const element = document.getElementById(elementId);
	element.innerText = value;
}
