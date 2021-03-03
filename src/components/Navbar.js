import React from "react"
import "../styling/navbar.css"
import { NavItem } from "./NavItem"
import useDashBoard from "./useDashBoard"
import { NavLink } from "react-router-dom"

const Navbar = () => {
	const { students, assignments } = useDashBoard()

	// Building Students Routing
	const studentRoutes = students.map((person, index) => {
		return <NavItem name={person} id={"student"} key={index} />
	})

	//Building Assignments Routing
	const assignmentRoutes = assignments.map((assignment, index) => {
		return <NavItem name={assignment} id={"assignment"} key={index} />
	})

	return (
		<nav>
			<div className="students-overview-average">
				<h3>Students Overview</h3>
				<ul>
					<li>
						<NavLink
							className="nav-item"
							activeClassName="is-active"
							to={{
								pathname: "/",
								switch: true,
							}}
						>
							average all students
						</NavLink>{" "}
					</li>
				</ul>
			</div>
			<div className="student">
				<h3>Students</h3>
				<ul>{studentRoutes}</ul>
			</div>
			<div className="assignments">
				<h3>Assignments</h3>
				<ul>{assignmentRoutes}</ul>
			</div>
		</nav>
	)
}
export default Navbar
