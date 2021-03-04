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
	const path = dataAssignments[name].students
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
	const chartData =
		path.length > 0 &&
		path
			.filter((student) => student.checked)
			.map((student) => {
				student["assignment"] = student["name"]
				return student
			})

	const counter = chartData.length
	const keys = Object.keys(dataAssignments[name].radioBox)
	const sortValue = keys.filter((key) => dataAssignments[name].radioBox[key]).toString()
	const sortedArr = counter > 0 && setSort(sortValue, chartData)

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

			{sortedArr.length > 0 && (
				<div className="chart">
					<Sort
						state={studentsData}
						data="dataAssignments"
						name={name}
						condition={"name"}
					/>
					<Chart data={sortedArr} />
				</div>
			)}
		</div>
	)
}
export default Assignment
