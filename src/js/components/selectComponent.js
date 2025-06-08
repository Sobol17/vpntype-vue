import { useSelect } from './useSelect'

export const SelectComponent = {
	props: {
		options: {
			type: Array,
			required: true,
		},
	},
	emits: ['update:selected'],
	template: `
		<div class="custom-select">
			<div
				class="select-header"
				:class="{ opened: isOpen }" 
				@click="toggleSelect"
			>
				<span class="select-header__flex" v-if="selectedOption">
					<img :src="selectedOption.icon">
					{{ selectedOption.label }}
				</span>
				<span v-else>Выберите метод</span>
				<span>
					<svg class="select-header__icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
						<path d="M14 7.13514L9 12L4 7.13514L5.16667 6L9 9.72973L12.8333 6L14 7.13514Z" fill="currentColor"/>
					</svg>
				</span>
			</div>

			<div v-if="isOpen" class="select-dropdown">
				<div
					v-for="option in options"
					:key="option.value"
					class="select-option"
					:class="{ selected: option.value === selectedOption?.value }" 
					@click="onSelect(option)"
				>
					<img :src="option.icon" width="24" />
					<span>{{ option.label }}</span>
					<span class="select-option__icon" v-if="option.value === selectedOption?.value">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
							<path d="M7.0926 14.3391C7.01947 14.3391 6.946 14.3114 6.8901 14.2555L2.33385 9.69922C2.22205 9.58742 2.22205 9.40637 2.33385 9.29457L4.06881 7.55961C4.18061 7.44781 4.36166 7.44781 4.47346 7.55961L7.03565 10.1218C7.06693 10.1531 7.11791 10.1531 7.14955 10.1218L13.5265 3.7448C13.5803 3.69102 13.6531 3.66113 13.729 3.66113C13.805 3.66113 13.8778 3.69137 13.9315 3.7448L15.6665 5.47977C15.7783 5.59156 15.7783 5.77262 15.6665 5.88441L7.2951 14.2555C7.2392 14.3114 7.16572 14.3391 7.0926 14.3391Z" fill="#5C75C9"/>
						</svg>
					</span>
				</div>
			</div>
		</div>
	`,
	setup(props, { emit }) {
		const state = useSelect(Vue)

		const onSelect = option => {
			state.selectOption(option)
			emit('update:selected', option)
		}

		return {
			...state,
			options: props.options,
			onSelect,
		}
	},
}
