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
	fontStyle
) => {
	let tag = undefined;
	switch (variant) {
		case types.HEADING1:
			tag = (
				<H1
					className={className}
					underline={underline}
					color={color}
					fontSize={fontSize}
					align={align}
					marginT={marginT}
					marginB={marginB}
					marginL={marginL}
					marginR={marginR}
					weight={weight}
					fontStyle={fontStyle}
				>
					{children}
				</H1>
			);
			break;
		case types.HEADING2:
			tag = (
				<H2
					className={className}
					underline={underline}
					color={color}
					fontSize={fontSize}
					align={align}
					marginT={marginT}
					marginB={marginB}
					marginL={marginL}
					marginR={marginR}
					weight={weight}
					fontStyle={fontStyle}
				>
					{children}
				</H2>
			);
			break;
		case types.HEADING3:
			tag = (
				<H3
					className={className}
					underline={underline}
					color={color}
					fontSize={fontSize}
					align={align}
					marginT={marginT}
					marginB={marginB}
					marginL={marginL}
					marginR={marginR}
					weight={weight}
					fontStyle={fontStyle}
				>
					{children}
				</H3>
			);
			break;
		case types.HEADING4:
			tag = (
				<H4
					className={className}
					underline={underline}
					color={color}
					fontSize={fontSize}
					align={align}
					marginT={marginT}
					marginB={marginB}
					marginL={marginL}
					marginR={marginR}
					weight={weight}
					fontStyle={fontStyle}
				>
					{children}
				</H4>
			);
			break;
		case types.HEADING5:
			tag = (
				<H5
					className={className}
					underline={underline}
					color={color}
					fontSize={fontSize}
					align={align}
					marginT={marginT}
					marginB={marginB}
					marginL={marginL}
					marginR={marginR}
					weight={weight}
					fontStyle={fontStyle}
				>
					{children}
				</H5>
			);
			break;
		case types.HEADING6:
			tag = (
				<H6
					className={className}
					underline={underline}
					color={color}
					fontSize={fontSize}
					align={align}
					marginT={marginT}
					marginB={marginB}
					marginL={marginL}
					marginR={marginR}
					weight={weight}
					fontStyle={fontStyle}
				>
					{children}
				</H6>
			);
			break;
		case types.P:
			tag = (
				<P
					className={className}
					underline={underline}
					color={color}
					fontSize={fontSize}
					align={align}
					marginT={marginT}
					marginB={marginB}
					marginL={marginL}
					marginR={marginR}
					weight={weight}
					fontStyle={fontStyle}
				>
					{children}
				</P>
			);
			break;
		case types.PRE:
			tag = (
				<PRE
					className={className}
					underline={underline}
					color={color}
					fontSize={fontSize}
					align={align}
					marginT={marginT}
					marginB={marginB}
					marginL={marginL}
					marginR={marginR}
					weight={weight}
					fontStyle={fontStyle}
				>
					{children}
				</PRE>
			);
			break;
		default:
			tag = (
				<P
					className={className}
					underline={underline}
					color={color}
					fontSize={fontSize}
					align={align}
					marginT={marginT}
					marginB={marginB}
					marginL={marginL}
					marginR={marginR}
					weight={weight}
					fontStyle={fontStyle}
				>
					{children}
				</P>
			);
	}
	return tag;
};

export { setTag };
