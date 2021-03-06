import React from "react"
import "../styling/globals.css"
import { GiAngelWings } from "react-icons/gi"

const Header = () => {
	return (
		<header>
			<div className="header-container">
				<div className="logo-students">
					St
					<GiAngelWings className="angle" />
					dents
				</div>
				<div className="logo-name">dashboard</div>
			</div>
		</header>
	)
}
export default Header
