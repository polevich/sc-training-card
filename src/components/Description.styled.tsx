import styled from "styled-components"

type StyledDescriptionPropsType = {
	paddingLeft?: string
}

export const MyDescription = styled.p<StyledDescriptionPropsType>`
font-size: 12px;
	color: #ABB3BA;
	padding-left: ${props => props.paddingLeft || "10px"};
`