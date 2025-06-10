export function useClickOutside(Vue, elementRef, callback) {
	const { ref, onMounted, onBeforeUnmount } = Vue
	const handler = event => {
		if (
			!elementRef.value.contains(event.target) &&
			!event.target.closest('.date-picker') &&
			!event.target.classList.contains('date-picker__dropdown__item')
		) {
			callback()
		}
	}

	onMounted(() => {
		document.addEventListener('click', handler)
	})

	onBeforeUnmount(() => {
		document.removeEventListener('click', handler)
	})
}
