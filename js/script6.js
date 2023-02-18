const numberDay = parseInt(prompt('Введіть номер тижня', '0'))
let day

if((numberDay <= 0) || (numberDay > 7)){
	day = "Некоректні дані"
}
else if (numberDay == 1) {
	day = "Понеділок"
}
else if (numberDay == 2) {
	day = "Вівторок"
}
else if (numberDay == 3) {
	day = "Середа"
}
else if (numberDay == 4) {
	day = "Четвер"
}
else if (numberDay == 5) {
	day = "П'ятниця"
}
else if (numberDay == 6) {
	day = "Субота"
}
else day = "Неділя"

document.write(`${day}`)