export default function () {
	let num1 = document.querySelector('#num1')
	active()

	function active() {
		let tds = document.querySelectorAll('td')
		tds.forEach((elem) => {
			elem.addEventListener('click', () => {
				elem.classList.add('active2')

				let activeTd = document.querySelectorAll('.active2')

				if (activeTd.length == 2) {
					removeActive3()
					let day_1 = activeTd[0]
					let day_2 = activeTd[1]

					let diff = Math.abs(
						(addDatt(day_2) - addDatt(day_1)) / (60 * 60 * 24 * 1000)
					)
					num1.value = diff

					removeActive2()
				} else if (activeTd.length == 1) {
					num1.value = ''

					let day_1 = activeTd[0]
					lengthOne(day_1, tds)
				}
			})
		})
	}

	function addDatt(elem) {
		return new Date(
			elem.getAttribute('data-year'),
			elem.getAttribute('data-month'),
			elem.innerHTML
		)
	}

	function removeActive3() {
		let activeTd2 = document.querySelectorAll('.active3')

		activeTd2.forEach((elem2, i) => {
			elem2.classList.remove('active3')
		})
	}

	function removeActive2() {
		let activeTd2 = document.querySelectorAll('.active2')

		activeTd2.forEach((elem2, i) => {
			elem2.classList.remove('active2')
		})
	}

	function lengthOne(day_1, tds) {
		removeActive3()
		num1.addEventListener('blur', () => {
			let day_2 = 24 * 60 * 60 * 1000 * num1.value
			let currentDate = addDatt(day_1)
			currentDate.setTime(currentDate.getTime() - day_2)

			tds.forEach((elem2) => {
				if (
					elem2.getAttribute('data-year') == currentDate.getFullYear() &&
					elem2.getAttribute('data-month') == currentDate.getMonth() &&
					elem2.innerHTML == currentDate.getDate()
				) {
					elem2.classList.add('active3')

					num1.value = ''

					removeActive2()
				}
			})
		})
	}
}
