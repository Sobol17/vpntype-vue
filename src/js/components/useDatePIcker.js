import { useClickOutside } from './useClickOutside'

export function useDatePicker(Vue) {
	const { ref, useTemplateRef } = Vue
	const isDatePickerVisible = ref(false)

	const datePickerRef = useTemplateRef('date-picker')

	const showDatePicker = () => {
		isDatePickerVisible.value = !isDatePickerVisible.value
	}

	const hideDatePicker = () => {
		isDatePickerVisible.value = false
	}

	useClickOutside(Vue, datePickerRef, hideDatePicker)

	return {
		showDatePicker,
		datePickerRef,
		isDatePickerVisible,
	}
}
