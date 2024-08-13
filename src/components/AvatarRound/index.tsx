//This is needed to tell Next.js that this component should be rendered client-sided
"use client";

import styled from "styled-components";

//Creating an interface is necessary to allow props to be sent by declaring it as the data type of and styled component
interface IAvatarPath {
	$imagepath: string;
}

//The styled component will have the interface who will expect a string
const StyledAvatar = styled.span<IAvatarPath>`
	//Background
	background-image: url(${props => props.$imagepath});
	background-size: cover;
	background-position: center;
	//Dimensioning
	border-radius: 50%;

	width: 24px;
	height: 24px;
`;

//this prop has the prefix $ to indicate react that is an transient prop, avoiding console errors
const AvatarRound = () => {
	return <StyledAvatar $imagepath="/images/image-avatar.png" />;
};

export default AvatarRound;
