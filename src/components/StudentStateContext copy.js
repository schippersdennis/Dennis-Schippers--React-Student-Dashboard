import React, { useState, useEffect, createContext } from "react"
import * as d3 from "d3"

export const StudentStateContext = createContext()
export const StudentStateProvider = (props) => {
	const [studentsData, setStudentsData] = useState({
		assignments: [],
		data: {},
		students: [],
	})

	useEffect(() => {
		//dataset for student
		d3.csv("./rawData.csv").then((data) => {
			let updatedData = {}
			let assignments = []
			let assignmentData = {}
			let students = []

			data.forEach((student) => {
				const name = student.name
				const assignmentName = student.assignment
				assignments.push(student.assignment)

				if (!updatedData.hasOwnProperty(name)) {
					students.push(name)
					updatedData[name] = {
						name: student.name,
						radioBox: {
							enjoymentRating: false,
							difficultyRating: false,
							assignment: true,
						},
						checked: true,
						assignments: [],
					}
				}
				if (!assignmentData.hasOwnProperty(assignmentName)) {
					assignmentData[assignmentName] = {
						assignment: student.assignment,
						students: [],
					}
				}

				const newAssignmentObject = {
					name: student.name,
					difficultyRating: parseInt(student.difficulty),
					enjoymentRating: parseInt(student.enjoyment),
					checked: true,
				}

				const newStudentObject = {
					name: student.name,
					difficultyRating: parseInt(student.difficulty),
					enjoymentRating: parseInt(student.enjoyment),
					checked: true,
				}
				updatedData[name].assignments.push(newAssignmentObject)
				assignmentData[assignmentName].students.push(newStudentObject)
			})
			// state
			const newState = {
				assignments: [...new Set(assignments)],
				students: students,
				data: updatedData,
				dataAssignments: assignmentData,
			}

			setStudentsData(() => {
				return newState
			})
		})
	}, [])

	return (
		<StudentStateContext.Provider value={[studentsData, setStudentsData]}>
			{props.children}
		</StudentStateContext.Provider>
	)
}
