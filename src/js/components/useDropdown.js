export function useDropdown(Vue) {
	const { ref } = Vue
	const isDropdownVisible = ref(false)
	const isDropdownLocaleVisible = ref(false)

	function toggleDropdown() {
		isDropdownVisible.value = !isDropdownVisible.value
	}

	function toggleDropdownLocale() {
		isDropdownLocaleVisible.value = !isDropdownLocaleVisible.value
	}

	return {
		isDropdownVisible,
		isDropdownLocaleVisible,
		toggleDropdown,
		toggleDropdownLocale,
	}
}
