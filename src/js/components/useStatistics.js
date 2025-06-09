export function useStatistics(Vue) {
	const { ref } = Vue
	const chosenDate = ref(null)

	function formatDateRange(startISO, endISO, locale = 'ru-RU') {
		const startDate = new Date(startISO)
		const endDate = new Date(endISO)

		const sameMonth = startDate.getMonth() === endDate.getMonth()
		const sameYear = startDate.getFullYear() === endDate.getFullYear()

		const formatDay = new Intl.DateTimeFormat(locale, { day: 'numeric' })
		const formatMonthYear = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' })

		if (sameMonth && sameYear) {
			return `${formatDay.format(startDate)}–${formatDay.format(endDate)} ${formatMonthYear.format(
				startDate
			)}`
		}

		const formatFull = new Intl.DateTimeFormat(locale, {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		})

		return `${formatFull.format(startDate)} – ${formatFull.format(endDate)}`
	}

	return {
		chosenDate,
		formatDateRange,
	}
}
