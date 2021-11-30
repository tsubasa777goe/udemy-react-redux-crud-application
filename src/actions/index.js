export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
	type: INCREMENT
})

export const decrement = () => ({
	type: DECREMENT
)

// 元の記述
// export const increment = () => {
// 	return {
// 	type: 'INCREMENT'
// 	}
// }

// export const decrement = () => {
// 	return {
// 	type: 'DECREMENT'
// 	}
// }