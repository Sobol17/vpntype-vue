export function useMenu(Vue) {
	const { ref } = Vue
	const activeMenu = ref(false)

	const toggleMenu = () => {
		activeMenu.value = !activeMenu.value
	}

	const closeMenu = () => {
		activeMenu.value = false
	}

	return {
		activeMenu,
		toggleMenu,
		closeMenu,
	}
}
