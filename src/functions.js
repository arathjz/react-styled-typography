import React from 'react';
import { H1, H2, H3, H4, H5, H6, P, PRE } from './elements';
import types from './types';

const setTag = (
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
) => {
	let tag = undefined;

	const config = {
		color,
		variant,
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
	}

	switch (variant) {
		case types.HEADING1:
			tag = (
				<H1 {...config}>
					{children}
				</H1>
			);
			break;
		case types.HEADING2:
			tag = (
				<H2 {...config}>
					{children}
				</H2>
			);
			break;
		case types.HEADING3:
			tag = (
				<H3 {...config}>
					{children}
				</H3>
			);
			break;
		case types.HEADING4:
			tag = (
				<H4 {...config}>
					{children}
				</H4>
			);
			break;
		case types.HEADING5:
			tag = (
				<H5 {...config}>
					{children}
				</H5>
			);
			break;
		case types.HEADING6:
			tag = (
				<H6 {...config}>
					{children}
				</H6>
			);
			break;
		case types.P:
			tag = (
				<P {...config}>
					{children}
				</P>
			);
			break;
		case types.PRE:
			tag = (
				<PRE {...config}>
					{children}
				</PRE>
			);
			break;
		default:
			tag = (
				<P {...config}>
					{children}
				</P>
			);
	}
	return tag;
};

export { setTag };
