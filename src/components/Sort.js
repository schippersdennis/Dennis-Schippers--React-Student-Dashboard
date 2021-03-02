import React from "react"
import useDashBoard from "./useDashBoard"

const Sort = ({ name, id }) => {
	const { data, setSort } = useDashBoard()

	return (
		<form
			defaultChecked
			onChange={(event) => {
				const value = event.target.value
				setSort(value, name)
			}}
		>
			<input
				readOnly
				checked={data[name].radioBox.enjoymentRating === true}
				type="radio"
				name="radio"
				value="enjoymentRating"
			/>{" "}
			sort by enjoy
			<input
				readOnly
				checked={data[name].radioBox.difficultyRating === true}
				type="radio"
				name="radio"
				value="difficultyRating"
			/>
			sort by difficulty
			<input
				readOnly
				checked={data[name].radioBox.assignment === true}
				type="radio"
				name="radio"
				value="assignment"
			/>{" "}
			sort by assignment
		</form>
	)
}

export default Sort
