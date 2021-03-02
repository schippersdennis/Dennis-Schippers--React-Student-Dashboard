import React from "react"
import Chart from "./Chart"
import Sort from "./Sort"
import "../styling/student.css"
import Form from "react-bootstrap/Form"
import useDashBoard from "./useDashBoard"
import { useParams } from "react-router-dom"
import { StudentSwitch } from "./StudentSwitch"

const Student = () => {
	const { name } = useParams()
	const { data, filterChecked, setSort, selectAllAssignments } = useDashBoard()

	const updatedData = filterChecked(data[name].assignments)

	const filterAssignments = data[name].assignments.map((assignment, index) => {
		return (
			<StudentSwitch
				id={"filter-assignment"}
				key={index}
				assignment={assignment}
				name={name}
			/>
		)
	})

	return (
		<div className="student">
			<h1>Show results by student: {name}</h1>
			<div className="student-options">
				<div className="filter-options">
					<h4>Filter options</h4>
					<ul>{filterAssignments}</ul>
					<h4>
						<Form.Check
							onChange={() => {
								selectAllAssignments(name)
							}}
							type="switch"
							id="student-switch"
							label="Invert assignment selections"
						/>
					</h4>
				</div>
				<div className="sort-options">
					<h4>Sort options</h4>
					<Sort name={name} id={"student"} />
					{/* <form
						defaultChecked
						onChange={(event) => {
							const value = event.target.value
							setSort(value, name)
						}}
					>
						<input
							readOnly
							checked={
								data[name].radioBox
									.enjoymentRating === true
							}
							type="radio"
							name="radio"
							value="enjoymentRating"
						/>{" "}
						sort by enjoy
						<input
							readOnly
							checked={
								data[name].radioBox
									.difficultyRating === true
							}
							type="radio"
							name="radio"
							value="difficultyRating"
						/>
						sort by difficulty
						<input
							readOnly
							checked={
								data[name].radioBox.assignment ===
								true
							}
							type="radio"
							name="radio"
							value="assignment"
						/>{" "}
						sort by assignment
					</form> */}
				</div>
			</div>

			<Chart data={updatedData} />
		</div>
	)
}

export default Student
