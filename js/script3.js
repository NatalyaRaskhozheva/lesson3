const minNumber = 1
const maxNumber = 5

let inputNumber = parseInt(prompt('Введіть число від 1 до 5', '0'))
let numberRandom = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber)

if((inputNumber < minNumber) || (inputNumber > maxNumber)){
	document.write(`Введіть число від 1 до 5!`)
}
else if(inputNumber == numberRandom) {
		document.write(`Ви вгадали число!`)
	}
else if (inputNumber !== numberRandom) {
		let inputNumber = parseInt(prompt('Не вгадали! Введіть ще раз число від 1 до 5', '0'))
		if (inputNumber == numberRandom){
			document.write(`Ви вгадали число!`)
		}
		else {
			document.write(`Ви не вгадали число знову! Загадане число було ${numberRandom}`)
		}
}
	




