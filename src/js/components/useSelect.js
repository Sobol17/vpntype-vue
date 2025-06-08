export function useSelect(Vue) {
	const { ref } = Vue

	const isOpen = ref(false)
	const selectedOption = ref(null)

	const toggleSelect = () => {
		isOpen.value = !isOpen.value
	}

	const selectOption = option => {
		selectedOption.value = option
		isOpen.value = false
	}

	return {
		isOpen,
		selectedOption,
		toggleSelect,
		selectOption,
	}
}
