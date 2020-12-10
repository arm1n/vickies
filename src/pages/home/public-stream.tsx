import React, { FC } from "react";

import { Section } from "components";

import { StreamItem } from "./stream-item";

import profile_anna_miller from "images/profiles/profile-anna-miller.jpg";
// import profile_hansjoerg_rogen from "images/profiles/profile-hansjoerg-rogen.jpg";
import profile_isabella_moore from "images/profiles/profile-isabella-moore.jpg";
import profile_jack_walker from "images/profiles/profile-jack-walker.jpg";
import profile_kent_clark from "images/profiles/profile-kent-clark.jpg";
// import profile_manuel_wilson from "images/profiles/profile-manuel-wilson.jpg";
import profile_max_smith from "images/profiles/profile-max-smith.jpg";
// import profile_mia_johnson from "images/profiles/profile-mia-johnson.jpg";
import profile_olivia_lopez from "images/profiles/profile-olivia-lopez.jpg";
import profile_philipp_schwab from "images/profiles/profile-philipp-schwab.jpg";
import profile_sophia_williams from "images/profiles/profile-sophia-williams.jpg";

import idea1_1 from "images/ideas/idea1-1.jpg";
import idea1_2 from "images/ideas/idea1-2.jpg";
import idea1_3 from "images/ideas/idea1-3.jpg";

import idea2_1 from "images/ideas/idea2-1.jpg";
import idea2_2 from "images/ideas/idea2-2.jpg";
import idea2_3 from "images/ideas/idea2-3.jpg";

import idea3_1 from "images/ideas/idea3-1.jpg";
import idea3_2 from "images/ideas/idea3-2.jpg";
import idea3_3 from "images/ideas/idea3-3.jpg";

import idea4_1 from "images/ideas/idea4-1.jpg";
import idea4_2 from "images/ideas/idea4-2.jpg";
import idea4_3 from "images/ideas/idea4-3.jpg";

import idea5_1 from "images/ideas/idea5-1.jpg";
import idea5_2 from "images/ideas/idea5-2.jpg";
import idea5_3 from "images/ideas/idea5-3.jpg";

import idea6_1 from "images/ideas/idea6-1.jpg";
import idea6_2 from "images/ideas/idea6-2.jpg";
import idea6_3 from "images/ideas/idea6-3.jpg";

import idea7_1 from "images/ideas/idea7-1.jpg";
import idea7_2 from "images/ideas/idea7-2.jpg";
import idea7_3 from "images/ideas/idea7-3.jpg";

import idea8_1 from "images/ideas/idea8-1.jpg";
import idea8_2 from "images/ideas/idea8-2.jpg";
import idea8_3 from "images/ideas/idea8-3.jpg";

import styles from "./public-stream.module.css";

