let productArray = [];

function display(productArray) {
	// let totalPrice = 0;

	// console.log((productArray))

	const mainField = document.getElementById('products-cart');

	// mainField.innerText =  "";
	for (let i = 0; i < productArray.length; i++) {
		const name = productArray[i].productName;
		// console.log(name);
		// const price = productArray[i].productPrice;
		// totalPrice = totalPrice + price;
		// <td>${price}</td>;
		const tr = document.createElement('tr');
		tr.innerHTML = `
    
		      <th>${i + 1}</th>
          <td>${name}</td>
         
    
    
    
    
    `;
		mainField.appendChild(tr);


    
	}

	// const tr = document.createElement('tr');
	// tr.innerHTML = `
	//          <th></th>
	//         <td>Total</td>
	//         <td>${totalPrice}</td>

	// `;
	// mainField.appendChild(tr);
}
function addToCart(element) {
	// console.log(element);
	// console.log(element.parentNode)
	// console.log(element.parentNode.parentNode)
	// console.log(element.parentNode.parentNode.children[0].innerText);
	// console.log(element.parentNode.parentNode.children[1].children[0].innerText);
	const productName = element.parentNode.parentNode.children[0].innerText;

	// const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;

	const productObj = {
		productName: productName,
		// productPrice: parseInt(productPrice),
	};
	productArray.push(productObj);
	// console.log(productArray);

	// document.getElementById('total-products').innerText = productArray.length;
	display(productArray);
}
