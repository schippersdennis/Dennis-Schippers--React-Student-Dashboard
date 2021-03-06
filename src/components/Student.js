import React from "react"
import Sort from "./Sort"
import Chart from "./Chart"
import "../styling/globals.css"
import Form from "react-bootstrap/Form"
import useDashBoard from "./useDashBoard"
import { useParams } from "react-router-dom"
import { StudentSwitch } from "./StudentSwitch"

const Student = () => {
	const { name } = useParams()
	const { data, filterChecked, setSort, selectAllAssignments, studentsData } = useDashBoard()

	//Assignment Checkboxes
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
	//Sort + Filter Options
	const keys = Object.keys(data[name].radioBox)
	const sortValue = keys.filter((key) => data[name].radioBox[key]).toString()

	const updatedData = filterChecked(data[name].assignments)
	const sortedArr = updatedData.length > 0 ? setSort(sortValue, updatedData) : updatedData

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

				{sortedArr.length >= 2 && (
					<div className="sort-options">
						<h4>Sort options</h4>
						<Sort
							state={studentsData}
							data="data"
							name={name}
						/>
					</div>
				)}
			</div>
			<div className="chart">
				{sortedArr.length > 0 && <Chart data={sortedArr} />}
			</div>
		</div>
	)
}

export default Student
