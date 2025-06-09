export function useSelect(Vue, props, emit) {
	const { ref, watch } = Vue

	const isOpen = ref(false)
	const selectedOption = ref(props.modelValue)

	watch(
		() => props.modelValue,
		newVal => {
			selectedOption.value = newVal
		}
	)

	const toggleSelect = () => {
		isOpen.value = !isOpen.value
	}

	const selectOption = option => {
		selectedOption.value = option
		isOpen.value = false
		emit('update:modelValue', option)
	}

	return {
		isOpen,
		selectedOption,
		toggleSelect,
		selectOption,
	}
}
