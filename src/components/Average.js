import React from "react"
import "../styling/average.css"
import useDashBoard from "./useDashBoard"
import { StudentSwitch } from "./StudentSwitch"
import Chart from "./Chart"

const Average = () => {
	const { students, assignments, averageAssignments, counter } = useDashBoard()
	const studentSwitches = students.map((person, index) => {
		return <StudentSwitch id={"student"} key={index} name={person} />
	})

	const assignmentCheckboxs = assignments.map((assignment, index) => {
		return <StudentSwitch id={"assignment"} key={index} name={assignment} />
	})

	return (
		<div className="average">
			<h1>show average results for students</h1>
			<div className="student-switches">
				<h3>
					select at least two students for a comparison of the average
					results ({counter}) of ({students.length})
				</h3>
				<ul>{studentSwitches}</ul>
			</div>
			<div className="assignment-checkers">
				<h3>
					Select assignment to show average per assignment - total (
					{assignments.length})
				</h3>
				<select>
					<option default value="showall">
						Overview 56 assignments
					</option>
					{assignmentCheckboxs}
				</select>
			</div>
			<Chart data={averageAssignments} />
		</div>
	)
}
export default Average
