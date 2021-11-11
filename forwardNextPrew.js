import createCalendar from './calendar.js'
import titleMonth from './titleMonth.js'
import diffDate from './diffDate.js'
let calendar1 = document.querySelector('#calendar1')
let calendar2 = document.querySelector('#calendar2')
let calendar3 = document.querySelector('#calendar3')

export default function (year, month) {
	let next = document.querySelector('#next')
	let prev = document.querySelector('#prev')

	prev.addEventListener('click', (event) => {
		event.preventDefault()
		newMonYear()
		calendar1.innerHTML = ''
		calendar2.innerHTML = ''
		calendar3.innerHTML = ''
		createCalendar('#calendar1', year, month - 2)
		createCalendar('#calendar2', year, month - 1)
		createCalendar('#calendar3', year, month)

		titleMonth('#title1', year, month - 2)
		titleMonth('#title2', year, month - 1)
		titleMonth('#title3', year, month)
		diffDate()

		return month--
	})

	next.addEventListener('click', (event) => {
		event.preventDefault()
		newMonYear()
		calendar1.innerHTML = ''
		calendar2.innerHTML = ''
		calendar3.innerHTML = ''

		createCalendar('#calendar1', year, month)
		createCalendar('#calendar2', year, month + 1)
		createCalendar('#calendar3', year, month + 2)

		titleMonth('#title1', year, month)
		titleMonth('#title2', year, month + 1)
		titleMonth('#title3', year, month + 2)
		diffDate()

		return month++
	})

	function newMonYear() {
		if (month == -1) {
			month = 11
			year--
		} else if (month == 12) {
			month = 0
			year++
		} else if (month == -2) {
			month = 10
			year--
		} else if (month == 13) {
			month = 1
			year++
		}
		return month
		return year
	}
}
