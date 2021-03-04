import React from "react"
import Sort from "./Sort"
import Chart from "./Chart"
import "../styling/average.css"
import useDashBoard from "./useDashBoard"
import { StudentSwitch } from "./StudentSwitch"

const Average = () => {
	const {
		setSort,
		counter,
		students,
		averageData,
		assignments,
		studentsData,
		averageFilter,
		averageAssignments,
	} = useDashBoard()

	// Student-switch-Butons
	const studentSwitches = students.map((person, index) => {
		return <StudentSwitch id={"student"} key={index} name={person} />
	})
	//Assignment Dropdown-Menu
	const assignmentCheckboxs = assignments.map((assignment, index) => {
		return <StudentSwitch id={"assignment"} key={index} name={assignment} />
	})
	//Sort + Filter Options
	const keys = Object.keys(studentsData.average.radioBox)
	const sortValue = keys.filter((key) => studentsData.average.radioBox[key]).toString()

	const sortedArr = averageAssignments.length > 0 && setSort(sortValue, averageAssignments)
	const filterAverageData = averageAssignments.filter((items) => {
		return items.assignment === averageData.filter
	})

	const dataCondition = () => {
		if (sortedArr.length > 0 && averageData.filter === "showall") {
			return sortedArr
		} else {
			return filterAverageData
		}
	}
	const updateCondition = dataCondition()

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
			{filterAverageData.length !== 1 ? (
				<Sort state={studentsData} data="average" />
			) : null}

			<div className="assignment-checkers">
				<h3>
					Select assignment to show average per assignment - total (
					{assignments.length})
				</h3>
				<select
					defaultValue={studentsData.average.filter}
					onChange={(event) => {
						averageFilter(event.target.value)
					}}
				>
					<option default value="showall">
						Overview 56 assignments
					</option>
					{assignmentCheckboxs}
				</select>
			</div>
			<div className="chart">
				{updateCondition.length > 0 && <Chart data={updateCondition} />}
			</div>
		</div>
	)
}
export default Average
