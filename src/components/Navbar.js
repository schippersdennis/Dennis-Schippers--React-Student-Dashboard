import React from "react"
import "../styling/globals.css"
import { NavItem } from "./NavItem"
import useDashBoard from "./useDashBoard"
import { NavLink } from "react-router-dom"
import DropdownButton from "react-bootstrap/DropdownButton"
import Button from "react-bootstrap/Button"
import { useMediaQuery } from "@material-ui/core"
import { GiAura, GiAngelWings, GiBlackBook } from "react-icons/gi"

const Navbar = () => {
	const { students, assignments } = useDashBoard()
	const isActive = useMediaQuery("(max-width:1028px)")

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
			{isActive ? (
				//Render Mobile-Navbar
				<div className="nav-container">
					<div className="students-overview-average">
						{/* Button 1 */}
						<NavLink exact className="nav-item" to="/">
							{" "}
							<Button
								href="/"
								variant="primary"
								id="dropdown-basic-button"
							>
								average all students
							</Button>
						</NavLink>

						{/* button 2 */}
						<DropdownButton
							id="dropdown-basic-button"
							title="Students"
						>
							{studentRoutes}
						</DropdownButton>
						{/* button 3 */}
						<DropdownButton
							id="dropdown-basic-button"
							title="Assignments"
						>
							{assignmentRoutes}
						</DropdownButton>
						{/* button 4 */}
					</div>
				</div>
			) : (
				//Render Navbar for desktop
				<div className="nav-container-desktop">
					<div className="nav-wrapper">
						<div className="nav-group">
							<div className="icon-wrapper">
								<GiAngelWings className="iconChart" />
								<h3>Overview</h3>
							</div>
							<ul className="all-students">
								<li>
									<NavLink
										exact
										className="nav-item"
										activeClassName="is-active"
										to="/"
									>
										All Students
									</NavLink>
								</li>
							</ul>
						</div>
						<div className="nav-group">
							<div className="icon-wrapper">
								<GiAura className="iconChart" />
								<h3>Students</h3>
							</div>

							<ul>{studentRoutes}</ul>
						</div>
						<div className="nav-group">
							<div className="icon-wrapper">
								<GiBlackBook className="iconChart" />
								<h3>Assignments</h3>
							</div>
							<ul className="nav-assignments">
								{assignmentRoutes}
							</ul>
						</div>
					</div>
				</div>
			)}
		</nav>
	)
}
export default Navbar
