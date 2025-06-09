export const DatePicker = {
	props: {
		modelValue: {
			type: [Date, String, Object],
			required: true,
		},
		locale: {
			type: String,
			default: 'en-US',
		},
		minDate: {
			type: [Date, String],
			default: null,
		},
		maxDate: {
			type: [Date, String],
			default: null,
		},
		range: {
			type: Boolean,
			default: false,
		},
	},
	template: `
    <div class="date-picker">
			<div class="date-picker__bar">
				<div @click="selectInitialDate(date)" v-for="date in initialDates" :key="date" class="date-picker__bar__item">{{date}}</div>
			</div>
      <div class="date-picker__header">
				<div class="date-picker__header__text" @click="toggleDropdown">
					<span>{{ currentMonth }} {{ currentYear }}</span>
					<img src="./assets/icons/icon_arrow_down.svg" alt="" />
					<transition name="dropdown">
						<div v-if="isDropdownVisible" class="date-picker__dropdown">
							<div
								v-for="year in years"
								:key="year"
								class="date-picker__dropdown__item"
								:class="{'selected': year === currentYear}"
								@click="selectYear(year)"
							>
								{{ year }}
								 <img v-if="year === currentYear" src="./assets/icons/icon_date_check.svg" alt="" />
							</div>
						</div>
					</transition>
				</div>
        <div class="date-picker__header__buttons">
					<button class="date-picker__header__button" @click="prevMonth">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
							<path d="M11.3243 15.5L5 9L11.3243 2.5L12.8 4.01667L7.95135 9L12.8 13.9833L11.3243 15.5Z" fill="currentColor"/>
						</svg>
					</button>
        	<button class="date-picker__header__button" @click="nextMonth">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
							<path d="M6.67568 2.5L13 9L6.67568 15.5L5.2 13.9833L10.0486 9L5.2 4.01666L6.67568 2.5Z" fill="currentColor"/>
						</svg>
					</button>
				</div>
      </div>
      <div class="date-picker__calendar">
        <div class="date-picker__weekdays">
          <div v-for="day in weekdays" :key="day">{{ day }}</div>
        </div>
        <div class="date-picker__days">
          <div
            v-for="day in days"
            :key="day.date || day.key"
            :class="{
              'date-picker__day': day.date,
              'date-picker__day--selected': day.date && isSelected(day.date),
              'date-picker__day--in-range': day.date && isInRange(day.date),
              'date-picker__day--disabled': day.date && isDisabled(day.date),
              'date-picker__day--empty': !day.date,
            }"
            @click="day.date && selectDate(day.date)"
          >
            {{ day.day || '' }}
          </div>
        </div>
      </div>
    </div>
  `,
	setup(props, { emit }) {
		const { ref, computed } = Vue

		const initialDates = [
			'Сегодня',
			'Вчера',
			'7 дней',
			'Год',
			'14 дней',
			'Месяц',
			'90 дней',
			'6 месяцев',
			'За все время',
		]

		const selectInitialDate = label => {
			const now = new Date()
			let start = null
			let end = new Date(now)

			switch (label) {
				case 'Сегодня':
					start = new Date(now)
					break
				case 'Вчера':
					start = new Date(now)
					start.setDate(start.getDate() - 1)
					end.setDate(end.getDate() - 1)
					break
				case '7 дней':
					start = new Date(now)
					start.setDate(start.getDate() - 6)
					break
				case '14 дней':
					start = new Date(now)
					start.setDate(start.getDate() - 13)
					break
				case 'Месяц':
					start = new Date(now)
					start.setMonth(start.getMonth() - 1)
					start.setDate(start.getDate() + 1) // чтобы было 30 дней назад
					break
				case '90 дней':
					start = new Date(now)
					start.setDate(start.getDate() - 89)
					break
				case '6 месяцев':
					start = new Date(now)
					start.setMonth(start.getMonth() - 6)
					start.setDate(start.getDate() + 1)
					break
				case 'Год':
					start = new Date(now)
					start.setFullYear(start.getFullYear() - 1)
					start.setDate(start.getDate() + 1)
					break
				case 'За все время':
					start = new Date(2000, 0, 1) // или любая минимальная дата
					break
				default:
					return
			}

			if (props.range) {
				selectedRange.value = { start, end }
				emit('update:modelValue', { start, end })
			} else {
				selectedRange.value = start
				emit('update:modelValue', start)
			}
		}

		const currentDate = ref(new Date())
		const selectedRange = ref(props.range ? { start: null, end: null } : null)
		const isDropdownVisible = ref(false)

		if (!props.range) {
			selectedRange.value = props.modelValue ? new Date(props.modelValue) : null
		} else if (props.modelValue && props.modelValue.start && props.modelValue.end) {
			selectedRange.value = {
				start: new Date(props.modelValue.start),
				end: new Date(props.modelValue.end),
			}
		}

		const weekdays = computed(() => {
			const formatter = new Intl.DateTimeFormat(props.locale, { weekday: 'short' })
			const startDate = new Date(2021, 0, 4) // 4 января 2021 — понедельник
			return Array.from({ length: 7 }, (_, i) => {
				const date = new Date(startDate)
				date.setDate(startDate.getDate() + i)
				return formatter.format(date)
			})
		})

		const currentMonth = computed(() => {
			return new Intl.DateTimeFormat(props.locale, { month: 'long' }).format(currentDate.value)
		})

		const currentYear = computed(() => {
			return currentDate.value.getFullYear()
		})

		const days = computed(() => {
			const year = currentDate.value.getFullYear()
			const month = currentDate.value.getMonth()
			const firstDayOfMonth = new Date(year, month, 1).getDay()
			const lastDay = new Date(year, month + 1, 0).getDate()

			// Корректировка для понедельника как первого дня недели
			const firstDayOffset = (firstDayOfMonth + 6) % 7 // 0 - понедельник, 6 - воскресенье

			const daysArray = []

			// Пустые ячейки до первого дня месяца
			for (let i = 0; i < firstDayOffset; i++) {
				daysArray.push({ key: `empty-start-${i}` })
			}

			// Дни текущего месяца
			for (let i = 1; i <= lastDay; i++) {
				daysArray.push({ day: i, date: new Date(year, month, i) })
			}

			// Пустые ячейки после последнего дня месяца
			const totalCells = daysArray.length
			const remainingCells = (7 - (totalCells % 7)) % 7
			for (let i = 0; i < remainingCells; i++) {
				daysArray.push({ key: `empty-end-${i}` })
			}

			return daysArray
		})

		const years = computed(() => {
			return Array.from({ length: 8 }, (_, i) => 2019 + i)
		})

		const toggleDropdown = () => {
			isDropdownVisible.value = !isDropdownVisible.value
		}

		const selectYear = year => {
			currentDate.value = new Date(year, currentDate.value.getMonth(), 1)
			isDropdownVisible.value = false
		}

		const isSelected = date => {
			if (props.range) {
				return (
					(selectedRange.value.start &&
						date.toDateString() === selectedRange.value.start.toDateString()) ||
					(selectedRange.value.end &&
						date.toDateString() === selectedRange.value.end.toDateString())
				)
			} else {
				return selectedRange.value && date.toDateString() === selectedRange.value.toDateString()
			}
		}

		const isInRange = date => {
			if (props.range && selectedRange.value.start && selectedRange.value.end) {
				return date > selectedRange.value.start && date < selectedRange.value.end
			}
			return false
		}

		const isDisabled = date => {
			if (props.minDate && date < new Date(props.minDate)) return true
			if (props.maxDate && date > new Date(props.maxDate)) return true
			return false
		}

		const selectDate = date => {
			if (isDisabled(date)) return

			if (props.range) {
				if (!selectedRange.value.start || selectedRange.value.end) {
					selectedRange.value = { start: date, end: null }
				} else {
					if (date < selectedRange.value.start) {
						selectedRange.value.end = selectedRange.value.start
						selectedRange.value.start = date
					} else {
						selectedRange.value.end = date
					}
					emit('update:modelValue', {
						start: selectedRange.value.start,
						end: selectedRange.value.end,
					})
				}
			} else {
				selectedRange.value = date
				emit('update:modelValue', date)
			}
		}

		const prevMonth = () => {
			currentDate.value = new Date(
				currentDate.value.getFullYear(),
				currentDate.value.getMonth() - 1,
				1
			)
		}

		const nextMonth = () => {
			currentDate.value = new Date(
				currentDate.value.getFullYear(),
				currentDate.value.getMonth() + 1,
				1
			)
		}

		return {
			currentDate,
			selectedRange,
			weekdays,
			currentMonth,
			currentYear,
			days,
			initialDates,
			isDropdownVisible,
			years,
			toggleDropdown,
			selectYear,
			isSelected,
			isInRange,
			isDisabled,
			selectDate,
			prevMonth,
			nextMonth,
			selectInitialDate,
		}
	},
}
