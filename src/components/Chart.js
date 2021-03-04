import React from "react"

import {
	VictoryBar,
	VictoryChart,
	VictoryAxis,
	VictoryTooltip,
	VictoryLine,
	VictoryGroup,
	VictoryLabel,
	VictoryLegend,
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
	const conditionData = data.length > 0 && data
	console.log(conditionData)

	return (
		<>
			<VictoryChart height={200}>
				{/* <VictoryLabel
					text={conditionalLabel}
					x={225}
					y={8}
					textAnchor="middle"
					style={{ fill: "#120faa" }}
				/> */}
				<VictoryLine
					y={() => 1}
					style={{
						data: {
							stroke: "#bbbbbb",
							strokeWidth: 0.3,
						},
					}}
				/>
				<VictoryLine
					y={() => 2}
					style={{
						data: {
							stroke: "#bbbbbb",
							strokeWidth: 0.3,
						},
					}}
				/>
				<VictoryLine
					y={() => 3}
					style={{
						data: {
							stroke: "#bbbbbb",
							strokeWidth: 0.3,
						},
					}}
				/>
				<VictoryLine
					y={() => 4}
					style={{
						data: {
							stroke: "#bbbbbb",
							strokeWidth: 0.3,
						},
					}}
				/>
				<VictoryLine
					y={() => 5}
					style={{
						data: {
							stroke: "#bbbbbb",
							strokeWidth: 0.3,
						},
					}}
				/>
				<VictoryLine
					y={() => 4.5}
					style={{
						data: {
							stroke: "#e8e8e8",
							strokeWidth: 0.3,
						},
					}}
				/>
				<VictoryLine
					y={() => 0.5}
					style={{
						data: {
							stroke: "#e8e8e8",
							strokeWidth: 0.3,
						},
					}}
				/>
				<VictoryLine
					y={() => 1.5}
					style={{
						data: {
							stroke: "#e8e8e8",
							strokeWidth: 0.3,
						},
					}}
				/>
				<VictoryLine
					y={() => 2.5}
					style={{
						data: {
							stroke: "#e8e8e8",
							strokeWidth: 0.3,
						},
					}}
				/>
				<VictoryLine
					y={() => 3.5}
					style={{
						data: {
							stroke: "#e8e8e8",
							strokeWidth: 0.3,
						},
					}}
				/>
				<VictoryGroup offset={160 / conditionData.length}>
					<VictoryBar
						data={conditionData}
						x={"assignment"}
						y={"difficultyRating"}
						style={{ data: { fill: "#223243" } }}
						barWidth={130 / conditionData.length}
						animate={{
							duration: 1500,
							onLoad: { duration: 1000 },
						}}
						// labels={({ datum }) => `${datum.x} \n moeilijk-rating: ${datum.y.toString().slice(0, 3)}`}
						// labelComponent={<VictoryTooltip
						//     flyoutWidth={60}
						//     flyoutHeight={16}
						//     cornerRadius={2}
						//     pointerLength={4}
						//     pointerWidth={4}
						//     flyoutStyle={{
						//         stroke: "#120faa",
						//         strokeWidth: 0.6,
						//         fill: "#ffffa0"
						//     }}
						//     style={{
						//         fontSize: 6,
						//         fill: "#120faa"
						//     }} />}
					/>
					<VictoryBar
						data={conditionData}
						x={"assignment"}
						y={"enjoymentRating"}
						style={{ data: { fill: "#fbf9ab" } }}
						barWidth={130 / conditionData.length}
						animate={{
							duration: 1500,
							onLoad: { duration: 1000 },
						}}
						// labels={({ datum }) => `${datum.x} \n leuk-rating: ${datum.y.toString().slice(0, 3)}`}
						// labelComponent={<VictoryTooltip
						//     flyoutWidth={60}
						//     flyoutHeight={16}
						//     cornerRadius={2}
						//     pointerLength={4}
						//     pointerWidth={4}
						//     flyoutStyle={{
						//         stroke: "#120faa",
						//         strokeWidth: 0.6,
						//         fill: "#ffffa0"
						//     }}
						//     style={{
						//         fontSize: 6,
						//         fill: "#120faa"
						//     }} />}
					/>
				</VictoryGroup>
				<VictoryAxis
					tickLabelComponent={
						<VictoryLabel
							angle={70}
							dx={-5}
							dy={-3}
							style={{
								fontSize: 5,
								fill: "#223243",
							}}
							textAnchor={"start"}
						/>
					}
				/>
				<VictoryAxis
					dependentAxis
					domain={[0, 5]}
					style={{
						tickLabels: {
							fontSize: 7,
							fill: "#223243",
						},
						axisLabel: {
							fontSize: 6,
							padding: 35,
							fill: "#223243",
						},
					}}
				/>
				<VictoryLegend
					x={185}
					y={30}
					orientation="horizontal"
					data={[
						{
							name: "difficulty",
							symbol: { fill: "#223243" },
						},
						{
							name: "enjoyment",
							symbol: { fill: "#fbf9ab" },
						},
					]}
					style={{
						labels: {
							fontSize: 6,
							fill: "#120faa",
						},
					}}
				/>
			</VictoryChart>
			{/* <VictoryChart classname="testing" domainPadding={15} theme={wincTheme}>
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
			</VictoryChart> */}

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
