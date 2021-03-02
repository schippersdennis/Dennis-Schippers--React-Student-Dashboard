import { sort } from "d3"
import React, { useContext, useEffect } from "react"
import { StudentStateContext } from "./StudentStateContext"

const useDashBoard = () => {
	const [studentsData, setStudentsData] = useContext(StudentStateContext)

	//include student @ average assignments
	const studentSwitch = (name) => {
		const updatedState = { ...studentsData.data }
		updatedState[name].checked = !updatedState[name].checked

		setStudentsData((prevState) => {
			return { ...prevState, data: updatedState }
		})
	}
	const assignmentSwitch = (student, assignment) => {
		const updateAssignment = { ...studentsData.dataAssignments }
		updateAssignment[assignment].students.map((person) => {
			if (person.name === student) {
				person.checked = !person.checked
			}
		})
		setStudentsData((prevState) => {
			return { ...prevState, dataAssignments: updateAssignment }
		})
	}

	// build average assignments
	const buildAssignments = [...studentsData.assignments].map((assignment) => {
		let enjoyment = []
		let difficulty = []
		let amountStudents = Object.entries({ ...studentsData.data }).filter(
			(item) => item[1].checked
		).length

		Object.entries({ ...studentsData.data })
			.filter((item) => item[1].checked)
			.forEach((item) => {
				item[1].assignments.forEach((job) => {
					if (job.assignment === assignment) {
						enjoyment.push(job.enjoymentRating)
						difficulty.push(job.difficultyRating)
					}
				})
			})

		const averageDifficulty =
			difficulty.length >= 2 &&
			difficulty.reduce((numA, numB) => numA + numB) / amountStudents
		const averageEnjoyment =
			enjoyment.length >= 2 &&
			enjoyment.reduce((numA, numB) => numA + numB) / amountStudents

		return {
			assignment: assignment,
			difficultyRating: averageDifficulty,
			enjoymentRating: averageEnjoyment,
		}
	})

	//counter students include @ average
	const studentCheckedCounter = Object.entries(studentsData.data).filter(
		(item) => item[1].checked
	).length

	//student.js
	const handleCheckAssignment = (asssignment, name) => {
		const updateStudentsData = { ...studentsData.data }
		updateStudentsData[name].assignments.map((item) => {
			if (item.assignment === asssignment.assignment) {
				item.checked = !item.checked
				return item
			}
			return item
		})
		setStudentsData((prevState) => {
			return { ...prevState, data: updateStudentsData }
		})
	}
	const selectAllAssignments = (name) => {
		const updateStudentsData = { ...studentsData.data }
		updateStudentsData[name].assignments.map(
			(assignemnt) => (assignemnt.checked = !assignemnt.checked)
		)
		setStudentsData((prevState) => {
			return { ...prevState, data: updateStudentsData }
		})
	}
	const filterChecked = (arr) => {
		return arr.filter((item) => item.checked)
	}

	//sort
	const stringCompare = (str1, str2) => {
		str1 = str1.toLowerCase()
		str2 = str2.toLowerCase()

		if (str1 > str2) return 1
		if (str2 > str1) return -1
		return 0
	}
	const numCompare = (num1, num2) => num1 - num2

	const sortHandler = (typeData, key) => {
		const dataType = typeof typeData

		const sortArray = (a, b) => {
			a = a[key]
			b = b[key]
			if (dataType === "string") return stringCompare(a, b)
			if (dataType === "number") return numCompare(a, b)
		}
		return sortArray
	}

	const setSort = (key, name) => {
		setRadio(key, name)
		const updateSorted = { ...studentsData }
		const typeData = updateSorted.data[name].assignments[0][key]
		updateSorted.data[name].assignments.sort(sortHandler(typeData, key))

		setStudentsData((prevState) => {
			return { ...prevState, updateSorted }
		})
	}
	const setRadio = (key, name) => {
		const copyRadioStatus = { ...studentsData.data }
		//reset values
		copyRadioStatus[name].radioBox.enjoymentRating = false
		copyRadioStatus[name].radioBox.difficultyRating = false
		copyRadioStatus[name].radioBox.assignment = false
		//set new value
		copyRadioStatus[name].radioBox[key] = !copyRadioStatus[name].radioBox[key]

		setStudentsData((prevState) => {
			return { ...prevState, data: copyRadioStatus }
		})
	}

	// all custom hook variables & functions
	return {
		students: studentsData.students,
		assignments: studentsData.assignments,
		data: studentsData.data,
		counter: studentCheckedCounter,
		studentSwitch,
		averageAssignments: buildAssignments,
		handleCheckAssignment,
		filterChecked,
		setSort,
		selectAllAssignments,
		dataAssignments: studentsData.dataAssignments,
		assignmentSwitch,
	}
}

export default useDashBoard
