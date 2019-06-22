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
	fontStyle
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
		fontStyle
	);
};

export default Typography;
