import React from "react";
import "./CircularProgressBar.css";

const CircularProgressBar = ({ progress, text }) => {
	const radius = 39;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (progress / 100) * circumference;

	return (
		<svg
			className="circular-progress"
			width={radius * 2}
			height={radius * 2}
			viewBox={`0 0 ${radius * 2} ${radius * 2}`}
		>
			<g transform={`rotate(-90 ${radius} ${radius})`}>
				<circle
					className="circular-progress-bar"
					strokeWidth="4"
					fill="transparent"
					r={radius}
					cx={radius}
					cy={radius}
					style={{
						strokeDasharray: circumference,
						strokeDashoffset: offset,
					}}
				>
					<animate
						attributeName="stroke-dashoffset"
						dur="2s"
						from="0"
						to={offset}
						repeatCount="1"
						fill="freeze"
					/>
				</circle>
				<text
					className="circular-progress-percentage"
					x="50%"
					y="50%"
					dy="-0.5em"
					textAnchor="middle"
					alignmentBaseline="middle"
					transform={`rotate(90 ${radius} ${radius})`}
				>
					{progress}%
				</text>
				<text
					className="circular-progress-text"
					x="50%"
					y="50%"
					dy="0.5em"
					textAnchor="middle"
					alignmentBaseline="middle"
					transform={`rotate(90 ${radius} ${radius})`}
				>
					{text.split(" ").map((word, index) => (
						<tspan key={index} x="50%" dy="1em">
							{word}
						</tspan>
					))}
				</text>
			</g>
		</svg>
	);
};

export default CircularProgressBar;
