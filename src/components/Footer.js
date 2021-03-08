import React from "react"
import "../styling/globals.css"
import { FaGithub } from "react-icons/fa"
import { ImLinkedin } from "react-icons/im"
import { SiGmail } from "react-icons/si"
import { FaCopyright } from "react-icons/fa"

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<a
					target="blanc"
					href="https://github.com/schippersdennis?tab=repositories"
					className="footer-item-wrap"
				>
					<FaGithub className="footer-icon" /> <p>GitHub</p>{" "}
				</a>

				<a
					target="blanc"
					href="https://www.linkedin.com/in/dennis-schippers-25b9311ba/"
					className="footer-item-wrap"
				>
					<ImLinkedin className="footer-icon" />
					<p>LinkedIn</p>
				</a>
				<a
					target="blanc"
					href="mailto: schippersdennis@gmail.com"
					className="footer-item-wrap"
				>
					<SiGmail className="footer-icon" />
					<p>Email</p>
				</a>
			</div>

			<p className="naw">
				{" "}
				Dennis Schippers
				<FaCopyright className="footer-icon" />
				2021 All Rights Reserved
			</p>
		</div>
	)
}
export default Footer
