import Sort from "./Sort"
import React from "react"
import Chart from "./Chart"
import "../styling/assignment.css"
import useDashBoard from "./useDashBoard"
import { useParams } from "react-router-dom"
import { StudentSwitch } from "./StudentSwitch"

const Assignment = () => {
	const { name } = useParams()
	const { dataAssignments, studentsData, setSort } = useDashBoard()
	//Building Student Switch Buttons
	const studentsOverview = dataAssignments[name].students.map((student, index) => {
		return (
			<StudentSwitch
				id={"studentOverview"}
				key={index}
				student={student}
				name={name}
			/>
		)
	})
	const chartData = dataAssignments[name].students
		.filter((student) => student.checked)
		.map((student) => {
			student["assignment"] = student["name"]
			return student
		})
	const counter = chartData.length
	/////////////////////////////////////////////////
	//Sort + Filter Options
	const keys = Object.keys(dataAssignments[name].radioBox)
	const sortValue = keys.filter((key) => dataAssignments[name].radioBox[key]).toString()
	const sortedArr = setSort(sortValue, chartData)

	return (
		<div className="assignment">
			<h1>show results per assignment : {name}</h1>
			<div className="students-overview">
				<h4>
					switch to inlcude student in chart - selected students{" "}
					{counter}
				</h4>
				<ul>{studentsOverview}</ul>
			</div>
			<Sort
				state={studentsData}
				data="dataAssignments"
				name={name}
				condition={"name"}
			/>
			<Chart data={sortedArr} />
		</div>
	)
}
export default Assignment
