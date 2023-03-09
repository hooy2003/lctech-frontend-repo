import { reactive } from 'vue'
import { SomeItem } from '../types/someType'

const state = reactive({
	someItemList: [] as SomeItem[]
})

const actions = {
	someItemList(props: SomeItem[]): void {
		state.someItemList = props
	}
}

export default {
	state,
	actions
}
