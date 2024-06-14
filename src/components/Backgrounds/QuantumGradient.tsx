interface Props {
	className?: string;
}
export const QuantumGradient: React.FC<Props> = ({ className }) => (
	<svg className={className} viewBox="0 0 1200 800">
		<path fill="#3B7D9B" d="M0 0h1200v800H0z" />
		<defs>
			<linearGradient
				id="a"
				gradientUnits="userSpaceOnUse"
				x1="600"
				y1="25"
				x2="600"
				y2="777"
			>
				<stop offset="0" stopColor="#3B7D9B" />
				<stop offset="1" stopColor="#0A3979" />
			</linearGradient>
			<linearGradient
				id="b"
				gradientUnits="userSpaceOnUse"
				x1="650"
				y1="25"
				x2="650"
				y2="777"
			>
				<stop offset="0" stopColor="#357899" />
				<stop offset="1" stopColor="#093573" />
			</linearGradient>
			<linearGradient
				id="c"
				gradientUnits="userSpaceOnUse"
				x1="700"
				y1="25"
				x2="700"
				y2="777"
			>
				<stop offset="0" stopColor="#307297" />
				<stop offset="1" stopColor="#07316e" />
			</linearGradient>
			<linearGradient
				id="d"
				gradientUnits="userSpaceOnUse"
				x1="750"
				y1="25"
				x2="750"
				y2="777"
			>
				<stop offset="0" stopColor="#2a6c95" />
				<stop offset="1" stopColor="#062e68" />
			</linearGradient>
			<linearGradient
				id="e"
				gradientUnits="userSpaceOnUse"
				x1="800"
				y1="25"
				x2="800"
				y2="777"
			>
				<stop offset="0" stopColor="#256692" />
				<stop offset="1" stopColor="#052a62" />
			</linearGradient>
			<linearGradient
				id="f"
				gradientUnits="userSpaceOnUse"
				x1="850"
				y1="25"
				x2="850"
				y2="777"
			>
				<stop offset="0" stopColor="#216090" />
				<stop offset="1" stopColor="#04265c" />
			</linearGradient>
			<linearGradient
				id="g"
				gradientUnits="userSpaceOnUse"
				x1="900"
				y1="25"
				x2="900"
				y2="777"
			>
				<stop offset="0" stopColor="#1c598d" />
				<stop offset="1" stopColor="#032356" />
			</linearGradient>
			<linearGradient
				id="h"
				gradientUnits="userSpaceOnUse"
				x1="950"
				y1="25"
				x2="950"
				y2="777"
			>
				<stop offset="0" stopColor="#185389" />
				<stop offset="1" stopColor="#022050" />
			</linearGradient>
			<linearGradient
				id="i"
				gradientUnits="userSpaceOnUse"
				x1="1000"
				y1="25"
				x2="1000"
				y2="777"
			>
				<stop offset="0" stopColor="#144c86" />
				<stop offset="1" stopColor="#021c49" />
			</linearGradient>
			<linearGradient
				id="j"
				gradientUnits="userSpaceOnUse"
				x1="1050"
				y1="25"
				x2="1050"
				y2="777"
			>
				<stop offset="0" stopColor="#104682" />
				<stop offset="1" stopColor="#011943" />
			</linearGradient>
			<linearGradient
				id="k"
				gradientUnits="userSpaceOnUse"
				x1="1100"
				y1="25"
				x2="1100"
				y2="777"
			>
				<stop offset="0" stopColor="#0d3f7d" />
				<stop offset="1" stopColor="#00163d" />
			</linearGradient>
			<linearGradient
				id="l"
				gradientUnits="userSpaceOnUse"
				x1="1150"
				y1="25"
				x2="1150"
				y2="777"
			>
				<stop offset="0" stopColor="#0A3979" />
				<stop offset="1" stopColor="#001336" />
			</linearGradient>
		</defs>
		<path fill="url(#a)" d="M0 0h1200v800H0z" />
		<path fill="url(#b)" d="M100 0h1100v800H100z" />
		<path fill="url(#c)" d="M200 0h1000v800H200z" />
		<path fill="url(#d)" d="M300 0h900v800H300z" />
		<path fill="url(#e)" d="M400 0h800v800H400z" />
		<path fill="url(#f)" d="M500 0h700v800H500z" />
		<path fill="url(#g)" d="M600 0h600v800H600z" />
		<path fill="url(#h)" d="M700 0h500v800H700z" />
		<path fill="url(#i)" d="M800 0h400v800H800z" />
		<path fill="url(#j)" d="M900 0h300v800H900z" />
		<path fill="url(#k)" d="M1000 0h200v800h-200z" />
		<path fill="url(#l)" d="M1100 0h100v800h-100z" />
	</svg>
);
