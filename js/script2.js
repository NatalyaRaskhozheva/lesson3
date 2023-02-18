let price = parseFloat(prompt('Введіть ціну на товар', '0'))
let amountOfMoney = parseFloat(prompt('Введіть кількість грошей', '0'))

if ((amountOfMoney > price) || (amountOfMoney === price)) {
	document.write(`Грошей вистачає! Можете придбати товар!`)
	if( amountOfMoney - price >= 4){
		document.write(`У вас вистачає грошей на лоторейку за 4 грн! Купите?`)
	}
}
else if (amountOfMoney < price) {
	document.write(`Не вистачає грошей!`)
}10