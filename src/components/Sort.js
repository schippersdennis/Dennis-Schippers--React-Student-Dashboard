import React from "react"
import useDashBoard from "./useDashBoard"

const Sort = ({ state, data, name, condition }) => {
	const { setRadio } = useDashBoard()
	const checked = name ? state[data][name] : state[data]

	return (
		<form
			defaultChecked
			onChange={(event) => {
				const value = event.target.value
				setRadio(value, state, data, name)
			}}
		>
			<input
				readOnly
				checked={checked.radioBox.enjoymentRating}
				type="radio"
				name="radio"
				value="enjoymentRating"
			/>{" "}
			sort by enjoy
			<input
				readOnly
				checked={checked.radioBox.difficultyRating}
				type="radio"
				name="radio"
				value="difficultyRating"
			/>
			sort by difficulty
			<input
				readOnly
				checked={checked.radioBox.assignment}
				type="radio"
				name="radio"
				value="assignment"
			/>{" "}
			sort by {condition === "name" ? "name" : "assignment"}
		</form>
	)
}

export default Sort
