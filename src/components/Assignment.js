import React from "react"
import Sort from "./Sort"
import Chart from "./Chart"
import "../styling/globals.css"
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
		<div className="assignment-container">
			<div className="assignment">
				<div className="assignment-header">
					show results per assignment:<span> {name} </span>
				</div>
				<div className="student-switches">
					<div className="banner">
						switch to inlcude student in chart - selected
						students: (<span> {counter} </span>)
					</div>
					<ul>{studentsOverview}</ul>
				</div>
				<div className="sort-wrapper">
					{sortedArr.length > 0 && (
						<div className="wrapper">
							<div className="sort-option">
								<div className="banner-sort">
									Sort options
								</div>
								<Sort
									state={studentsData}
									data="dataAssignments"
									name={name}
									condition={"name"}
								/>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="chart">
				<Chart data={sortedArr} />
			</div>
		</div>
	)
}
export default Assignment
