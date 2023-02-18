const category = prompt('Введіть категорію транспортного засобу')
let result 

if (category === 'A') {
	result = 'Мотоцикл'
}
else if (category === 'B') {
	result = 'Легковий автомобіль'
}
else if (category === 'C') {
	result = 'Вантажний автомобіль'
}
else result = 'Дані некоректні'

document.write(`${result}`)