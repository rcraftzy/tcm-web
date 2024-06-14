interface Props {
  className?: string;
}

export const BermudaSquare: React.FC<Props> = ({ className }) => (
	<svg className={className} viewBox="0 0 1000 1000">
		<rect fill="#134B84" width="1000" height="1000" />
		<defs>
			<radialGradient
				id="a"
				cx="500"
				cy="500"
				r="50%"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#134B84" />
				<stop offset="1" stopColor="#001846" />
			</radialGradient>
			<radialGradient
				id="b"
				cx="500"
				cy="500"
				r="60%"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#3B7D9B" stopOpacity="1" />
				<stop offset="1" stopColor="#3B7D9B" stopOpacity="0" />
			</radialGradient>
		</defs>
		<rect fill="url(#a)" width="1000" height="1000" />
		<g
			fill="none"
			stroke="#F6B"
			strokeWidth="1"
			strokeMiterlimit="10"
			strokeOpacity=".3"
		>
			<rect x="12.5" y="12.5" width="975" height="975" />
			<rect x="25" y="25" width="950" height="950" />
			<rect x="37.5" y="37.5" width="925" height="925" />
			<rect x="50" y="50" width="900" height="900" />
			<rect x="62.5" y="62.5" width="875" height="875" />
			<rect x="75" y="75" width="850" height="850" />
			<rect x="87.5" y="87.5" width="825" height="825" />
			<rect x="100" y="100" width="800" height="800" />
			<rect x="112.5" y="112.5" width="775" height="775" />
			<rect x="125" y="125" width="750" height="750" />
			<rect x="137.5" y="137.5" width="725" height="725" />
			<rect x="150" y="150" width="700" height="700" />
			<rect x="162.5" y="162.5" width="675" height="675" />
			<rect x="175" y="175" width="650" height="650" />
			<rect x="187.5" y="187.5" width="625" height="625" />
			<rect x="200" y="200" width="600" height="600" />
			<rect x="212.5" y="212.5" width="575" height="575" />
			<rect x="225" y="225" width="550" height="550" />
			<rect x="237.5" y="237.5" width="525" height="525" />
			<rect x="250" y="250" width="500" height="500" />
			<rect x="262.5" y="262.5" width="475" height="475" />
			<rect x="275" y="275" width="450" height="450" />
			<rect x="287.5" y="287.5" width="425" height="425" />
			<rect x="300" y="300" width="400" height="400" />
			<rect x="312.5" y="312.5" width="375" height="375" />
			<rect x="325" y="325" width="350" height="350" />
			<rect x="337.5" y="337.5" width="325" height="325" />
			<rect x="350" y="350" width="300" height="300" />
			<rect x="362.5" y="362.5" width="275" height="275" />
			<rect x="375" y="375" width="250" height="250" />
			<rect x="387.5" y="387.5" width="225" height="225" />
			<rect x="400" y="400" width="200" height="200" />
			<rect x="412.5" y="412.5" width="175" height="175" />
			<rect x="425" y="425" width="150" height="150" />
			<rect x="437.5" y="437.5" width="125" height="125" />
			<rect x="450" y="450" width="100" height="100" />
			<rect x="462.5" y="462.5" width="75" height="75" />
			<rect x="475" y="475" width="50" height="50" />
			<rect x="487.5" y="487.5" width="25" height="25" />
		</g>
		<rect fillOpacity=".3" fill="url(#b)" />{" "}
	</svg>
);
