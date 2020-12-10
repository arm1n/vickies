import React, { FC } from "react";

import { Section } from "components";

import { StreamItem } from "./stream-item";

// import profile_anna_miller from "images/profiles/profile-anna-miller.jpg";
// import profile_hansjoerg_rogen from "images/profiles/profile-hansjoerg-rogen.jpg";
// import profile_isabella_moore from "images/profiles/profile-isabella-moore.jpg";
// import profile_jack_walker from "images/profiles/profile-jack-walker.jpg";
// import profile_kent_clark from "images/profiles/profile-kent-clark.jpg";
import profile_manuel_wilson from "images/profiles/profile-manuel-wilson.jpg";
// import profile_max_smith from "images/profiles/profile-max-smith.jpg";
import profile_mia_johnson from "images/profiles/profile-mia-johnson.jpg";
// import profile_olivia_lopez from "images/profiles/profile-olivia-lopez.jpg";
// import profile_philipp_schwab from "images/profiles/profile-philipp-schwab.jpg";
// import profile_sophia_williams from "images/profiles/profile-sophia-williams.jpg";

import idea11_1 from "images/ideas/idea11-1.jpg";
import idea11_2 from "images/ideas/idea11-2.jpg";
import idea11_3 from "images/ideas/idea11-3.jpg";

import idea12_1 from "images/ideas/idea12-1.jpg";
import idea12_2 from "images/ideas/idea12-2.jpg";
import idea12_3 from "images/ideas/idea12-3.jpg";

import styles from "./company-stream.module.css";

export const CompanyStream: FC = () => (
	<div className={styles.wrapper}>
		<Section>
			<StreamItem
				user="Mia Johnson"
				time="6h"
				avatar={profile_mia_johnson}
				title="Think Tank"
				likes={239}
				dislikes={95}
				comments={32}
				text={`Hello team, I do have an idea for all of us. Our teamwork is great and i think I can speak for all of us, that we enjoy working together. But sometimes it is difficult to work concetrated and work in quite, or even having a private phone call. And going half way to the other side oft he building for an empty meeting room is difficult. 

					How about we install a small Think tank near our wardrobe – this corner is not used and this installation makes us even more efficient. Who thinks like me?`}
				tags={[
					"workingquiet",
					"efficient",
					"private",
					"thinktanks",
				]}
				images={[idea11_1, idea11_2, idea11_3]}
			/>
			<hr />
			<StreamItem
				user="Manuel Wilson"
				time="5d"
				avatar={profile_manuel_wilson}
				title="Implement a daily"
				likes={93}
				dislikes={51}
				comments={14}
				text={` just made the first experience with a project made with SCRUM technique. We could also implement one thing for our daily routine.

				How about we implement a daily for about 5 minutes at 8.00 o'clock in the morning and we 4 drink a coffee together. So we know what the others are doing, maybe someone who needs help. So we can make our weekly 1 hour jourefixe into a 3 weeks routine. So we are closer as a team and we save time.`}
				tags={[
					"team",
					"teamwork",
					"scrum",
					"daily",
					"meetingculture",
					"workatmosphere"
				]}
				images={[idea12_1, idea12_2, idea12_3]}
			/>
		</Section>
	</div>
);
