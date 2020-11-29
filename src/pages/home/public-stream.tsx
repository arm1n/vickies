import React, { FC } from "react";

import { Section } from "components";

import { StreamItem } from "./stream-item";

import profile2 from "images/profile2.jpg";
import profile3 from "images/profile3.jpg";

import idea1_1 from "images/ideas/idea1-1.jpg";
import idea1_2 from "images/ideas/idea1-2.jpg";
import idea1_3 from "images/ideas/idea1-3.jpg";

import idea2_1 from "images/ideas/idea2-1.jpg";
import idea2_2 from "images/ideas/idea2-2.jpg";
import idea2_3 from "images/ideas/idea2-3.jpg";

import styles from "./public-stream.module.css";

export const PublicStream: FC = () => (
	<div className={styles.wrapper}>
		<Section>
			<StreamItem
				user="Jane Doe"
				time="8h"
				avatar={profile2}
				title="Stunning idea"
				likes={493}
				dislikes={139}
				comments={73}
				text={`Lorem ipsum dolor sit amet, consectetur adipiscing	elit. Nunc posuere venenatis dolor, in egestas purus sodales id. Ut nulla nulla, consequat eget purus in, pulvinar venenatis lectus. Cras eu nibh eu lorem posuere ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie non tellus quis pulvinar. Sed ut interdum libero. Pellentesque eu auctor nunc. Etiam pellentesque, sem cursus
					mattis accumsan, mauris orci sodales magna, et vulputate velit neque eu enim. Proin auctor mollis fringilla.

					Aliquam nec dolor fringilla, ornare sapien id, viverra leo. Vestibulum et lacus nunc. Maecenas quis	gravida orci. Vestibulum placerat dictum malesuada.	Vestibulum eget eleifend nisl. Maecenas ultrices leo et tellus efficitur imperdiet. Nunc at elementum
					ipsum.`}
				tags={[
					"tag1",
					"tag2",
					"tag3",
					"tag4",
					"tag5",
					"tag6",
					"tag7",
					"tag8",
				]}
				images={[idea1_1, idea1_2, idea1_3]}
			/>
			<hr />
			<StreamItem
				user="John Wayne"
				time="2d"
				avatar={profile3}
				title="Breaking change"
				likes={312}
				dislikes={80}
				comments={49}
				text={`Lorem ipsum dolor sit amet, consectetur adipiscing	elit. Nunc posuere venenatis dolor, in egestas purus sodales id. Ut nulla nulla, consequat eget purus in, pulvinar venenatis lectus. Cras eu nibh eu lorem posuere ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie non tellus quis pulvinar. Sed ut interdum libero. Pellentesque eu auctor nunc. Etiam pellentesque, sem cursus
					mattis accumsan, mauris orci sodales magna, et vulputate velit neque eu enim. Proin auctor mollis fringilla.

					Aliquam nec dolor fringilla, ornare sapien id, viverra leo. Vestibulum et lacus nunc. Maecenas quis	gravida orci. Vestibulum placerat dictum malesuada.	Vestibulum eget eleifend nisl. Maecenas ultrices leo et tellus efficitur imperdiet. Nunc at elementum
					ipsum.`}
				tags={[
					"tag1",
					"tag2",
					"tag3",
					"tag4",
					"tag5",
					"tag6",
					"tag7",
					"tag8",
				]}
				images={[idea2_1, idea2_2, idea2_3]}
			/>
		</Section>
	</div>
);
