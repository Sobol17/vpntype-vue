export function useLocale(Vue, i18n) {
	const { ref, watch } = Vue

	const savedLocale = ref(localStorage.getItem('locale') || 'ru')

	i18n.global.locale.value = savedLocale.value

	const changeLocale = newLocale => {
		savedLocale.value = newLocale
		i18n.global.locale.value = newLocale
		localStorage.setItem('locale', newLocale)
	}

	return { changeLocale, savedLocale }
}
