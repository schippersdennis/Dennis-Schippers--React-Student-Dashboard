import { useContext } from "react"
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
			return person
		})
		setStudentsData((prevState) => {
			return { ...prevState, dataAssignments: updateAssignment }
		})
	}

	// build average assignments
	const buildAssignments = [...studentsData.assignments].map((assignment) => {
		let difficulty = 0
		let enjoyment = 0
		let labelData = []

		const amountStudents = Object.entries({ ...studentsData.data }).filter(
			(item) => item[1].checked
		).length

		Object.entries({ ...studentsData.data })
			.filter((item) => item[1].checked)
			.forEach((item) => {
				let test = { name: item[0] }
				item[1].assignments.forEach((job) => {
					if (job.assignment === assignment) {
						test.difficultyRating = job.difficultyRating
						test.enjoymentRating = job.enjoymentRating
						difficulty += job.difficultyRating
						enjoyment += job.enjoymentRating
					}
				})
				labelData.push(test)
			})
		return {
			assignment: assignment,
			difficultyRating:
				difficulty > 0 &&
				parseFloat((difficulty / amountStudents).toFixed(2)),
			enjoymentRating:
				enjoyment > 0 &&
				parseFloat((enjoyment / amountStudents).toFixed(2)),
			labels: labelData,
		}
	})

	//sort & filter functions
	const stringCompare = (str1, str2) => {
		str1 = str1.toLowerCase()
		str2 = str2.toLowerCase()

		if (str1 > str2) return 1
		if (str2 > str1) return -1
		return 0
	}
	const numCompare = (num1, num2) => num1 - num2

	const sortHandler = (sample, key) => {
		const dataType = typeof sample
		const sortArray = (a, b) => {
			a = a[key]
			b = b[key]
			if (dataType === "string") return stringCompare(a, b)
			if (dataType === "number") return numCompare(a, b)
		}
		return sortArray
	}

	const setSort = (key, arr) => {
		const sample = arr[0][key]
		return arr.sort(sortHandler(sample, key))
	}

	const averageFilter = (value) => {
		const updateAverageFilter = { ...studentsData.average }
		updateAverageFilter.filter = value
		setStudentsData((prevState) => {
			return { ...prevState, average: updateAverageFilter }
		})
	}

	const studentCheckedCounter = Object.entries(studentsData.data).filter(
		(item) => item[1].checked
	).length

	// handle checkboxes & radiobtns
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
		updateStudentsData[name].assignments.map((item) => (item.checked = !item.checked))
		setStudentsData((prevState) => {
			return { ...prevState, data: updateStudentsData }
		})
	}
	const filterChecked = (arr) => {
		return arr.filter((item) => item.checked)
	}

	const setRadio = (value, state, data, name) => {
		const updateRadio = { ...state }
		const placeholder = name
			? updateRadio[data][name].radioBox
			: updateRadio[data].radioBox
		//Reset RadioBtns
		placeholder.enjoymentRating = false
		placeholder.difficultyRating = false
		placeholder.assignment = false
		//Set new value
		placeholder[value] = !placeholder[value]
		//update State
		setStudentsData(() => {
			return updateRadio
		})
	}

	return {
		dataAssignments: studentsData.dataAssignments,
		assignments: studentsData.assignments,
		averageAssignments: buildAssignments,
		averageData: studentsData.average,
		students: studentsData.students,
		counter: studentCheckedCounter,
		studentsData: studentsData,
		data: studentsData.data,
		handleCheckAssignment,
		selectAllAssignments,
		assignmentSwitch,
		filterChecked,
		studentSwitch,
		averageFilter,
		setRadio,
		setSort,
	}
}

export default useDashBoard
