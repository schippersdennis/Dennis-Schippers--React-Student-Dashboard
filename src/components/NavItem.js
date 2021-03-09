import React from "react"
import { NavLink } from "react-router-dom"
import Dropdown from "react-bootstrap/Dropdown"
import { useMediaQuery } from "@material-ui/core"

export const NavItem = ({ name, id }) => {
	let path = ""
	const isActive = useMediaQuery("(max-width:1028px)")

	if (id === "student") path = `/student/${name}`
	if (id === "assignment") path = `/assignment/${name}`

	return isActive ? (
		//mobile nav-link
		<NavLink className="nav-item" to={path}>
			<Dropdown.Item href={path}>{name}</Dropdown.Item>
		</NavLink>
	) : (
		//desktop nav-link
		<NavLink
			exact
			style={{ textDecoration: "none" }}
			className="nav-item"
			activeClassName="is-active"
			to={path}
		>
			<li>{name}</li>
		</NavLink>
	)
}
