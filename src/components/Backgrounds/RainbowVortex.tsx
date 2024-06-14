interface Props {
	className?: string;
}

export const RainbowVortex: React.FC<Props> = ({ className }) => (
	<svg className={className} viewBox="0 0 1600 800">
		<rect fill="#3B7D9B" width="1600" height="800" />
		<g stroke="#000" strokeWidth="66.7" strokeOpacity="0.05">
			<circle fill="#3B7D9B" cx="0" cy="0" r="1800" />
			<circle fill="#357496" cx="0" cy="0" r="1700" />
			<circle fill="#306a92" cx="0" cy="0" r="1600" />
			<circle fill="#2a608c" cx="0" cy="0" r="1500" />
			<circle fill="#255787" cx="0" cy="0" r="1400" />
			<circle fill="#214d81" cx="0" cy="0" r="1300" />
			<circle fill="#1c447b" cx="0" cy="0" r="1200" />
			<circle fill="#183a75" cx="0" cy="0" r="1100" />
			<circle fill="#15326e" cx="0" cy="0" r="1000" />
			<circle fill="#112967" cx="0" cy="0" r="900" />
			<circle fill="#0e2160" cx="0" cy="0" r="800" />
			<circle fill="#0b1a58" cx="0" cy="0" r="700" />
			<circle fill="#091350" cx="0" cy="0" r="600" />
			<circle fill="#070d48" cx="0" cy="0" r="500" />
			<circle fill="#05083f" cx="0" cy="0" r="400" />
			<circle fill="#030437" cx="0" cy="0" r="300" />
			<circle fill="#04022d" cx="0" cy="0" r="200" />
			<circle fill="#040124" cx="0" cy="0" r="100" />
		</g>
	</svg>
);