export const PublicStream: FC = ({ children }) => (
	<div className={styles.wrapper}>
		<Section>
			{children}
			<StreamItem
				user="Philipp Schwab"
				time="7min"
				avatar={profile_philipp_schwab}
				title="Grillable Guacamole"
				likes={753}
				dislikes={38}
				comments={23}
				text={`Barbecues are amazing. No doubt about that! The selfmade sauces shouldn´t be missed. And Guacamole is the best, no matter what you grill. Imagine the combination of both. How about a grillable Guacamole.

					I have no idea yet, but maybe someone could give me some ideas. Thanks!`}
				tags={[
					"grill",
					"vegetarian",
					"slowfood",
					"summerideas",
					"food",
					"sustainable",
					"lessmeat",
				]}
				images={[idea1_1, idea1_2, idea1_3]}
			/>
			<hr />
			<StreamItem
				user="Jack Walker"
				time="49min"
				avatar={profile_jack_walker}
				title="NAS USB-Sticks"
				likes={683}
				dislikes={34}
				comments={49}
				text={`How about that: Although the world has a lot of cloud storage solutions and some people are having NAS Systems in their homes, most people aren´t having their data saved twice for security reasons (breakdown of hardware).

					Over the years most households are having a lot of USB sticks at home. Imagine a USB dongle, where you can put serveral USB sticks together. You can enter this drive via USB port on your router and on your PC. Via different settings all your important data is more safe with small costs. Most households are happy, if they can save some family photos,... and for that, some gigabyte should be enough.`}
				tags={[
					"reuse",
					"moneysafer",
					"upsycling",
					"recyling",
					"security",
					"datasecurity",
				]}
				images={[idea2_1, idea2_2, idea2_3]}
			/>
			<hr />
			<StreamItem
				user="Anna Miller"
				time="3h 31min"
				avatar={profile_anna_miller}
				title="Strinder"
				likes={753}
				dislikes={73}
				comments={25}
				text={`Imagine an app, I call it Strinder, where you can add your partner and/or friends. Before a movie night, on the way back home you can swipe Netflix or prime Shows like on tinder. Your partner does the same and later you can directly start to watch the show, instead of wasting time, deciding what you are watching. Streaming & Tinder – Strinder.`}
				tags={[
					"timesafer",
					"streaming",
					"shows",
					"netflix",
					"prime",
					"youtube",
					"couples",
					"friends"
				]}
				images={[idea3_1, idea3_2, idea3_3]}
			/>
			<hr />
			<StreamItem
				user="Max Smith"
				time="7h 59min"
				avatar={profile_max_smith}
				title="VR Movies &amp; Concerts"
				likes={631}
				dislikes={99}
				comments={36}
				text={`That's the next big thing in entertainment. Image your favourite movie and you are in the middle of it. Not like the 3D movies in the cinema. Sure, these movies are cool, but imagine beeing a part of it. Either with VR-Goggles or with your smartphone. The Screens go up to 120hz, so the technology is already here. First movie could/should be a fully animated movie, but how cool would it be, beeing in a movie with real actors and surroudings with VR Googles. 

				Everyone can experience a movie, as he/she would be alone in the world (imagine Jurassic Park!!). In addition: With the right headphones/buds the music/concert industry could drastically scale their customers/attendees all over the world.`}
				tags={[
					"filmingindustry",
					"experience",
					"concerts",
					"movies",
					"innovation",
					"cinema@home",
					"disruptive",
					"homecinema"
				]}
				images={[idea4_1, idea4_2, idea4_3]}
			/>
			<hr />
			<StreamItem
				user="Isabella Moore"
				time="1d"
				avatar={profile_isabella_moore}
				title="ATMs with face recognition"
				likes={544}
				dislikes={92}
				comments={77}
				text={`I can enter my banking app including my account with my face and I can confirm my transactions with my thumb. Why can't I, if I want it, do the same at the ATM (maybe in my homecountry)? It saves plastic, postal services and i cannot forget it.`}
				tags={[
					"futurebanking",
					"paymenttransactions",
					"realcash",
					"cash",
					"euro",
					"convenient",
				]}
				images={[idea5_1, idea5_2, idea5_3]}
			/>
			<hr />
			<StreamItem
				user="Kent Clark"
				time="1d"
				avatar={profile_kent_clark}
				title="Housedoor / Dorrbell with face recognition"
				likes={669}
				dislikes={198}
				comments={59}
				text={`Most smarthouses or housedoors are having cameras and the houseowner still needs a key, keycard or the smartphone. Something that can be lost. If the doorbell has a 3D camera (like modern smartphones), the houseowner's face could be recognized with a smile and there is no key necessary. With this technology the securitymeasuses should be also very high.`}
				tags={[
					"smarthome",
					"keyless",
					"facerecognition",
					"biometrics",
					"techtrends",
					"innovation",
				]}
				images={[idea6_1, idea6_2, idea6_3]}
			/>
			<hr />
			<StreamItem
				user="Olivia Lopez"
				time="3d"
				avatar={profile_olivia_lopez}
				title="Beeswax as wrapping"
				likes={669}
				dislikes={198}
				comments={59}
				text={`Instead of plastic, companies could use beeswax as wrapping for products. It could be used at home or in the supermarket for food, which is normally packed in plastic.`}
				tags={[
					"sustainability",
					"wrapping",
					"beeswax",
					"noplastic",
				]}
				images={[idea7_1, idea7_2, idea7_3]}
			/>
			<hr />
			<StreamItem
				user="Sophia Williams"
				time="4d"
				avatar={profile_sophia_williams}
				title="Emergency tracker for remote areas"
				likes={421}
				dislikes={133}
				comments={68}
				text={`In a case of emergency in the mountains, it takes most of the time several hours or even days to find the missing person. Most of the time this is the case because there ist no connection (or power) to the smartphone.

				Imagine a small cube which you turn on at the beginning of your walking trip and it sends a strong personalized signal every 1 to 5 minutes. If you didn´t arrive at your destination, the rescue team would receive the signal for example with a helicopter or a drone from the air. It should have enough power for several days.`}
				tags={[
					"lifesafer",
					"savemountains",
					"hiking",
					"walking",
					"remoteareas",
					"alps"
				]}
				images={[idea8_1, idea8_2, idea8_3]}
			/>
		</Section>
	</div>
);
