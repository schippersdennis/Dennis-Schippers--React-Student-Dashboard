import React from "react"
import Form from "react-bootstrap/Form"
import useDashBoard from "./useDashBoard"
import "bootstrap/dist/css/bootstrap.min.css"
export const StudentSwitch = ({ name, id, assignment, student }) => {
	const { studentSwitch, data, handleCheckAssignment, assignmentSwitch } = useDashBoard()

	switch (id) {
		case "student":
			return (
				<li>
					<Form.Check
						name="my-checkbox"
						checked={data[name].checked}
						onChange={() => {
							studentSwitch(name)
						}}
						type="switch"
						id={name}
						label={name}
					/>
				</li>
			)

		case "assignment":
			return (
				<option className="select-option" value={name}>
					{name}
				</option>
			)
		case "filter-assignment":
			return (
				<li>
					<label>
						<input
							checked={assignment.checked}
							onChange={() => {
								handleCheckAssignment(
									assignment,
									name
								)
							}}
							type="checkbox"
							value={assignment.assignment}
						/>{" "}
						{assignment.assignment}
					</label>
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
						id={student.name}
						label={student.name}
					/>
				</li>
			)

		default:
			break
	}
}
