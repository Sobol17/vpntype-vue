export function useBurger(Vue) {
	const { ref } = Vue
	const activeSideMenu = ref(false)

	const toggleSideMenu = () => {
		activeSideMenu.value = !activeSideMenu.value
	}

	const closeSideMenu = () => {
		activeSideMenu.value = false
	}

	return {
		activeSideMenu,
		toggleSideMenu,
		closeSideMenu,
	}
}
