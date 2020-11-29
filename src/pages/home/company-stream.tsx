import React, { FC } from "react";

import { Section } from "components";

import { StreamItem } from "./stream-item";

import profile4 from "images/profile4.jpg";

import idea3_1 from "images/ideas/idea3-1.jpg";
import idea3_2 from "images/ideas/idea3-2.jpg";
import idea3_3 from "images/ideas/idea3-3.jpg";

import styles from "./company-stream.module.css";

export const CompanyStream: FC = () => (
	<div className={styles.wrapper}>
		<Section>
			<StreamItem
				user="Scala Johanson"
				time="6m"
				avatar={profile4}
				title="Business case"
				likes={239}
				dislikes={95}
				comments={32}
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
				images={[idea3_1, idea3_2, idea3_3]}
			/>
		</Section>
	</div>
);
