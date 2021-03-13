import React from "react"
import "../styling/globals.css"
import { Link } from "react-router-dom"
import { GiAngelWings } from "react-icons/gi"

const Header = () => {
	return (
		<header>
			<div className="header-container">
				<Link className="header-home" to="/">
					<div className="logo-students">
						<>
							<span> St </span>
							<GiAngelWings className="angle" />
							<span>dent</span>
						</>
						<div className="logo-name">dashboard</div>
					</div>
				</Link>
			</div>
		</header>
	)
}
export default Header
