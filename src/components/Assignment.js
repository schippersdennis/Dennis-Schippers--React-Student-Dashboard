import Sort from "./Sort"
import React from "react"
import Chart from "./Chart"
import "../styling/assignment.css"
import useDashBoard from "./useDashBoard"
import { useParams } from "react-router-dom"
import { StudentSwitch } from "./StudentSwitch"

const Assignment = () => {
	const { name } = useParams()
	const { dataAssignments } = useDashBoard()

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
			console.log(student)
			student["assignment"] = student["name"]

			return student
		})
	const counter = chartData.length

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

			<Chart data={chartData} />
		</div>
	)
}
export default Assignment
