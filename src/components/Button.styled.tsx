import styled, { css } from "styled-components"

type StyledBtnPropsType = {
	color?: string
	btnType?: "primary" | "outline"
	paddingLeft?: string
}

export const BoxForBtn = styled.div<StyledBtnPropsType>`
	display: flex;
	flex-direction: row;
	gap: 12px;
	padding-left: ${props => props.paddingLeft || "10px"};
`

export const StyledBtn = styled.button<StyledBtnPropsType>`
border: none;
	width: 86px;
	height: 30px;
	font-weight: 700;
	font-size: 10px;
	line-height: 200%;
	border-radius: 5px;
	

	&:hover {
		opacity: 0.7;
		cursor: pointer;
	}

	${props => props.btnType === "primary" && css<StyledBtnPropsType>`
		background-color: ${props => props.color};
		color: white
	`}

	${props => props.btnType === "outline" && css<StyledBtnPropsType>`
		border: 2px solid ${props => props.color};
		color: ${props => props.color};
	`}
`

