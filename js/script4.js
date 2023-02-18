let age = parseInt(prompt('Введіть вік людини', '0'))
let result = 'input'

if ((age < 0) || (age > 100)) {
	document.write(`Некоректний вік!`)
}
else if ((age >= 0) && (age < 7)) {
	result = 'дитина у садочку'
}
else if ((age >= 7) && (age < 18)){
	result = 'школяр'
}
else if ((age >= 18) && (age < 25)){
	result = 'студент'
}
else if ((age > 25) && (age < 65)){
	result = 'робітник'
}
else {
	result = 'пенсіонер'
}

document.write(`Це ${result}`)