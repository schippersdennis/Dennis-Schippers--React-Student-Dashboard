import React from "react"
import Form from "react-bootstrap/Form"
import useDashBoard from "./useDashBoard"

export const StudentSwitch = ({ name, id, assignment, student }) => {
	const { studentSwitch, data, handleCheckAssignment, assignmentSwitch } = useDashBoard()

	switch (id) {
		case "student":
			return (
				<li>
					<Form.Check
						checked={data[name].checked}
						onChange={() => {
							studentSwitch(name)
						}}
						type="switch"
						id="student-switch"
						label={name}
					/>
				</li>
			)

		case "assignment":
			return <option value={name}>{name}</option>
		case "filter-assignment":
			return (
				<li>
					<input
						checked={assignment.checked}
						onChange={() => {
							handleCheckAssignment(assignment, name)
						}}
						type="checkbox"
						value={assignment.assignment}
					/>{" "}
					{assignment.assignment}
				</li>
			)
		case "studentOverview":
			return (
				<li>
					<Form.Check
						onChange={() =>
							assignmentSwitch(student.name, name)
						}
						checked={student.checked}
						type="switch"
						id="student-switch"
						label={student.name}
					/>
				</li>
			)

		default:
			break
	}
}
