const nameFirstChild = prompt('Як звати першу дитину')
const nameSecondChild = prompt('Як звати другу дитину')

let amountSweetsFirst = parseInt(prompt('Скільки цукерок у першої дитини?', '0'))
let amountSweetsSecond = parseInt(prompt('Скільки цукерок у другої дитини?', '0'))

let maxSweets

if (amountSweetsFirst < amountSweetsSecond) {
	maxSweets = amountSweetsSecond
	document.write(`У ${nameSecondChild} цукерок більше, ${maxSweets}`)
}
else if (amountSweetsFirst > amountSweetsSecond) {
	maxSweets = amountSweetsFirst
	document.write(`У ${nameFirstChild} цукерок більше, ${maxSweets}`)
}
else 
	document.write(`Однакова кількість цукерок у дітей`)


