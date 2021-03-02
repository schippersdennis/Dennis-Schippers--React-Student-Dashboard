import { stratify } from "d3"
import React from "react"
import useDashBoard from "./useDashBoard"
import {
	VictoryBar,
	VictoryChart,
	VictoryAxis,
	VictoryTooltip,
	VictoryLine,
	VictoryGroup,
} from "victory"
const wincTheme = {
	axis: {
		style: {
			axis: {
				fill: "transparent",
				stroke: "#223243",
				strokeWidth: 2,
			},
			axisLabel: {
				textAnchor: "start",
				fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
				fontSize: 5,
				letterSpacing: "normal",
				padding: 8,
				fill: "#455A64",
				stroke: "transparent",
				strokeWidth: 0,
			},
			grid: {
				fill: "none",
				stroke: "none",
			},
			ticks: {
				fill: "transparent",
				size: 5,
				stroke: "#223243",
				strokeWidth: 1,
				strokeLinecap: "round",
				strokeLinejoin: "round",
			},
			tickLabels: {
				fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
				textAnchor: "start",
				fontSize: 7,
				letterSpacing: "normal",
				padding: 0,

				fill: "#455A64",
				stroke: "transparent",
				strokeWidth: 0,
				angle: 90,
			},
		},
		width: 350,
		height: 350,
		padding: 50,
	},
	bar: {
		style: {
			data: {
				fill: "#4a90e2",
				padding: 0,
				strokeWidth: 0,
			},
			labels: {
				fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
				fontSize: 7,
				letterSpacing: "normal",
				padding: 8,
				fill: "#223243",
				stroke: "transparent",
				strokeWidth: 0,
			},
		},
		width: 350,
		height: 350,
		padding: 20,
	},

	chart: {
		width: 500,
		height: 100,
		padding: 20,
	},

	group: {
		colorScale: ["#223243", "#FFF59D"],
		width: 350,
		height: 350,
		padding: 50,
	},
	legend: {
		colorScale: ["#223243", "#FFF59D"],
		gutter: 10,
		orientation: "vertical",
		titleOrientation: "top",
		style: {
			data: {
				type: "circle",
			},
			labels: {
				fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
				fontSize: 12,
				letterSpacing: "normal",
				padding: 8,
				fill: "#455A64",
				stroke: "transparent",
				strokeWidth: 0,
			},
			title: {
				fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
				fontSize: 12,
				letterSpacing: "normal",
				padding: 5,
				fill: "#455A64",
				stroke: "transparent",
				strokeWidth: 0,
			},
		},
	},
	line: {
		style: {
			data: {
				fill: "transparent",
				opacity: 1,
				stroke: "#455A64",
				strokeWidth: 2,
			},
			labels: {
				fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
				fontSize: 12,
				letterSpacing: "normal",
				padding: 8,
				fill: "#455A64",
				stroke: "transparent",
				strokeWidth: 0,
			},
		},
		width: 350,
		height: 350,
		padding: 50,
	},

	tooltip: {
		style: {
			fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
			fontSize: 5,
			letterSpacing: "normal",
			padding: 5,
			fill: "#455A64",
			stroke: "transparent",
			strokeWidth: 0,
			pointerEvents: "none",
		},
		flyoutStyle: {
			stroke: "#223243",
			strokeWidth: 0.2,
			fill: "#f0f0f0",
			pointerEvents: "none",
		},
		cornerRadius: 2,
		pointerLength: 50,
	},
}
const Chart = ({ data }) => {
	return (
		<>
			<VictoryChart classname="testing" domainPadding={15} theme={wincTheme}>
				<VictoryGroup
					offset={3}
					animate={{
						duration: 900,
						onLoad: { duration: 900 },
					}}
				>
					<VictoryBar
						labelComponent={<VictoryTooltip />}
						data={data}
						x="assignment"
						y="difficultyRating"
						tickValues={[1, 2, 3, 4, 5]}
						tickFormat={data.map((avg) => avg.assignment)}
					/>
					<VictoryBar
						labelComponent={<VictoryTooltip />}
						data={data}
						x="assignment"
						y="enjoymentRating"
						tickValues={[1, 2, 3, 4, 5]}
						tickFormat={data.map((avg) => avg.assignment)}
					/>
				</VictoryGroup>
				<VictoryAxis
					// tickValues specifies both the number of ticks and where
					// they are placed on the axis
					tickValues={[1, 2, 3, 4, 5]}
					tickFormat={data.map((avg) => avg.assignment)}
				/>
				<VictoryAxis dependentAxis />
			</VictoryChart>

			{/* <VictoryChart domainPadding={15} theme={wincTheme}>
				<VictoryLine
					style={{
						data: { stroke: "#c43a31" },
						parent: { border: "1px solid #ccc" },
					}}
					data={assignmentRatingAverage}
					x="assignment"
					y="difficultyRating"
				/>
				<VictoryLine
					style={{
						data: { stroke: "#ff00ff" },
						parent: { border: "1px solid #ccc" },
					}}
					data={assignmentRatingAverage}
					x="assignment"
					y="enjoymentRating"
				/>
				<VictoryAxis
					// tickValues specifies both the number of ticks and where
					// they are placed on the axis
					tickValues={[1, 2, 3, 4, 5]}
					tickFormat={assignmentRatingAverage.map(
						(avg) => avg.assignment
					)}
				/>
				<VictoryAxis dependentAxis />
			</VictoryChart> */}
		</>
	)
}
export default Chart
