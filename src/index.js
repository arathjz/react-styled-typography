import { setTag } from './functions';

const Typography = ({
	color,
	variant,
	children,
	marginT,
	marginB,
	marginL,
	marginR,
	align,
	fontSize,
	className,
	underline,
	weight,
	fontStyle,
	CSS,
	desktopCSS,
	tabletCSS,
	phoneCSS,
	mediaCSS
}) => {
	return setTag(
		color,
		variant,
		children,
		marginT,
		marginB,
		marginL,
		marginR,
		align,
		fontSize,
		className,
		underline,
		weight,
		fontStyle,
		CSS,
		desktopCSS,
		tabletCSS,
		phoneCSS,
		mediaCSS
	);
};

export default Typography;
