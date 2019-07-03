import { setTag } from './functions';

const Typography = ({
	//Basic typography
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
	//Advanced props
	clampin,
	truncate,
	css,
	desktopCSS,
	tabletCSS,
	phoneCSS,
	mediaCSS,
	//Events:
	onClick,
	onCopy,
	onCut,
	onContextMenu,
	onDoubleClick
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
		clampin,
		truncate,
		css,
		desktopCSS,
		tabletCSS,
		phoneCSS,
		mediaCSS,
		onClick,
		onCopy,
		onCut,
		onContextMenu,
		onDoubleClick

	);
};

export default Typography;
