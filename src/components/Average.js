import React from "react"
import Sort from "./Sort"
import Chart from "./Chart"
import "../styling/globals.css"
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
	const assignmentOptions = assignments.map((assignment, index) => {
		return <StudentSwitch id={"assignment"} key={index} name={assignment} />
	})
	//Sort + Filter Options
	const keys = Object.keys(studentsData.average.radioBox)
	const sortValue = keys.filter((key) => studentsData.average.radioBox[key]).toString()

	const sortedArr =
		averageAssignments.length > 0 &&
		setSort(sortValue, averageAssignments, studentsData.average.reverse)

	const filterAverageData = averageAssignments.filter((items) => {
		return items.assignment === averageData.filter
	})

	const dataCondition = () => {
		if (averageData.filter === "showall") {
			return sortedArr
		} else {
			return filterAverageData
		}
	}
	const updateCondition = dataCondition()

	return (
		<div className="average">
			<div className="average-container">
				<div className="average-header">
					Shows ratings of all <span> Students</span>
				</div>
				<div className="stylewrapper">
					<div className="student-switches">
						<div className="banner">
							Select at least two students for a
							comparison of the average results ({" "}
							<span>{counter}</span> ) of (
							<span>{students.length}</span>)
						</div>
						<ul>{studentSwitches}</ul>
					</div>
					{filterAverageData.length !== 1 ? (
						<div className="sort-option">
							<div className="banner-sort">
								Sort options
							</div>
							<Sort state={studentsData} data="average" />
						</div>
					) : null}

					<div className="assignment-options">
						<div className="assignment-banner">
							Select assignment to display - Current
							selected (
							{studentsData.average.filter ===
							"showall" ? (
								<span>
									All ( {assignments.length} )
								</span>
							) : (
								<span>
									{
										studentsData.average
											.filter
									}
								</span>
							)}
							)
						</div>
						<select
							defaultValue={studentsData.average.filter}
							onChange={(event) => {
								averageFilter(event.target.value)
							}}
						>
							<option default value="showall">
								All (56) Assignments
							</option>
							{assignmentOptions}
						</select>
					</div>
				</div>
				<div className="chart">
					{updateCondition.length > 0 && (
						<Chart data={updateCondition} />
					)}
				</div>
			</div>
		</div>
	)
}
export default Average
