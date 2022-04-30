import styled from "styled-components";
import { SecondaryBtnBack } from "../../styles/GlobalComponents";

import Button from "../../styles/GlobalComponents/Button";

export const LeftSection = styled.div`
	width: 100%;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 80%;
		display: flex;
		flex-direction: column;

		margin: 0 auto;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		display: flex;
		flex-direction: column;

		margin: 0 auto;
	}
`;

export const HeroButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
	width: 100%;

	@media ${(props) => props.theme.breakpoints.sm} {
		flex-direction: column;
		justif-content: center;
		align-items: center;
	}
`;

export const HeroButton = styled(Button)`
	margin-bottom: 10px;
`;

export const HeroButtonAlt = styled(SecondaryBtnBack)`
	margin-left: 10px;

	@media ${(props) => props.theme.breakpoints.sm} {
		margin-left: 0;
	}
`;
