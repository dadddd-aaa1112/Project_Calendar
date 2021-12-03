import createCalendar from './calendar.js'

import titleMonth from './titleMonth.js'
import forward from './forwardNextPrew.js'
import diffDate from './diffDate.js'

let month = new Date().getMonth()
let year = new Date().getFullYear()

newMonYear()

forward(year, month)

createCalendar('#calendar1', year, month - 1)
createCalendar('#calendar2', year, month)
createCalendar('#calendar3', year, month + 1)

titleMonth('#title1', year, month - 1)
titleMonth('#title2', year, month)
titleMonth('#title3', year, month + 1)

diffDate()

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
