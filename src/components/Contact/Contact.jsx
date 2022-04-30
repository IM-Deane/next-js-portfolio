import React from "react";

import {
	Section,
	SectionTitle,
	SectionText,
	SectionDivider,
} from "../../styles/GlobalComponents";
import { Email } from "./ContactStyles";

function Contact() {
	return (
		<Section id="contact">
			<SectionDivider />
			<br />
			<SectionTitle>Let&apos;s Build Something Cool</SectionTitle>
			<SectionText>
				Shoot me a message if you’re looking for a <em>goofy engineer</em>, have
				a question, or just want to chat.
			</SectionText>
			<SectionText>
				<Email href="mailto:tristandeane93@gmail.com">
					tristandeane93@gmail.com
				</Email>
			</SectionText>
		</Section>
	);
}

export default Contact;
