import React from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";

import {
	DropDownContainer,
	DropDownIcon,
	DropDownItem,
	DropDownItemDesc,
	DropDownItemTitle,
	DropDownTextContainer,
} from "./NavDropDownStyles";

const NavDropDown = ({ isOpen }) => {
	console.log(isOpen);
	return (
		<DropDownContainer active={isOpen}>
			<DropDownItem href="#" target="_blank" rel="noreferrer">
				<DropDownIcon>
					<AiFillPhone />
				</DropDownIcon>
				<DropDownTextContainer>
					<DropDownItemTitle>Phone</DropDownItemTitle>
					<DropDownItemDesc>780-965-2229</DropDownItemDesc>
				</DropDownTextContainer>
			</DropDownItem>
			<DropDownItem href="#" target="_blank" rel="noreferrer">
				<DropDownIcon>
					<AiOutlineMail />
				</DropDownIcon>
				<DropDownTextContainer>
					<DropDownItemTitle>Email</DropDownItemTitle>
					<DropDownItemDesc>tristandeane93@gmail.com</DropDownItemDesc>
				</DropDownTextContainer>
			</DropDownItem>
			<DropDownItem href="#" target="_blank" rel="noreferrer">
				<DropDownIcon>
					<FaLocationArrow />
				</DropDownIcon>
				<DropDownTextContainer>
					<DropDownItemTitle>Address</DropDownItemTitle>
					<DropDownItemDesc>Edmonton, Alberta</DropDownItemDesc>
				</DropDownTextContainer>
			</DropDownItem>
		</DropDownContainer>
	);
};

export default NavDropDown;
