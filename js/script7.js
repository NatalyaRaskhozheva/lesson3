const numberMonth = parseInt(prompt('Введіть номер місяця', '0'))
let season 

if((numberMonth <= 0) || (numberMonth > 12)) {
	season = 'Некоректні дані'
}
	else if ((numberMonth <= 2) || (numberMonth == 12)) {
		season = 'Зима'
	}
		else if ((numberMonth >= 3) && (numberMonth < 6)){
			season = 'Весна'
		}
		else if ((numberMonth >= 6) && (numberMonth < 9)){
			season = 'Літо'
		}
		else season = 'Осінь'
document.write(`${season}`)