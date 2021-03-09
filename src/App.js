import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Average from "./components/Average"
import Student from "./components/Student"
import Assignment from "./components/Assignment"
import { StudentStateProvider } from "./components/StudentStateContext"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
	return (
		<Router>
			<div className="App">
				<StudentStateProvider>
					<Header />
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Average />
						</Route>
						<Route exact path="/student/:name">
							<Student />
						</Route>
						<Route exact path="/assignment/:name">
							<Assignment />
						</Route>
					</Switch>
					<Footer />
				</StudentStateProvider>
			</div>
		</Router>
	)
}

export default App
