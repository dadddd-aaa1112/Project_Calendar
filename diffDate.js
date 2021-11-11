export default function () {
	let num1 = document.querySelector('#num1')
	active()

	function active() {
		let tds = document.querySelectorAll('td')
		tds.forEach((elem) => {
			elem.addEventListener('click', () => {
				const newLocal = 'active2'
				elem.classList.add(newLocal)

				let activeTd = document.querySelectorAll('.active2')

				if (activeTd.length == 2) {
					let day_1 = activeTd[0]
					let day_2 = activeTd[1]
					let diff = Math.abs(
						(addDatt(day_2) - addDatt(day_1)) / (60 * 60 * 24 * 1000)
					)
					num1.value = diff
					day_1.classList.remove(newLocal)
					day_2.classList.remove(newLocal)
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
}
