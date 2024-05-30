import styled from "styled-components"

type StyledTitlePropsType = {
	paddingLeft?: string
}

export const MyTitle = styled.h1<StyledTitlePropsType>`
	font-size: 16px;
	font-weight: bold;
	color: black;
	padding-left: ${props => props.paddingLeft || "10px"};
`