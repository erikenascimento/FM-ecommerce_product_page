"use client";

import styled from "styled-components";

const StyledAvatar = styled.span`
	//Background
	background-image: url("/images/image-avatar.png");
	background-size: cover;
	background-position: center;
	//Dimensioning
	border-radius: 50%;

	width: 24px;
	height: 24px;
`;

const AvatarRound = () => {
	return <StyledAvatar />;
};

export default AvatarRound;
