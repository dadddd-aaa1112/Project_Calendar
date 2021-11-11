export default function (selector, year, month) {
	let title = document.querySelector(selector)

	let arr = [
		'Январь',
		'Февраль',
		'Март',
		'Апрель',
		'Май',
		'Июнь',
		'Июль',
		'Август',
		'Сентябрь',
		'Октябрь',
		'Ноябрь',
		'Декабрь',
	]

	newMonYear()
	title.innerHTML = arr[month] + ' ' + year.toString()

	function newMonYear() {
		if (month == -1) {
			month = 11
			year--
		} else if (month == -2) {
			month = 10
			year--
		} else if (month == 12) {
			month = 0
			year++
		} else if (month == 13) {
			month = 1
			year++
		}
		return month
		return year
	}
}
