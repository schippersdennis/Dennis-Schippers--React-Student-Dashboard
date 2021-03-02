import React from "react"
import { NavLink } from "react-router-dom"

export const NavItem = ({ name, id }) => {
	let path = ""
	if (id === "student") path = `/student/${name}`
	if (id === "assignment") path = `/assignment/${name}`

	return (
		<li>
			<NavLink className="nav-item" activeClassName="is-active" to={path}>
				{name}
			</NavLink>
		</li>
	)
}
