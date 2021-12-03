export default function (selector, year, month) {
	let parent = document.querySelector(selector)
	createTable(parent)
	addNum(year, month)
	activeDay()

	function createTable(elem) {
		let tbl = document.createElement('table')
		tbl.innerHTML =
			'<tr> <th>пн</th> <th>вт</th> <th>ср</th> <th>чт</th> <th>пт</th> <th>сб</th> <th>вс</th> </tr>'
		for (let i = 0; i < 6; i++) {
			let tr = document.createElement('tr')
			for (let i = 0; i < 7; i++) {
				let td = document.createElement('td')
				tr.appendChild(td)
			}
			tbl.appendChild(tr)
		}
		elem.appendChild(tbl)
	}

	function addNum(year, month) {
		let dayCount = new Date(year, month + 1, 0).getDate()
		let k = 1
		let firstDay = new Date(year, month, 0).getDay()
		let tds = parent.querySelectorAll('td')

		for (let i = 0; i < dayCount + firstDay; i++) {
			if (i < firstDay) {
				tds[i].innerHTML = ''
			} else {
				tds[i].setAttribute('data-month', month)
				tds[i].setAttribute('data-year', year)
				tds[i].innerHTML = k++
			}
		}
	}

	function activeDay() {
		let tds = parent.querySelectorAll('td')

		tds.forEach((elem) => {
			let day_3 = new Date()
			if (
				elem.innerHTML == new Date().getDate() &&
				month == new Date().getMonth() &&
				year == new Date().getFullYear()
			) {
				elem.classList.add('active')
			}
		})
	}
}
